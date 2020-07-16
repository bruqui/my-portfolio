import React from 'react';

import Layout from 'components/layout/Layout';
import About from 'components/app/about';
import SEO from 'components/app/seo';

export default function AboutPage() {
    return (
        <Layout className="projects-page">
            <SEO title="Projects" />
            <About />
        </Layout>
    );
}
