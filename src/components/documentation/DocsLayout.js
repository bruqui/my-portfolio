import React from 'react';
import PropTypes from 'prop-types';

import Links from './Links';
import './DocsLayout.scss';

export default function DocsLayout({children}) {
    return (
        <div className="docs-layout">
            <Links className="docs-layout__links" />
            <div className="docs-layout__children">{children}</div>
        </div>
    );
}

DocsLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
