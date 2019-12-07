import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {get, map} from 'lodash';

import Snackbar, {SnackbarAction} from './Snackbar';

import './ErrorMessage.scss';

export default function ErrorMessage({className, error, name}) {
    const [open, setOpen] = useState(!!error);

    useEffect(() => {
        setOpen(!!error);
    }, [error]);

    function handleClose(event) {
        setOpen(false);
    }

    let errorResult = (typeof error === 'string') ? error : '';

    if (typeof error === 'object') {
        if (error.message) {
            const graphQLErrors = get(error, 'graphQLErrors');

            if (typeof graphQLErrors === 'object') {
                errorResult = (
                    <React.Fragment>
                        {
                            map(
                                graphQLErrors,
                                ({message, path}) => (
                                    <div key={message}>
                                        {message}, path: {JSON.stringify(path)}
                                    </div>
                                )
                            )
                        }
                    </React.Fragment>
                );
            } else {
                errorResult = error.message;
            }
        } else {
            errorResult = <pre>{JSON.stringify(error, undefined, 4)}</pre>;
        }
    }

    return (
        <Snackbar
            className={classnames('error-message', className)}
            name={name}
            open={open}
            onClose={handleClose}
            message={errorResult}
            action={<SnackbarAction label="Dismiss" />}
            timeout={90000}
        />
    );
}

ErrorMessage.propTypes = {
    className: PropTypes.string,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    /** name prop for the Snackbar component which is required by that component */
    name: PropTypes.string,
};

ErrorMessage.defaultProps = {
    name: 'errorMessage',
};
