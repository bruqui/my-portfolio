import React from 'react';
import {find} from 'lodash';
import {graphql, useStaticQuery} from 'gatsby';
import Image from 'gatsby-image';
// import Zoom from 'react-reveal/Zoom';

import CenteredContent from '../core/CenteredContent';
import Heading from '../core/Heading';
import SEO from './seo';

import './Projects.scss';

export default function Projects() {
    // const [show, setShow] = useState(null);
    const {allFile} = useStaticQuery(graphql`
        query ProjectImages {
          allFile(filter: {
            extension: {eq: "png"},
            name: {in: ["Southwest", "PipelineRx"]}
          }) {
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
        const image = find(allFile.edges, ({node: {name}}) => (name === imageName));
        const {dates, description, heading} = getDetail(projectKey);

        return (
            <React.Fragment>
                <div className="projects__image" id={`${projectKey}Image`}>
                    <Image
                        fluid={image.node.childImageSharp.fluid}
                        alt={heading}
                    />
                </div>
                <div className="projects__detail" id={`${projectKey}Description`}>
                    <Heading level={3}>{heading}</Heading>
                    <p>{dates}</p>
                    <p>{description}</p>
                </div>
            </React.Fragment>
        );
    }

    // function handleMouseOver(showKey) {
    //     return () => setShow(showKey);
    // }

    // function handleMouseOut(event) {
    //     setShow(null);
    // }

    return (
        <CenteredContent className="projects" elementType="section">
            <SEO title="Projects" />
            <Heading level={2}>Projects</Heading>
            <div className="projects__project-container">
                {renderProject('southwest', 'Southwest')}
                {renderProject('pipelineRx', 'PipelineRx')}
            </div>
        </CenteredContent>
    );
}
