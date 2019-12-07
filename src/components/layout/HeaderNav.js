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
            display: 'events',
            to: '/',
        },
        {
            authenticated: true,
            display: 'create event',
            to: '/private/create-event',
        },
        {
            display: 'about',
            to: '/about',
        },
        {
            display: 'contact us',
            to: '/contact-us',
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
