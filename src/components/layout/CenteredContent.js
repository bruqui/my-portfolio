import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './CenteredContent.scss';

/**
    Just a styled component that centers content within the page.
*/
export default function CenteredContent({children, className, componentRef, ...props}) {
    return (
        <section
            {...props}
            className={classnames('centered-content', className)}
            ref={componentRef}
        >
            {children}
        </section>
    );
}

CenteredContent.propTypes = {
    className: PropTypes.string,
    componentRef: PropTypes.string,
    children: PropTypes.node.isRequired,
};
