import React from 'react';

// layout
import Layout from '../components/layout/Layout';

// app
import Projects from '../components/app/Projects';
import SEO from '../components/app/seo';

export default function ProjectsPage() {
    return (
        <Layout className="projects-page">
            <SEO title="Projects" />
            <Projects />
        </Layout>
    );
}
