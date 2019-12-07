import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Footer.scss';

export default function Footer({className}) {
    return (
        <footer className={classnames(className, 'footer')}>
            © {new Date().getFullYear()}, bruqui
            {' '}
        </footer>
    );
}

Footer.propTypes = {
    className: PropTypes.string,
};
