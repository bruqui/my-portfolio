import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql} from 'gatsby';
import classnames from 'classnames';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';

import './Layout.scss';
import 'styles/index.scss';
import 'styles/material-icons.scss';
import 'styles/material-styles.scss';

/**
    Main layout component for the site. Passes on if the header should be fixed
    and if the main container for the site should be full width or a smaller fixed
    width.
*/

export default function Layout({children, className, mainProps}) {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <section className={classnames('layout', className)}>
            <Header className="layout__header" siteTitle={data.site.siteMetadata.title} />
            <Main className="layout__main" {...mainProps}>
                {children}
            </Main>
            <Footer className="layout__footer" />
        </section>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    /** Props for the Main component which is the div that wraps the main content. */
    mainProps: PropTypes.object,
};
