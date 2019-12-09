import React, {useState} from 'react';
import {map} from 'lodash';
import {SimpleMenu, MenuItem} from '@rmwc/menu';

import Icon from '../core/Icon';
import Link from '../core/Link';

import './HeaderNav.scss';

export default function HeaderNav() {
    const [selected, setSelected] = useState(null);
    const links = [
        {
            display: 'home',
            to: '/',
        },
        {
            display: 'docs',
            to: '/docs',
        },
    ];

    function handleGetLinkProps({isCurrent, href}) {
        if (isCurrent) {
            setSelected(href);
        }
    }

    // eslint-disable-next-line
    function renderLink({authenticated, display, to}) {
        return (
            <MenuItem key={display} selected={(selected === to)}>
                <Link
                    getProps={handleGetLinkProps}
                    to={to}
                >
                    {display}
                </Link>
            </MenuItem>
        );
    }

    return (
        <nav className="header-nav">
            <SimpleMenu
                handle={<Icon role="button" icon="menu" onPrimary />}
                style={{minWidth: '200px'}}
            >
                {map(links, renderLink)}
            </SimpleMenu>
        </nav>
    );
}
