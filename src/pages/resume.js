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
                certifications={data.allContentfulCertifications.edges}
                education={data.allContentfulResumeEducation.edges}
                experiences={data.allContentfulResumeExperiences.edges}
                resume={data.contentfulResumes}
            />
        </Layout>
    );
}

ResumePage.propTypes = {
    data: PropTypes.object,
};

export const query = graphql`
    {
        contentfulResumes(id: {eq: "7cf0f08d-ec84-5602-9772-f91e4153c7bf"}) {
            id
            name
            summary {
                json
            }
        }
        allContentfulResumeExperiences(
            sort: {fields: startDate, order: DESC}
            filter: {resumeLink: {id: {eq: "7cf0f08d-ec84-5602-9772-f91e4153c7bf"}}}
        ) {
            edges {
                node {
                    id
                    company
                    contract
                    endDate
                    locationCity
                    locationState
                    startDate
                    summary {
                        json
                    }
                    title
                }
            }
        }
        allContentfulResumeEducation(
            filter: {resumeLink: {id: {eq: "7cf0f08d-ec84-5602-9772-f91e4153c7bf"}}}
            sort: {order: DESC, fields: yearEnd}
        ) {
            edges {
                node {
                    id
                    school
                    description
                    yearStart
                    yearEnd
                }
            }
        }
        allContentfulCertifications(
            filter: {resumeLink: {id: {eq: "7cf0f08d-ec84-5602-9772-f91e4153c7bf"}}}
        ) {
            edges {
                node {
                    id
                    name
                    issuer
                }
            }
        }
    }
`;
