import React, {useReducer} from 'react';
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

const FORM_NAME = 'contact';
const REQUIRED = 'This field is required';
const INITIAL_STATE = {
    loading: false,
    error: null,
    submitted: false,
};

function encodeFormBody(data) {
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

export default function contact() {
    const [{error, loading, submitted}, contactDispatch] = useReducer(
        contactReducer,
        INITIAL_STATE,
    );
    const {register: fieldRegister, handleSubmit, errors: fieldErrors} = useForm();
    const [rootClassName, getChildClass] = getClassName({
        rootClass: 'contact',
    });
    const fieldClass = getChildClass('field');

    function handleOnSubmit(formData) {
        contactDispatch({type: 'SET_LOADING'});
        // TODO: This is a quick Netlify form submission. Probably want
        // to move this to a custom API that needs to be built.
        fetch('/', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: encodeFormBody({'form-name': FORM_NAME, ...formData}),
        })
            .then((response) => {
                contactDispatch({type: 'SET_SUBMITTED'});
                console.log(response);
            })
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
                        data-netlify-honeypot="bot-field"
                        method="POST"
                        name={FORM_NAME}
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
                        <input type="hidden" name="form-name" value={FORM_NAME} />
                        <Button
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
