import React from 'react';
import PropTypes from 'prop-types';

import getClassName from 'tools/getClassName';

import Icon from 'components/core/Icon';

import './AboutCard.scss';

export default function AboutCard({children, className, icon}) {
    const [rootClassName, getChildClass] = getClassName({
        className,
        rootClass: 'about-card',
    });

    return (
        <div className={rootClassName}>
            {icon && <Icon icon={icon} className={getChildClass('icon')} />}
            <div className={getChildClass('content')}>{children}</div>
        </div>
    );
}

AboutCard.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.string,
};
