import React from 'react';
import PropTypes from 'prop-types';
import {graphql, useStaticQuery} from 'gatsby';

import getClassName from 'tools/getClassName';

// Core
import Link from 'components/core/Link';
import Headline from 'components/core/Headline';

// App
import ContentfulElementParser from 'components/app/ContentfulElementParser';
import Skillsets from './Skillsets';

const CODE_EXAMPLES = graphql`
    query CODE_EXAMPLES {
        allContentfulCodeExamples(sort: {order: ASC, fields: name}) {
            edges {
                node {
                    name
                    url
                    description {
                        json
                    }
                    skillsLink {
                        name
                    }
                }
            }
        }
    }
`;

export default function CodeExamples({className}) {
    const {
        allContentfulCodeExamples: {edges: codeExamples},
    } = useStaticQuery(CODE_EXAMPLES);
    const [rootClassName] = getClassName({className, rootClass: 'code-examples'});

    return (
        <section className={rootClassName}>
            <Headline level={3} size={2}>
                Code Examples
            </Headline>
            {codeExamples.map(({node: {name, description, url, skillsLink}}) => (
                <section key={name}>
                    <Headline level={4} size={3}>
                        <Link href={url} target="_blank">
                            {name}
                        </Link>
                    </Headline>
                    <ContentfulElementParser content={description.json} />
                    <section>
                        <Headline level={5}>Skills Used</Headline>
                        <Skillsets skills={skillsLink} />
                    </section>
                </section>
            ))}
        </section>
    );
}

CodeExamples.propTypes = {
    className: PropTypes.string,
};
