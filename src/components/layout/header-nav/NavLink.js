import React, {useLayoutEffect, useState} from 'react';
import PropTypes from 'prop-types';

import getClassName from 'tools/getClassName';

import {MenuLink} from 'components/core/menu';

import './NavLink.scss';

export default function NavLink({children, className, onSelect, href, to}) {
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

    return to ? (
        <MenuLink {...linkProps} getProps={handleGetLinkProps} to={to}>
            {children}
        </MenuLink>
    ) : (
        <a {...linkProps} href={href}>
            {children}
        </a>
    );
}

NavLink.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    href: PropTypes.string,
    onSelect: PropTypes.func,
    to: PropTypes.string,
};

NavLink.defaultProps = {
    onSelect: () => null,
};
