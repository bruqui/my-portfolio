import React, {useLayoutEffect, useState} from 'react';
import PropTypes from 'prop-types';

import getClassName from 'tools/getClassName';

import Link from 'components/core/Link';
import {MenuLink} from 'components/core/menu';

import './NavLink.scss';

export default function NavLink({children, className, onSelect, href, to, menu}) {
    const [renderFinished, setRenderFinished] = useState(false);

    // Fix for Gatsby link trying to update state while rendering
    useLayoutEffect(() => {
        setRenderFinished(true);
    }, []);

    const [rootClassName] = getClassName({className, rootClass: 'nav-link'});

    const linkProps = {
        className: rootClassName,
    };

    function handleGetLinkProps({isCurrent}) {
        if (renderFinished && isCurrent) {
            onSelect(to || href);
        }
    }

    // If this is a link in the menu, make it a MenuLink
    const LinkCmp = menu ? MenuLink : Link;

    return to ? (
        <LinkCmp {...linkProps} getProps={handleGetLinkProps} to={to}>
            {children}
        </LinkCmp>
    ) : (
        <a {...linkProps} href={href}>
            {children}
        </a>
    );
}

NavLink.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    /** When the href prop is used, it renders a standard anchor tag instead of Gatsby Link */
    href: PropTypes.string,
    /** Switches between a menu type of link and a normal link */
    menu: PropTypes.bool,
    /** Callback funciton that is run when the component is selected */
    onSelect: PropTypes.func,
    /**
        When the to prop is used, it renders the Gatsby Link component which
        uses reach/router library
    */
    to: PropTypes.string,
};

NavLink.defaultProps = {
    onSelect: () => null,
};
