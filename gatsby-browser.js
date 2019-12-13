/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';

import Providers from './src/components/providers/Providers';

export function wrapRootElement({element}) {
    return <Providers>{element}</Providers>;
}

wrapRootElement.propTypes = {
    element: PropTypes.node,
};
