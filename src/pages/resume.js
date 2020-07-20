import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';

// layout
import Layout from 'components/layout/Layout';

// app
import SEO from 'components/app/seo';
import Resume from 'components/app/resume';

export default function ResumePage({data}) {
    return (
        <Layout className="resume-page">
            <SEO title="Resume" />
            <Resume
                resume={data.contentfulResume}
                experiences={data.allContentfulResumeExperience.edges}
            />
        </Layout>
    );
}

ResumePage.propTypes = {
    data: PropTypes.object,
};

export const query = graphql`
    {
        contentfulResume(id: {eq: "7cf0f08d-ec84-5602-9772-f91e4153c7bf"}) {
            id
            name
            summary {
                json
            }
        }
        allContentfulResumeExperience(
            sort: {fields: startDate, order: DESC}
            filter: {resumeLink: {id: {eq: "7cf0f08d-ec84-5602-9772-f91e4153c7bf"}}}
        ) {
            edges {
                node {
                    id
                    company
                    contract
                    startDate
                    endDate
                    locationCity
                    locationState
                    summary {
                        json
                    }
                }
            }
        }
    }
`;
