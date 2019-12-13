import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql} from 'gatsby';
import classnames from 'classnames';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';

import './Layout.scss';
import '../../styles/index.scss';
import '../../styles/material-icons.scss';

export default function Layout({
    children,
    className,
    fullWidth,
    headerFixed,
    preHeader,
}) {
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
            {preHeader}
            <Header className="layout__header" siteTitle={data.site.siteMetadata.title} fixed={headerFixed} />
            <Main className="layout__main" fullWidth={fullWidth}>{children}</Main>
            <Footer className="layout__footer" />
        </section>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    /** Passes prop to Main which sets the main container to 100% wide. */
    fullWidth: PropTypes.bool,
    headerFixed: PropTypes.bool,
    preHeader: PropTypes.node,
};

Layout.defaultProps = {
    preHeader: null,
};
