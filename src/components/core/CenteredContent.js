import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './CenteredContent.scss';

export default function CenteredContent({
    children,
    className,
    elementType,
    ...props
}) {
    const Component = elementType;

    return (
        <Component {...props} className={classnames('centered-content', className)}>
            {children}
        </Component>
    );
}

CenteredContent.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    /** Type of element such as section, aside, etc. Defaults to div */
    elementType: PropTypes.string,
};

CenteredContent.defaultProps = {
    elementType: 'div',
};
