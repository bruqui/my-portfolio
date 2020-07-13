import React from 'react';
import PropTypes from 'prop-types';
import {find} from 'lodash';
import {graphql, useStaticQuery} from 'gatsby';
import Image from 'gatsby-image';

import getClassName from 'tools/getClassName';

import CenteredContent from '../layout/CenteredContent';
import Headline from '../core/Headline';
import SEO from './seo';

import './Projects.scss';

export default function Projects({componentRef}) {
    const [rootClassName, getChildClass] = getClassName({
        rootClass: 'projects',
    });

    const {allFile} = useStaticQuery(graphql`
        query ProjectImages {
            allFile(
                filter: {
                    extension: {eq: "png"}
                    name: {in: ["Southwest", "PipelineRx", "Rally"]}
                }
            ) {
                edges {
                    node {
                        name
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid_tracedSVG
                            }
                        }
                    }
                }
            }
        }
    `);

    function getDetail(projectKey) {
        const details = {
            rally: {
                heading: `Rally`,
                dates: 'Dec 2019 – Aug 2020',
                description: `
                    6 month contract (extended to 7) rebuilding a reporting system from older technologies into an updated ReactJS SPA using HighchartsJS that clients
                    of Rally, a division of Broadcom, use to chart thier work. The Rally software tracks and builds analytics such as
                    burnups, burndowns, etc. to visualize progress on their Agile projects.
                `,
            },
            southwest: {
                heading: 'Southwest Airlines',
                dates: 'Dec 2014 - June 2016',
                description: `
                    Southwest was my first experience with React. I was fortunate
                    to be able to work with some brilliant developers which upped my
                    skillsets to a much higher level as a UI developer. I was
                    on a lead team where most of the projects started such as the main
                    components and the Flight Status portion of the site, but the primary
                    part of my time there was spent on the Booking section of the site.
                `,
            },
            pipelineRx: {
                heading: `PipelinRx`,
                dates: 'Jan 2018 - May 2019',
                description: `
                    I came on at PipelineRx to help them re-architect their web application
                    into a SPA (single page app) using React, HAL JSON and Redux. My key role
                    was to lead and collaborate with a couple of teams developers and a UX designer
                    to come up with the best solutions to build an efficient, fast, reliable and
                    HIPAA compliant front end web application.
                `,
            },
        };

        return details[projectKey];
    }

    function renderProject(projectKey, imageName) {
        const image = find(allFile.edges, ({node: {name}}) => name === imageName);
        const {dates, description, heading} = getDetail(projectKey);

        return (
            <React.Fragment>
                <div className={getChildClass('image')} id={`${projectKey}Image`}>
                    <Image fluid={image.node.childImageSharp.fluid} alt={heading} />
                </div>
                <div className={getChildClass('detail')} id={`${projectKey}Description`}>
                    <Headline level={3}>{heading}</Headline>
                    <p>{dates}</p>
                    <p className={getChildClass('description')}>{description}</p>
                </div>
            </React.Fragment>
        );
    }

    return (
        <CenteredContent className={rootClassName}>
            <SEO title="Projects" />
            <Headline className={getChildClass('headline')} level={2}>
                Project Highlights
            </Headline>
            <div className={getChildClass('project-container')}>
                {renderProject('rally', 'Rally')}
                {renderProject('pipelineRx', 'PipelineRx')}
                {renderProject('southwest', 'Southwest')}
            </div>
        </CenteredContent>
    );
}

Projects.propTypes = {
    componentRef: PropTypes.object,
};
