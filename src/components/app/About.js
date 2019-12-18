import React from 'react';
import moment from 'moment';
import {Link} from 'gatsby';

import CenteredContent from '../core/CenteredContent';
import Heading from '../core/Heading';
import Icon from '../core/Icon';
import SEO from './seo';

import './About.scss';

export default function About() {
    return (
        <CenteredContent className="about" id="about" elementType="section">
            <SEO title="About" />
            <Heading level={2}>About</Heading>
            <dl className="about__dl">
                <dt className="about__dt"><Icon icon="code" /></dt>
                <dd className="about__dd">
                    Started development with React over
                    {' '}{moment("20141201", "YYYYMMDD").fromNow()} and have been in some sort of web
                    development for {moment("19960101", "YYYYMMDD").fromNow().split(' ago').join('')}.
                    Primarily a frontend dev; however, some fullstack development in the NodeJs tech stack.
                    Some of the technologies used are React, React Hooks, Gatsby, Create React App, GraphQL,
                    Redux, AWS, Serverless, Apollo, Prisma, GraphQL Yoga, Jest, React Testing Library and Cypress.
                </dd>
                <dt className="about__dt"><Icon icon="build" /></dt>
                <dd className="about__dd">
                    Familiarized with server/client side rendering using different
                    types of build frameworks.
                </dd>
                <dt className="about__dt"><Icon icon="class" /></dt>
                <dd className="about__dd">
                    Primarily uses a {' '}
                    <a
                        href="http://getbem.com/introduction/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        &quot;Block Element Modifier&quot;
                    </a> code standard with {' '}
                    <a
                        href="https://sass-lang.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        SASS (Syntactically Awesome Style Sheets)
                    </a> to complile to CSS which simplifies
                    much of the styling for the site and reduces style conflicts.
                </dd>
                <dt className="about__dt"><Icon icon="explore" /></dt>
                <dd className="about__dd">
                    Stays up to date with the current web development technologies and techniques.
                </dd>
                <dt className="about__dt"><Icon icon="accessibility" /></dt>
                <dd className="about__dd">
                    Experienced in building {' '}
                    <a
                        href="https://en.wikipedia.org/wiki/Computer_accessibility"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        a11y (accessibility)
                    </a> compliant sites.
                </dd>
                <dt className="about__dt"><Icon icon="language" /></dt>
                <dd className="about__dd">
                    Experienced in building {' '}
                    <a
                        href="https://en.wikipedia.org/wiki/Internationalization_and_localization"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        i18n (internationalize aka localized)
                    </a> compliant sites.
                </dd>
                <dt className="about__dt"><Icon icon="bug_report" /></dt>
                <dd className="about__dd">
                    Development with functional and end to end testing to reduce bugs in the projects.
                </dd>
                <dt className="about__dt"><Icon icon="change_history" /></dt>
                <dd className="about__dd">
                    Code is typically saved using some sort of version control software such
                    as Git or Mercurial.
                </dd>
                <dt className="about__dt"><Icon icon="description" /></dt>
                <dd className="about__dd">
                    Projects are usually well documented using {' '}
                    <a
                        href="https://github.com/reactjs/react-docgen"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        react-docgen
                    </a>
                    {' '} either homegrown or using {' '}
                    <a
                        href="https://react-styleguidist.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React Styleguidist
                    </a> to make it easy on other developers stepping in on the projects.
                    Check out some of the <Link to="/docs">documentation for this site</Link>.
                </dd>
            </dl>
        </CenteredContent>
    );
}
