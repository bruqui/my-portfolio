import React from 'react';
import Fade from 'react-reveal/Fade';
import {graphql, useStaticQuery} from 'gatsby';
import Image from 'gatsby-image';

import About from '../components/app/About';
import Heading from '../components/core/Heading';
import Layout from '../components/layout/Layout';
import Projects from '../components/app/Projects';

import SEO from '../components/app/seo';

import './index.scss';


export default function IndexPage() {
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

    function renderPreHeader() {
        return (
            <Image
                className="index-page__image"
                fluid={file.childImageSharp.fluid}
                alt="Event Image"
            />
        );
    }

    return (
        <Layout className="index-page" fullWidth preHeader={renderPreHeader()} headerFixed>
            <SEO title="Home" />
            <div className="index-page__container">
                <div className="index-page__content">
                    <Heading className="index-page__heading" level={2}>Hello! I&#39;m Bruce</Heading>
                    <p>My superpower is frontend development with React.</p>
                </div>
            </div>
            <Fade right>
                <About />
            </Fade>
            <Fade left>
                <Projects />
            </Fade>
        </Layout>
    );
}
