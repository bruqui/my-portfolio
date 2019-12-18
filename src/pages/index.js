import React, {useContext} from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Image from 'gatsby-image';

import About from '../components/app/About';
import Button from '../components/core/Button';
import Heading from '../components/core/Heading';
import Layout from '../components/layout/Layout';
import Projects from '../components/app/Projects';
import SEO from '../components/app/seo';

// import {SizingContext} from '../components/providers/SizingProvider';

import './index.scss';


export default function IndexPage() {
    const {height} = 720;
    // const {height} = useContext(SizingContext);
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

    function handleLearnClick() {
        window.scrollTo({
            behavior: 'smooth',
            left: 0,
            top: height - 20,
        });
    }

    return (
        <Layout className="index-page" fullWidth preHeader={renderPreHeader()} headerFixed>
            <SEO title="Home" />
            <div className="index-page__container">
                <div className="index-page__content">
                    <Heading className="index-page__heading" level={2}>Hello! I&#39;m Bruce</Heading>
                    <p>My superpower is frontend development with React.</p>
                    <p><Button raised onClick={handleLearnClick}>Learn More</Button></p>
                </div>
            </div>
            <About />
            <Projects />
        </Layout>
    );
}
