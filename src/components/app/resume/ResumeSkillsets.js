import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash';

import getClassName from 'tools/getClassName';
import {graphql, useStaticQuery} from 'gatsby';

// Core
import Headline from 'components/core/Headline';

// App
import Skillsets from './Skillsets';

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

export default function ResumeSkillsets({className, headlineSize}) {
    const {
        allContentfulSkills: {edges: skills},
    } = useStaticQuery(SKILLSETS);
    const [rootClassName] = getClassName({className, rootClass: 'resume-skillsets'});

    return (
        <section className={rootClassName}>
            <Headline level={3} size={headlineSize}>
                Skillsets
            </Headline>
            <Skillsets skills={map(skills, 'node')} />
        </section>
    );
}

ResumeSkillsets.propTypes = {
    className: PropTypes.string,
    headlineSize: PropTypes.number,
};

Skillsets.defaultProps = {
    headlineSize: 2,
};
