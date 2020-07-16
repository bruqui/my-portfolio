import React from 'react';
import PropTypes from 'prop-types';
import {get} from 'lodash';
import {graphql} from 'gatsby';

import Docs from './Docs';
import Mdx from './Mdx';
import SEO from '../seo';

// eslint-disable-next-line
export const pageQuery = graphql`
    query ComponentPageQuery($id: String, $name: String) {
        file(name: {eq: $name}, extension: {eq: "mdx"}) {
            id
            name
            dir
            childMdx {
                body
            }
        }
        componentMetadata(id: {eq: $id}) {
            displayName
            id
            description {
                childMdx {
                    body
                }
            }
            props {
                name
                docblock
                type {
                    name
                    value
                }
                required
                defaultValue {
                    value
                }
            }
        }
    }
`;

/* eslint-disable max-len */
// eslint-disable-next-line
export default function ComponentPageTemplate({
    data: {file, componentMetadata},
    pageContext: {dir},
}) {
    const mdx = get(file, 'childMdx', {});
    const {description, displayName, props} = componentMetadata;

    return (
        <Docs className="compoennt-page-template">
            <SEO title={`Site Docs: ${displayName}`} />
            <Mdx
                descriptionMdx={description.childMdx.body}
                mdx={mdx}
                propsMetadata={props}
                title={displayName}
            />
        </Docs>
    );
}

ComponentPageTemplate.propTypes = {
    data: PropTypes.shape({
        file: PropTypes.object,
        componentMetadata: PropTypes.shape({
            description: PropTypes.object,
            displayName: PropTypes.string,
            props: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
        }),
    }),
    pageContext: PropTypes.shape({
        dir: PropTypes.string,
    }),
};
