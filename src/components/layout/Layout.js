import React from 'react';
import PropTypes from 'prop-types';
import {graphql, useStaticQuery} from 'gatsby';

// tools
import getClassName from 'tools/getClassName';

// layout
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

// Import order is important here to insure styles are overridden by the following scss file.
import 'styles/material-icons.scss';
import 'styles/material-styles.scss';
import 'styles/index.scss';
import './Layout.scss';

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

    const [rootClassName, getChildClass] = getClassName({
        className,
        rootClass: 'layout',
    });

    return (
        <section className={rootClassName}>
            <Header
                className={getChildClass('header')}
                siteTitle={data.site.siteMetadata.title}
            />
            <Main className={getChildClass('main')} {...mainProps}>
                {children}
            </Main>
            <Footer className={getChildClass('footer')} />
        </section>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    /** Props for the Main component which is the div that wraps the main content. */
    mainProps: PropTypes.object,
};
