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
        <MDXProvider components={{...components, ...shortcodes}}>
            {title && <Heading level={2} size={5} className="mdx__headline">{title}</Heading>}
            {descriptionMdx && <MDXRenderer>{descriptionMdx}</MDXRenderer>}
            {propsMetadata && <PropsTable propsMetadata={propsMetadata} />}
            {
                (mdx && mdx.body) && <MDXRenderer>{mdx.body}</MDXRenderer>
            }
        </MDXProvider>
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
