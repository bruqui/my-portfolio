import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';

const DEFAULT_CONTEXT = {
    verified: false,
    setVerified: () => null,
};

export const RecaptchaContext = createContext(DEFAULT_CONTEXT);

export default function RecaptchaProvider({children}) {
    const [verified, setVerified] = useState(false);

    const context = {
        setVerified,
        verified,
    };

    return (
        <RecaptchaContext.Provider value={context}>{children}</RecaptchaContext.Provider>
    );
}

RecaptchaProvider.propTypes = {
    children: PropTypes.node,
};
