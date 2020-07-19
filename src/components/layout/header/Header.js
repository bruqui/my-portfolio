import React from 'react';
import PropTypes from 'prop-types';

// tools
import getClassName from 'tools/getClassName';

// core
import Link from 'components/core/Link';
import IconButton from 'components/core/IconButton';

// layout
import HeaderNav from './HeaderNav';
import HeaderNavMenu from './HeaderNavMenu';
import GithubIcon from './GithubIcon';
import LinkedInIcon from './LinkedInIcon';
import Logo from './Logo';

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
            <Link to="/" className={getChildClass('logo')}>
                <Logo style={{width: '232px'}} />
            </Link>
            <HeaderNav className={getChildClass('nav')} />
            <div className={getChildClass('right')}>
                <IconButton
                    aria-label="linkedin"
                    className={getChildClass('svg-link')}
                    href="https://www.linkedin.com/in/bruce-smith-67bb05b/"
                    icon={<LinkedInIcon />}
                    tag="a"
                    target="_blank"
                />
                <IconButton
                    aria-label="github"
                    className={getChildClass('svg-link')}
                    href="https://github.com/bruqui/"
                    icon={<GithubIcon />}
                    tag="a"
                    target="_blank"
                />
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
