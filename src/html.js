import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable import/no-unused-modules */
/* eslint-disable react/no-danger */
export default function HTML({
    body,
    bodyAttributes,
    headComponents,
    htmlAttributes,
    postBodyComponents,
    preBodyComponents,
}) {
    return (
        <html {...htmlAttributes} lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=yes"
                />
                {headComponents}
            </head>
            <body {...bodyAttributes}>
                {preBodyComponents}
                <div
                    key="body"
                    id="___gatsby"
                    dangerouslySetInnerHTML={{__html: body}}
                />
                {postBodyComponents}
            </body>
        </html>
    );
}

HTML.propTypes = {
    body: PropTypes.string,
    bodyAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    htmlAttributes: PropTypes.object,
    postBodyComponents: PropTypes.array,
    preBodyComponents: PropTypes.array,
};
