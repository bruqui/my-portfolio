import React from 'react';
import PropTypes from 'prop-types';
import {Button as MdcButton} from '@rmwc/button';

import getClassName from 'tools/getClassName';

import LoadingSpinner from './LoadingSpinner';

import './Button.scss';

export default function Button({
    children,
    className,
    loading,
    outlined,
    secondary,
    ...props
}) {
    const [rootClassName, getChildClass] = getClassName({
        className,
        modifiers: {outlined, secondary},
        rootClass: 'button',
    });

    function getProps() {
        const icon = loading ? (
            <LoadingSpinner className={getChildClass('spinner')} small />
        ) : (
            undefined
        );

        return {
            className: rootClassName,
            icon,
            outlined,
            ...props,
        };
    }

    return <MdcButton {...getProps()}>{children}</MdcButton>;
}

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    loading: PropTypes.bool,
    outlined: PropTypes.bool,
    secondary: PropTypes.bool,
};
