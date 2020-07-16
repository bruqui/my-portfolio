import React from 'react';
import PropTypes from 'prop-types';

// tools
import getClassName from 'tools/getClassName';

// core
import Link from 'components/core/Link';

// layout
import HeaderNav from './header-nav/HeaderNav';
import HeaderNavMenu from './header-nav/HeaderNavMenu';

// assets
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

    // Have to set an inline style on the logo. SVGs don't really work with classNames
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
