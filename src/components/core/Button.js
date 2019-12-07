import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {Button as MdcButton} from '@rmwc/button';
import {CircularProgress} from '@rmwc/circular-progress';

import './Button.scss';
import '@rmwc/circular-progress/circular-progress.css';

export default function Button({
    children,
    className,
    loading,
    ...props
}) {
    function getProps() {
        const icon = (loading)
            ? <CircularProgress size="xsmall" style={{color: '#fff'}} />
            : undefined;

        return {
            className: classnames(className, 'button'),
            icon,
            ...props,
        };
    }

    return <MdcButton {...getProps()}>{children}</MdcButton>;
}

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    loading: PropTypes.bool,
};
