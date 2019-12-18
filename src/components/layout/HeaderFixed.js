import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// import {ScrollContext} from '../providers/ScrollProvider';
// import {SizingContext} from '../providers/SizingProvider';

import './HeaderFixed.scss';

/**
    This component uses the scroll position to determine
    if it needs to be fixed at the top or scroll with the
    content mainly on the home page. It's set up separately
    so the scrolling and size values aren't constantly updating
    on pages that don't need it.
*/

export default function HeaderFixed({renderHeader}) {
    // const {scrollY} = useContext(ScrollContext);
    // const {height} = useContext(SizingContext);
    // const headerIsFixed = (scrollY > (height * 0.9));
    const headerIsFixed = true;

    function getClass() {
        return classnames({
            'header-fixed': true,
            'header-fixed--fixed': headerIsFixed,
        });
    }

    return <div className={getClass()}>{renderHeader()}</div>;
}

HeaderFixed.propTypes = {
    /** Render function to render the Header component */
    renderHeader: PropTypes.func,
};
