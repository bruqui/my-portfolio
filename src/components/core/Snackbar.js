import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Snackbar as MdcSnackbar, SnackbarAction as MdcSnackbarAction} from '@rmwc/snackbar';

import './Snackbar.scss';

export const SnackbarAction = MdcSnackbarAction;

export default function Snackbar({
    className,
    ...props
}) {
    return <MdcSnackbar {...props} className={classnames('snackbar', className)} />;
}

Snackbar.propTypes = {
    className: PropTypes.string,
};
