import React, {createContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {debounce, isEmpty} from 'lodash';

import {phoneMax, tabletMax} from '../../styles/_device-sizes.scss';

const DEFAULT_CONTEXT = {};

export const SizingContext = createContext(DEFAULT_CONTEXT);

/**
 * Provider for passing down the width/height and different booleans
 * based on the device.
*/
export default function SizingProvider({children}) {
    const [context, setContext] = useState(DEFAULT_CONTEXT);

    useEffect(() => {
        window.addEventListener('resize', debounce(handleResize, 200));
        if (isEmpty(context)) {
            handleResize();
        }

        return () => window.removeEventListener('resize', debounce(handleResize, 200));
    }, [context]);

    function handleResize() {
        const {innerHeight: height, innerWidth: width} = window;

        setContext({
            height,
            handhelds: !!(width <= phoneMax),
            mediumScreens: !!(width > phoneMax && width <= tabletMax),
            wideScreens: !!(width > tabletMax),
            width,
        });
    }

    return (
        <SizingContext.Provider value={context}>
            {children}
        </SizingContext.Provider>
    );
}

SizingProvider.propTypes = {
    children: PropTypes.node,
};
