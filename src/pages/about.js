import React from 'react';

import About from '../components/app/About';
import Layout from '../components/layout/Layout';
import SEO from '../components/app/seo';

export default function AboutPage() {
    return (
        <Layout className="about-page">
            <SEO title="about" />
            <About />
        </Layout>
    );
}
