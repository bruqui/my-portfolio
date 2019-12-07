import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import {get} from 'lodash';

import Mdx from './Mdx';
import SEO from '../app/seo';

// eslint-disable-next-line
export const pageQuery = graphql`
    query ComponentDocQuery($id: String, $name: String) {
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

// eslint-disable-next-line
export default function ComponentDocLayout({data: {file, componentMetadata}, pageContext}) {
    const mdx = get(file, 'childMdx', {});
    const {description, displayName, props} = componentMetadata;

    return (
        <React.Fragment>
            <SEO title={`Site Docs: ${displayName}`} />
            <Mdx
                descriptionMdx={description.childMdx.body}
                mdx={mdx}
                propsMetadata={props}
                title={displayName}
            />
        </React.Fragment>
    );
}

ComponentDocLayout.propTypes = {
    data: PropTypes.shape({
        file: PropTypes.string,
        componentMetadata: PropTypes.shape({
            description: PropTypes.string,
            displayName: PropTypes.string,
            props: PropTypes.object,
        }),
    }),
    pageContext: PropTypes.object,
};
