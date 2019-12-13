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
    const {handhelds} = useContext(SizingContext);
    const links = [
        {
            display: 'home',
            to: '/',
        },
        {
            display: 'about',
            to: '/about',
        },
        {
            display: 'projects',
            to: '/projects',
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
    function renderLink({authenticated, display, href, to}) {
        const linkProps = {
            key: `link_${display}`,
            className: 'header-nav__link',
        };
        const linkContent = (to)
            ? (
                <Link {...linkProps} getProps={handleGetLinkProps} to={to}>
                    {display}
                </Link>
            )
            : <a {...linkProps} href={href}>{display}</a>;

        return (handhelds)
            ? <MenuItem key={display} selected={(selected === to)}>{linkContent}</MenuItem>
            : linkContent;
    }

    function getClass() {
        return classnames({
            'header-nav': true,
            'header-nav--device': handhelds,
        });
    }

    return (
        <nav className={getClass()}>
            {
                (handhelds)
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
