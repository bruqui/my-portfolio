import React from 'react';

import About from '../components/app/about';
import Layout from '../components/layout/Layout';
import SEO from '../components/app/seo';

export default function AboutPage() {
    return (
        <Layout className="projects-page">
            <SEO title="Projects" />
            <About />
        </Layout>
    );
}
