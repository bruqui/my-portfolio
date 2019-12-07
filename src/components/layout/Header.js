import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Heading from '../core/Heading';
import Link from '../core/Link';
import HeaderNav from './HeaderNav';


import './Header.scss';

export default function Header({className, siteTitle}) {
    return (
        <header className={classnames(className, 'header')}>
            <HeaderNav />
            <Heading className="header__heading" level={1}>
                <Link className="header__link" to="/" noUnderline onPrimary>
                    Portfolio
                </Link>
            </Heading>
        </header>
    );
}

Header.propTypes = {
    className: PropTypes.string,
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: '',
};
