import React from 'react';

import Layout from '../components/layout/Layout';
import SEO from '../components/app/seo';

export default function IndexPage() {
    return (
        <Layout>
            <SEO title="Home" />
            <h1>Hello! I&#39;m Bruce</h1>
            <p>My superpower is frontend development with React.</p>
        </Layout>
    );
}
