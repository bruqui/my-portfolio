import React from 'react';
import PropTypes from 'prop-types';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

import getClassName from 'tools/getClassName';

import './ContentfulElementParser.scss';

export default function ContentfulElementParser({className, content}) {
    const [rootClassName] = getClassName({
        className,
        rootClass: 'contentful-element-parser',
    });

    return <div className={rootClassName}>{documentToReactComponents(content)}</div>;
}

ContentfulElementParser.propTypes = {
    className: PropTypes.string,
    content: PropTypes.object,
};
