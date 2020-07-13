import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Footer.scss';

/**
    Main footer component for the site.
*/
export default function Footer({className}) {
    return (
        <footer className={classnames(className, 'footer')}>
            © {new Date().getFullYear()}, BEhiveTech.com{' '}
        </footer>
    );
}

Footer.propTypes = {
    className: PropTypes.string,
};
