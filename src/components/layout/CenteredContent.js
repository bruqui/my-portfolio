import React from 'react';
import PropTypes from 'prop-types';

import getClassName from 'tools/getClassName';

import './CenteredContent.scss';

/**
    Just a styled component that centers content within the page.
*/
export default function CenteredContent({children, className, componentRef, ...props}) {
    const [rootClassName] = getClassName({
        className,
        rootClass: 'centered-content',
    });

    return (
        <section {...props} className={rootClassName} ref={componentRef}>
            {children}
        </section>
    );
}

CenteredContent.propTypes = {
    className: PropTypes.string,
    componentRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    children: PropTypes.node.isRequired,
};
