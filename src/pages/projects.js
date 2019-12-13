import React from 'react';

import Projects from '../components/app/Projects';
import Layout from '../components/layout/Layout';
import SEO from '../components/app/seo';

export default function ProjectsPage() {
    return (
        <Layout className="projects-page">
            <SEO title="Projects" />
            <Projects />
        </Layout>
    );
}
