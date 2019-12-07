import React from 'react';

import Layout from '../components/layout/Layout';
import SEO from '../components/app/seo';

export default function NotFoundPage() {
    return (
        <Layout>
            <SEO title="404: Not found" />
            <h1>NOT FOUND</h1>
            <p>Just where do you think you&lsquo;re going. This page doesn&lsquo;t exist.</p>
        </Layout>
    );
}
