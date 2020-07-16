import React from 'react';
import PropTypes from 'prop-types';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {MDXProvider} from '@mdx-js/react';
import {preToCodeBlock} from 'mdx-utils';
import {
    MenuItem,
    MenuLink,
    MenuSurface,
    MenuSurfaceAnchor,
    SimpleMenu,
    SimpleMenuSurface,
} from 'components/core/menu';
import Button from 'components/core/Button';
import Headline from 'components/core/Headline';
import Icon from 'components/core/Icon';
import IconButton from 'components/core/IconButton';
import TextField from 'components/core/TextField';
import PropsTable from './PropsTable';
import CodeBlock from './CodeBlock';

import './Mdx.scss';

export default function Mdx({descriptionMdx, propsMetadata, mdx, title}) {
    const shortcodes = {
        Button,
        Headline,
        Icon,
        IconButton,
        MenuItem,
        MenuLink,
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
            {title && (
                <Headline level={2} className="mdx__headline">
                    {title}
                </Headline>
            )}
            {descriptionMdx && <MDXRenderer>{descriptionMdx}</MDXRenderer>}
            {propsMetadata && <PropsTable propsMetadata={propsMetadata} />}
            {mdx && mdx.body && <MDXRenderer>{mdx.body}</MDXRenderer>}
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
