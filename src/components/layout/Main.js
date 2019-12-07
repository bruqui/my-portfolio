import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Main.scss';

export default function Main({className, children, fullWidth}) {
    function getClass() {
        return classnames({
            'main-container': true,
            'main-container--full-width': fullWidth,
        }, className);
    }

    return <main className={getClass()}>{children}</main>;
}

Main.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    /** Sets the width to 100% otherwise defaults to sass variable $main-container-width */
    fullWidth: PropTypes.bool,
};
