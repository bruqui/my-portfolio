import React, {createContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {debounce, get} from 'lodash';

const DEFAULT_CONTEXT = {
    scrollX: 0,
    scrollY: 0,
};

export const ScrollContext = createContext(DEFAULT_CONTEXT);

/**
 * Provider for passing down the width/height and different booleans
 * based on the device.
*/
export default function ScrollProvider({children}) {
    const [context, setContext] = useState(DEFAULT_CONTEXT);

    useEffect(() => {
        window.addEventListener('scroll', debounce(handleScroll, 10));

        return () => window.removeEventListener('scroll', debounce(handleScroll, 10));
    }, [context]);

    function handleScroll() {
        const supportPageOffset = (get(window, 'pageXOffset') !== undefined);
        let scrollX = 0;
        let scrollY = 0;

        if (supportPageOffset) {
            scrollX = get(window, 'pageXOffset');
            scrollY = get(window, 'pageYOffset');
        } else {
            const isCSS1Compat = (get(document, 'compatMode', "") === "CSS1Compat");

            scrollX = (isCSS1Compat)
                ? get(document, 'documentElement.scrollLeft')
                : get(document, 'body.scrollLeft');
            scrollY = (isCSS1Compat)
                ? get(document, 'documentElement.scrollTop')
                : get(document, 'body.scrollTop');
        }

        setContext({
            scrollX,
            scrollY,
        });
    }

    return (
        <ScrollContext.Provider value={context}>
            {children}
        </ScrollContext.Provider>
    );
}

ScrollProvider.propTypes = {
    children: PropTypes.node,
};
