import React, {useState} from 'react';
import PropTypes from 'prop-types';

import getClassName from 'tools/getClassName';

import Button from 'components/core/Button';
import Layout from 'components/layout/Layout';
import DocsDrawer from './DocsDrawer';

import './Docs.scss';
/**
    Layout for all the documentation components.
*/
export default function Docs({children, className}) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [rootClassName, getChildClass] = getClassName({
        className,
        rootClass: 'docs-layout',
    });

    function toggleDrawerOpen() {
        setDrawerOpen(!drawerOpen);
    }

    return (
        <Layout className={rootClassName} fullWidth headerFixed>
            <div className={getChildClass('container')}>
                <DocsDrawer
                    className={getChildClass('drawer')}
                    drawerOpen={drawerOpen}
                    toggleDrawerOpen={toggleDrawerOpen}
                />
                <div className={getChildClass('children')}>
                    <Button onClick={toggleDrawerOpen} raised secondary>
                        Open Docs Menu
                    </Button>
                    {children}
                </div>
            </div>
        </Layout>
    );
}

Docs.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
