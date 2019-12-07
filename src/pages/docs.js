import React from 'react';
import PropTypes from 'prop-types';
import {get} from 'lodash';
import {graphql} from 'gatsby';

import Mdx from '../components/documentation/Mdx';
import SEO from '../components/app/seo';

export const pageQuery = graphql`
    query PageDocQuery {
        file(name: {eq: "docs"}, extension: {eq: "mdx"}) {
            id
            name
            dir
            childMdx {
                body
            }
        }
    }
`;

export default function Docs({data: {file}}) {
    const mdx = get(file, 'childMdx', {});

    return (
        <div className="docs">
            <SEO title="Docs" />
            <Mdx title={file.name} mdx={mdx} />
        </div>
    );
}

Docs.propTypes = {
    data: PropTypes.shape({
        file: PropTypes.object,
    }),
};
