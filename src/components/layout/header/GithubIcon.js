import React from 'react';
import PropTypes from 'prop-types';

/**
    Component that shows an svg of a github icon.
*/

/* eslint-disable max-len */
export default function GithubIcon({className}) {
    return (
        <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 24 24"
            enableBackground="new 0 0 24 24"
            xmlSpace="preserve"
        >
            <path
                d="M12,0.1C5.4,0.1,0.1,5.5,0.1,12.3c0,5.4,3.4,10,8.1,11.6C8.8,24,9,23.6,9,23.3c0-0.3,0-1.1,0-2.1c-3.3,0.7-4-1.6-4-1.6
    c-0.5-1.4-1.3-1.8-1.3-1.8C2.6,17,3.8,17,3.8,17c1.2,0.1,1.8,1.3,1.8,1.3c1,1.9,2.8,1.3,3.5,1c0.1-0.8,0.4-1.3,0.8-1.6
    c-2.6-0.3-5.4-1.4-5.4-6c0-1.4,0.5-2.4,1.2-3.3C5.5,8,5.1,6.8,5.7,5.1c0,0,1-0.3,3.3,1.2C10,6.1,11,6,12,6s2,0.1,3,0.4
    c2.3-1.6,3.3-1.2,3.3-1.2c0.7,1.6,0.2,2.9,0.1,3.2c0.8,0.9,1.2,2,1.2,3.3c0,4.7-2.8,5.7-5.4,6c0.4,0.4,0.8,1.1,0.8,2.3
    c0,1.6,0,3,0,3.3c0,0.3,0.2,0.7,0.8,0.6c4.7-1.6,8.1-6.2,8.1-11.6C23.9,5.5,18.6,0.1,12,0.1z"
            />
        </svg>
    );
}

GithubIcon.propTypes = {
    className: PropTypes.string,
};
