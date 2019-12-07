import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {TabBar as MdcTabBar} from '@rmwc/tabs';

import './TabBar.scss';

export default function TabBar({className, ...props}) {
    return <MdcTabBar {...props} className={classnames('tab-bar', className)} />;
}

TabBar.propTypes = {
    className: PropTypes.string,
};
