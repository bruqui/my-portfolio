import React, {useEffect, useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {get} from 'lodash';

import Heading from '../core/Heading';
import Link from '../core/Link';
import HeaderNav from './HeaderNav';


import './Header.scss';

export default function Header({className, fixed, siteTitle}) {
    const [headerShouldFixed, setHeaderShouldFixed] = useState(false);
    const [currentNode, setCurrentNode] = useState();

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [currentNode]);

    const headerRef = useCallback((node) => {
        if (node) {
            setCurrentNode(node);
        }
    }, []);

    function handleScroll() {
        const headerOffsetTop = get(currentNode, 'offsetTop');

        if (headerOffsetTop || headerOffsetTop === 0) {
            setHeaderShouldFixed(window.scrollY >= headerOffsetTop);
        }
    }

    function getClass() {
        return classnames({
            header: true,
            'header--fixed': fixed && headerShouldFixed,
        });
    }
    return (
        <header className={getClass()} ref={headerRef}>
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
    /** Indicates whether the header should be fixed or not */
    fixed: PropTypes.bool,
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: '',
};
