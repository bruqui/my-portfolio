import React from 'react';
import PropTypes from 'prop-types';

import HeaderNav from './HeaderNav';
import HeaderFixed from './HeaderFixed';

import './Header.scss';

/**
    This component will either just render a header or use the HeaderFixed
    component to determine if the header needs to be fixed at the top or not.
    It uses render functions to prevent the HeaderFixed component from rendering
    at all if the fixed prop hasn't been set to true.
*/

export default function Header({className, fixed, siteTitle}) {
    function renderHeader() {
        return (
            <header className="header">
                <HeaderNav />
            </header>
        );
    }

    function renderHeaderFixed() {
        return <HeaderFixed renderHeader={renderHeader} />;
    }

    return (fixed)
        ? renderHeaderFixed()
        : renderHeader();
}

Header.propTypes = {
    className: PropTypes.string,
    /** Indicates whether the header should be fixed or not */
    fixed: PropTypes.bool,
};
