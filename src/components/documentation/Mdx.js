import React from 'react';
import PropTypes from 'prop-types';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {MDXProvider} from '@mdx-js/react';
import {preToCodeBlock} from 'mdx-utils';
import {
    MenuItem,
    MenuSurface,
    MenuSurfaceAnchor,
    SimpleMenu,
    SimpleMenuSurface,
} from '@rmwc/menu';

import Button from '../core/Button';
import DocsLayout from './DocsLayout';
import CodeBlock from './CodeBlock';
import Heading from '../core/Heading';
import Icon from '../core/Icon';
import IconButton from '../core/IconButton';
import PropsTable from './PropsTable';
import TextField from '../core/TextField';

import './Mdx.scss';

export default function Mdx({
    descriptionMdx,
    propsMetadata,
    mdx,
    title,
}) {
    const shortcodes = {
        Button,
        Heading,
        Icon,
        IconButton,
        MenuItem,
        MenuSurface,
        MenuSurfaceAnchor,
        SimpleMenu,
        SimpleMenuSurface,
        TextField,
    };
    /* eslint-disable react/display-name */
    const components = {
        pre: (preProps) => {
            const props = preToCodeBlock(preProps);
            return <CodeBlock {...props} />;
        },
        code: (preProps) => {
            const props = preToCodeBlock(preProps);
            return <CodeBlock {...props} />;
        },
        render: (props) => <CodeBlock {...props} />,
    };
    /* eslint-enable */

    return (
        <DocsLayout className="mdx">
            <MDXProvider components={{...components, ...shortcodes}}>
                <h2 className="headline-5 mdx__headline">{title}</h2>
                {descriptionMdx && <MDXRenderer>{descriptionMdx}</MDXRenderer>}
                {propsMetadata && <PropsTable propsMetadata={propsMetadata} />}
                {
                    (mdx && mdx.body) && <MDXRenderer>{mdx.body}</MDXRenderer>
                }
            </MDXProvider>
        </DocsLayout>
    );
}

Mdx.propTypes = {
    descriptionMdx: PropTypes.string,
    propsMetadata: PropTypes.array,
    mdx: PropTypes.shape({
        body: PropTypes.string,
    }),
    title: PropTypes.string,
};
