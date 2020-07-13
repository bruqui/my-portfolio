import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
    Main container that wraps all the site content. It can be set to 100% wide or
    the main site setting for the width which will be centered.
*/
export default function Main({className, children, ...props}) {
    return (
        <main {...props} className={classnames('main', className)}>
            {children}
        </main>
    );
}

Main.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    /** Sets the width to 100% otherwise defaults to sass variable $main-container-width */
    fullWidth: PropTypes.bool,
};
