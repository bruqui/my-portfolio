/* eslint-disable import/no-unused-modules */
import React, {createContext, useCallback, useLayoutEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {get, throttle} from 'lodash';

import {phoneMax, tabletMax} from '../../styles/_device-sizes.scss';

const DEFAULT_CONTEXT = {
    handhelds: false,
    height: 0,
    lastScrollDirection: null,
    mediumScreens: false,
    scrolledPastWindowHeight: false,
    wideScreens: false,
};

export const ScrollResizeContext = createContext(DEFAULT_CONTEXT);

/**
 * Provider for passing down the width/height and different booleans
 * based on the device.
 */
export default function ScrollResizeProvider({children}) {
    const [context, setContext] = useState(DEFAULT_CONTEXT);
    const [windowDimensions, setWindowDimensions] = useState({width: 0, height: 0});
    const [scrollWait, setScrollWait] = useState(false);
    const [resizeWait, setResizeWait] = useState(false);

    useLayoutEffect(() => {
        window.addEventListener('scroll', throttle(handleScroll, 200));
        window.addEventListener('resize', throttle(handleResize, 200));

        if (context.height === 0) {
            handleResize();
        }

        return () => {
            window.removeEventListener('scroll', throttle);
            window.removeEventListener('resize', throttle);
        };
    });

    const isPageOffset = useCallback(() => get(window, 'pageXOffset') !== undefined);
    const isCSS1Compat = useCallback(
        () => get(document, 'compatMode', '') === 'CSS1Compat',
    );

    function getScrollPosition() {
        // let scrollX = 0;
        let scrollY = 0;

        if (isPageOffset) {
            // scrollX = window.pageXOffset;
            scrollY = window.pageYOffset;
        } else if (isCSS1Compat) {
            // scrollX = document.documentElement.scrollLeft;
            scrollY = document.documentElement.scrollTop;
        } else {
            // scrollX = document.body.scrollLeft;
            scrollY = document.body.scrollTop;
        }

        // Leaving scrollX out unless I need it.
        return {scrollY};
    }

    function handleScroll() {
        const {scrollY} = getScrollPosition();
        if (!scrollWait) {
            setScrollWait(true);
            setContext({
                ...context,
                scrolledPastWindowHeight: scrollY > windowDimensions.height,
            });
            setTimeout(() => setScrollWait(false), 200);
        }
    }

    function handleResize() {
        const {innerHeight, innerWidth} = window;

        if (!resizeWait) {
            setResizeWait(true);
            setWindowDimensions({width: innerWidth, height: innerHeight});
            setContext({
                ...context,
                height: innerHeight,
                handhelds: !!(innerWidth <= phoneMax),
                mediumScreens: !!(innerWidth > phoneMax && innerWidth <= tabletMax),
                wideScreens: !!(innerWidth > tabletMax),
            });
            setTimeout(() => setResizeWait(false), 200);
        }
    }

    return (
        <ScrollResizeContext.Provider value={context}>
            {children}
        </ScrollResizeContext.Provider>
    );
}

ScrollResizeProvider.propTypes = {
    children: PropTypes.node,
};
