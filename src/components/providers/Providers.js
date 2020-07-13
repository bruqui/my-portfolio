import React from 'react';
import PropTypes from 'prop-types';

import ScrollPositionProvider from './ScrollPositionProvider';

/**
Parent component which imports and returns any React providers that
need to wrap the root element of the app
*/
/* eslint-disable import/no-unused-modules */
export default function Providers({children}) {
    return <ScrollPositionProvider>{children}</ScrollPositionProvider>;
}

Providers.propTypes = {
    children: PropTypes.node,
};
