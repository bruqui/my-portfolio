import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Loading({className, loading}) {
    return (
        (loading)
            ? <div className={classnames('loading', className)}>Loading...</div>
            : null
    );
}

Loading.propTypes = {
    className: PropTypes.string,
    /** If true, the loader will show; otherwise component returns null. */
    loading: PropTypes.bool,
};
