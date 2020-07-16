import React from 'react';
import PropTypes from 'prop-types';
import {IconButton as MdcIconButton} from '@rmwc/icon-button';

import getClassName from 'tools/getClassName';

export default function IconButton({className, onPrimary, onSecondary, ...props}) {
    const [rootClassName] = getClassName({
        className,
        rootClass: 'icon-button',
        modifiers: {'on-primary': onPrimary, 'on-secondary': onSecondary},
    });

    return <MdcIconButton {...props} className={rootClassName} />;
}

IconButton.propTypes = {
    className: PropTypes.string,
    /** Tells the icon to use the $color-on-primary color */
    onPrimary: PropTypes.bool,
    /** Tells the icon to use the $color-on-secondary color */
    onPrimary: PropTypes.bool,
};
