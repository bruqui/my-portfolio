import React from 'react';
import PropTypes from 'prop-types';
import {Icon as MaterialIcon} from '@rmwc/icon';
import classnames from 'classnames';

import '@material/react-material-icon/index.scss';

export default function Icon({
    className,
    icon,
    onPrimary,
    onSecondary,
    ...props
}) {
    function getClass() {
        return classnames({
            icon: true,
            'mdc-theme--on-primary': onPrimary,
            'mdc-theme--on-secondary': onSecondary,
        }, className);
    }

    return <MaterialIcon {...props} className={getClass()} icon={icon} />;
}

Icon.propTypes = {
    className: PropTypes.string,
    /** The icon to use. This can be a string for a font icon, a url, or whatever the selected strategy needs. */
    icon: PropTypes.string,
    /** Adds class to use the MDC theme on-primary text color */
    onPrimary: PropTypes.bool,
    /** Adds class to use the MDC theme on-secondary text color */
    onSecondary: PropTypes.bool,
};

Icon.defaultProps = {
    icon: 'menu',
};
