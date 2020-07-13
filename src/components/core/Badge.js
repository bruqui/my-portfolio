import React from 'react';
import PropTypes from 'prop-types';

import getClassName from 'tools/getClassName';

import './Badge.scss';

export default function Badge({children, className}) {
    const [rootClassName] = getClassName({className, rootClass: 'badge'});

    return <div className={rootClassName}>{children}</div>;
}

Badge.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
