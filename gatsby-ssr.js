/* eslint-disable import/prefer-default-export, react/display-name, react/prop-types */
/* eslint-disable import/prefer-default-export, react/display-name, react/prop-types */
import React from 'react';

import Providers from './src/components/providers/Providers';

export function wrapRootElement({element}) {
    return <Providers>{element}</Providers>;
}

// const React = require('react');
// const Providers = require('./src/components/providers/Providers');

// exports.wrapRootElement = ({element}) => <Providers>{element}</Providers>;
// const PreBody = () => <div>pre body</div>;

// exports.replaceRenderer = ({
//     pathname,
//     setBodyAttributes,
//     setHtmlAttributes,
//     setPreBodyComponents,
// }) => {
//     setHtmlAttributes({data: pathname});
//     setBodyAttributes({data: pathname});
//     setPreBodyComponents([PreBody]);
// };
