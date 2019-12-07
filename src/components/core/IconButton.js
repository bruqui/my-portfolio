import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {IconButton as MaterialIconButton} from '@rmwc/icon-button';

import './IconButton.scss';

export default function IconButton({
    className, icon, onClick, ...props
}) {
    function handleClick(event) {
        event.preventDefault();
        onClick(event);
    }

    return (
        <MaterialIconButton
            {...props}
            icon={icon}
            className={classnames(className, 'icon-button')}
            onClick={handleClick}
        />
    );
}

IconButton.propTypes = {
    className: PropTypes.string,
    /** A string that matches a material icon or a node you want as the icon */
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    onClick: PropTypes.func,
};

IconButton.defaultProps = {
    onClick: () => null,
};
