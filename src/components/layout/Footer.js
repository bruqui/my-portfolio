import React from 'react';
import PropTypes from 'prop-types';

import getClassName from 'tools/getClassName';

import './Footer.scss';

/**
    Main footer component for the site.
*/
export default function Footer({className}) {
    const [rootClassName] = getClassName({
        className,
        rootClass: 'footer',
    });

    return (
        <footer className={rootClassName}>
            © {new Date().getFullYear()}, BEhiveTech.com{' '}
        </footer>
    );
}

Footer.propTypes = {
    className: PropTypes.string,
};
