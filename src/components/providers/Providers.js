import React from 'react';
import PropTypes from 'prop-types';

import RecaptchaProvider from './RecaptchaProvider';
/**
Parent component which imports and returns any React providers that
need to wrap the root element of the app
*/
/* eslint-disable import/no-unused-modules */
export default function Providers({children}) {
    return <RecaptchaProvider>{children}</RecaptchaProvider>;
}

Providers.propTypes = {
    children: PropTypes.node,
};
