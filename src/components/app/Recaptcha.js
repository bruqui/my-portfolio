import React from 'react';
import PropTypes from 'prop-types';
import ReactRecaptcha from 'react-recaptcha';

import getClassName from 'tools/getClassName';
import useRecaptchaVerified from 'hooks/useRecaptchaVerified';

import './Recaptcha.scss';

export default function Recaptcha({className, onVerify, show}) {
    const {setVerified} = useRecaptchaVerified();
    const [rootClassName] = getClassName({
        className,
        rootClass: 'recaptcha',
        modifiers: {show},
    });

    function handleRecaptchaVerify(response) {
        setVerified(!!response);
        onVerify(!!response);
    }

    function handleExpiredCallback() {
        setVerified(false);
        onVerify(false);
    }

    return (
        <div className={rootClassName}>
            <ReactRecaptcha
                expiredCallback={handleExpiredCallback}
                onloadCallback={handleExpiredCallback}
                sitekey={process.env.GATSBY_RECAPTCHA_SITEKEY}
                size="normal"
                verifyCallback={handleRecaptchaVerify}
            />
        </div>
    );
}

Recaptcha.propTypes = {
    className: PropTypes.string,
    /** Callback function which returns boolean if reacaptcha verify passes */
    onVerify: PropTypes.func,
    /** Shows or hide the component */
    show: PropTypes.bool,
};

Recaptcha.defaultProps = {
    onVerify: () => null,
    show: false,
};
