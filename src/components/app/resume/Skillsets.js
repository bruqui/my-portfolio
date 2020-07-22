import React from 'react';
import PropTypes from 'prop-types';
import {graphql, useStaticQuery} from 'gatsby';

// tools
import getClassName from 'tools/getClassName';

// core
import Badge from 'components/core/Badge';
import Headline from 'components/core/Headline';

// scss
import './Skillsets.scss';

const SKILLSETS = graphql`
    query SKILLSETS {
        allContentfulSkills(sort: {order: ASC, fields: name}) {
            edges {
                node {
                    name
                }
            }
        }
    }
`;

export default function Skillsets({className, headlineSize}) {
    const [rootClassName, getChildClass] = getClassName({
        className,
        rootClass: 'skillsets',
    });
    const {
        allContentfulSkills: {edges: skills},
    } = useStaticQuery(SKILLSETS);

    return (
        <section className={rootClassName}>
            <Headline level={3} size={headlineSize}>
                Skillsets
            </Headline>
            {skills.map(({node: {name}}) => (
                <Badge className={getChildClass('skill')} key={name}>
                    {name}
                </Badge>
            ))}
        </section>
    );
}

Skillsets.propTypes = {
    className: PropTypes.string,
    headlineSize: PropTypes.number,
};

Skillsets.defaultProps = {
    headlineSize: 2,
};
