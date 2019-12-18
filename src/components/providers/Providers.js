import React from 'react';
import PropTypes from 'prop-types';

import SizingProvider from './SizingProvider';
import ScrollProvider from './ScrollProvider';

/**
Parent component which imports and returns any React providers that
need to wrap the root element of the app
*/
/* eslint-disable import/no-unused-modules */
export default function Providers({children}) {
    return children;
}

Providers.propTypes = {
    children: PropTypes.node,
};
