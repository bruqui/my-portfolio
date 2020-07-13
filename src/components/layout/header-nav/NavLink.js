import React from 'react';
import PropTypes from 'prop-types';

import getClassName from 'tools/getClassName';

import Link from 'components/core/Link';

import './NavLink.scss';

export default function NavLink({children, className, onSelect, href, to}) {
    const [rootClassName] = getClassName({className, rootClass: 'nav-link'});

    const linkProps = {
        className: rootClassName,
    };

    function handleGetLinkProps({isCurrent}) {
        if (isCurrent) {
            onSelect(to || href);
        }
    }

    return to ? (
        <Link {...linkProps} getProps={handleGetLinkProps} to={to}>
            {children}
        </Link>
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
