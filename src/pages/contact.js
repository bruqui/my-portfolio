import React, {useReducer} from 'react';
import PropTypes from 'prop-types';
import {useForm} from 'react-hook-form';

// tools
import getClassName from 'tools/getClassName';

// core
import Button from 'components/core/Button';
import LoadingSpinner from 'components/core/LoadingSpinner';
import Headline from 'components/core/Headline';
import TextField from 'components/core/TextField';

// layout
import Layout from 'components/layout/Layout';

// app
import SEO from 'components/app/seo';

// styles
import './contact.scss';

const REQUIRED = 'This field is required';
const INITIAL_STATE = {
    loading: false,
    error: null,
    submitted: false,
};

function encode(data) {
    return Object.keys(data)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&');
}

function contactReducer(state, {type, payload = {}}) {
    const actions = {
        RESET_STATE: INITIAL_STATE,
        SET_ERROR: {
            error: payload.error,
            loading: false,
            submitted: false,
        },
        SET_LOADING: {
            ...INITIAL_STATE,
            loading: true,
        },
        SET_SUBMITTED: {
            error: null,
            loading: false,
            submitted: true,
        },
    };

    return {...state, ...actions[type]} || state;
}
export default function contact({className}) {
    const [{error, loading, submitted}, contactDispatch] = useReducer(
        contactReducer,
        INITIAL_STATE,
    );
    const {register: fieldRegister, handleSubmit, errors: fieldErrors} = useForm();
    const [rootClassName, getChildClass] = getClassName({
        className,
        rootClass: 'contact',
    });
    const fieldClass = getChildClass('field');

    function handleOnSubmit(formData) {
        contactDispatch({type: 'SET_LOADING'});
        fetch('/', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: encode({'form-name': 'contact', ...formData}),
        })
            .then(() => contactDispatch({type: 'SET_LOADING'}))
            .catch((formError) =>
                contactDispatch({type: 'SET_ERROR', payload: {formError}}),
            );
    }

    return (
        <Layout className={rootClassName}>
            <div className={getChildClass('form-container')}>
                <Headline level={2}>Contact Form</Headline>
                {error && <code className={getChildClass('error')}>{error}</code>}
                {!submitted && (
                    <form
                        className={rootClassName}
                        data-netlify-recaptcha="true"
                        data-netlify="true"
                        method="POST"
                        name="contact"
                        onSubmit={handleSubmit(handleOnSubmit)}
                    >
                        <SEO title="Contact" />
                        <TextField
                            className={fieldClass}
                            disabled={loading}
                            fieldError={fieldErrors.name}
                            id="name"
                            inputRef={fieldRegister({REQUIRED})}
                            label="Name"
                            name="name"
                        />
                        <TextField
                            className={fieldClass}
                            disabled={loading}
                            fieldError={fieldErrors.email}
                            id="email"
                            inputRef={fieldRegister({REQUIRED})}
                            label="Email"
                            name="email"
                            type="email"
                        />
                        <TextField
                            className={fieldClass}
                            disabled={loading}
                            fieldError={fieldErrors.subject}
                            id="subject"
                            inputRef={fieldRegister({REQUIRED})}
                            label="Subject"
                            name="subject"
                        />
                        <TextField
                            className={fieldClass}
                            disabled={loading}
                            fieldError={fieldErrors.message}
                            id="message"
                            inputRef={fieldRegister({REQUIRED})}
                            label="Message"
                            name="message"
                            outlined
                            textarea
                        />
                        <div data-netlify-recaptcha="true" />
                        <Button
                            className={fieldClass}
                            disabled={loading}
                            className={getChildClass('button')}
                            icon={loading && <LoadingSpinner small />}
                            raised
                            type="submit"
                        >
                            submit
                        </Button>
                    </form>
                )}
            </div>
        </Layout>
    );
}

contact.propTypes = {
    className: PropTypes.string,
};
