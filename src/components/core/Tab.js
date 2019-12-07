import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {Tab as MdcTab} from '@rmwc/tabs';

import './Tab.scss';

export default function Tab({className, ...props}) {
    return <MdcTab {...props} className={classnames('tab', className)} />;
}

Tab.propTypes = {
    className: PropTypes.string,
};
