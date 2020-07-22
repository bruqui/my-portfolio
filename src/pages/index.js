import React, {useRef} from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Image from 'gatsby-image';

// core
import Button from 'components/core/Button';
import Headline from 'components/core/Headline';
import LoadingSpinner from 'components/core/LoadingSpinner';

// layout
import Layout from 'components/layout/Layout';

// app
import About from 'components/app/about/';
import Projects from 'components/app/Projects';
import SEO from 'components/app/seo';

import './index.scss';

export default function IndexPage() {
    const aboutEl = useRef();
    const projectsEl = useRef();
    const {file} = useStaticQuery(graphql`
        query TopBackground {
            file(relativePath: {eq: "HomeMain.png"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
    `);

    function handleLearnClick() {
        aboutEl.current.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <Layout className="index-page">
            <SEO title="Home" />
            <div className="index-page__container">
                <Image
                    className="index-page__image"
                    fluid={file.childImageSharp.fluid}
                    alt="Event Image"
                />
                <div className="index-page__content">
                    <Headline className="index-page__heading" level={2}>
                        Welcome to BEhive Tech
                    </Headline>
                    <p>
                        Expert in the design, development and global introduction of
                        advanced technologies to meet business, financial, competitive,
                        and customer demands. Experience combining strong development with
                        outstanding performance for leading complex technology
                        organizations. Diverse understanding of web-based applications
                        from concept, business case, and feasibility analysis through
                        development, usability testing, deployment and maintenance. As a
                        primarily front-end React developer, my focus and expertise
                        revolves around building efficient, reusable components and
                        performant, scalable apps to align with the fast paced world of
                        development. Much of my recent experience and passion is
                        architecting new apps or rebuilding apps from an older technology.
                    </p>
                    <p>
                        <Button raised onClick={handleLearnClick}>
                            Learn More
                        </Button>
                    </p>
                </div>
            </div>
            <About componentRef={aboutEl} />
            <Projects componentRef={projectsEl} />
        </Layout>
    );
}
