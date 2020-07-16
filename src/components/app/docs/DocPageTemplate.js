import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import {get} from 'lodash';

import Docs from './Docs';
import Mdx from './Mdx';
import SEO from '../seo';

// eslint-disable-next-line
export const pageQuery = graphql`
    query DocQuery($id: String) {
        file(id: {eq: $id}, extension: {eq: "mdx"}) {
            id
            name
            dir
            childMdx {
                body
            }
        }
    }
`;

// eslint-disable-next-line
export default function DocPageTemplate({data: {file}}) {
    const mdx = get(file, 'childMdx', {});

    return (
        <Docs className="doc-page">
            <SEO title={file.name} />
            <Mdx title={file.name} mdx={mdx} />
        </Docs>
    );
}

DocPageTemplate.propTypes = {
    data: PropTypes.shape({
        file: PropTypes.string,
    }),
};
