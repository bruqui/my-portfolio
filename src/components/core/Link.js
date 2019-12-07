import React from 'react';
import PropTypes from 'prop-types';
import {Link as GatsbyLink} from 'gatsby';
import classnames from 'classnames';

import './Link.scss';

export default function Link({
    children,
    className,
    href,
    noUnderline,
    onPrimary,
    onSecondary,
    ...props
}) {
    const Component = (href) ? 'a' : GatsbyLink;

    function getClass() {
        return classnames({
            link: true,
            'link--on-primary': onPrimary,
            'link--on-secondary': onSecondary,
        }, className);
    }

    return <Component {...props} className={getClass()}>{children}</Component>;
}

Link.propTypes = {
    /** Adds a modifier class to the link when the page is active */
    activeClassName: PropTypes.string,
    /** Adds aditional styles when the page is active */
    activeStyleName: PropTypes.object,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    /** Sets a url and uses the <a /> tag instead of a Gatsby Link comoponent */
    href: PropTypes.string,
    /** Removes underline from hover. */
    noUnderline: PropTypes.bool,
    /** Sets text color to work on primary color. */
    onPrimary: PropTypes.bool,
    /** Sets text color to work on secondary color. */
    onSecondary: PropTypes.bool,
    /** Internal site url which makes use of Gatsby's Link component */
    to: PropTypes.string,
};
