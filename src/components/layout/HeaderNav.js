import React, {useContext, useState} from 'react';
import {map} from 'lodash';
import classnames from 'classnames';
import {SimpleMenu, MenuItem} from '@rmwc/menu';

import Icon from '../core/Icon';
import Link from '../core/Link';

import {SizingContext} from '../providers/SizingProvider';

import './HeaderNav.scss';

export default function HeaderNav() {
    const [selected, setSelected] = useState(null);
    const {width} = useContext(SizingContext);
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
        const link = (
            <Link
                className="header-nav__link"
                key={`link_${display}`}
                getProps={handleGetLinkProps}
                to={to}
            >
                {display}
            </Link>
        );

        return (isDevice())
            ? <MenuItem key={display} selected={(selected === to)}>{link}</MenuItem>
            : link;
    }

    function isDevice() {
        return (width < 300);
    }

    function getClass() {
        return classnames({
            'header-nav': true,
            'header-nav--device': isDevice(),
        });
    }
    return (
        <nav className={getClass()}>
            {
                (isDevice())
                    ? (
                        <SimpleMenu
                            handle={<Icon role="button" icon="menu" onPrimary />}
                            style={{minWidth: '200px'}}
                        >
                            {map(links, renderLink)}
                        </SimpleMenu>
                    )
                    : map(links, renderLink)
            }
        </nav>
    );
}
