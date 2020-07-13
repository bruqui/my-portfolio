import React from 'react';
import PropTypes from 'prop-types';

import getClassName from 'tools/getClassName';
import Link from 'components/core/Link';
import HeaderNav from './header-nav/HeaderNav';
import HeaderNavMenu from './header-nav/HeaderNavMenu';
import Logo from '../../../static/assets/behivetech-logo.svg';

import './Header.scss';

/**
    This component renders the main header and the nav within it.
*/

export default function Header({className, fixed}) {
    const [rootClassName, getChildClass] = getClassName({
        className,
        rootClass: 'header',
        modifiers: {fixed},
    });

    return (
        <header className={rootClassName}>
            <Link to="/" className={getChildClass('logo-link')}>
                <Logo style={{width: '232px'}} />
            </Link>
            <HeaderNav className={getChildClass('nav')} />
            <div className={getChildClass('right')}>
                <HeaderNavMenu className={getChildClass('nav-menu')} />
            </div>
        </header>
    );
}

Header.propTypes = {
    className: PropTypes.string,
    /** Indicates whether the header should be fixed or not */
    fixed: PropTypes.bool,
};
