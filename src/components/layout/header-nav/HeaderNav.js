import React from 'react';
import PropTypes from 'prop-types';

import getClassName from 'tools/getClassName';
import getLinks from './getLinks';

import NavLink from './NavLink';

import './HeaderNav.scss';

/**
    Main navigation for the site in the header.
*/

export default function HeaderNav({className}) {
    const [rootClassName] = getClassName({
        className,
        rootClass: 'header-nav',
    });

    return (
        <nav className={rootClassName}>
            {getLinks().map((link) => (
                <NavLink key={`link_${link.children}`} {...link} />
            ))}
        </nav>
    );
}

HeaderNav.propTypes = {
    className: PropTypes.string,
};
