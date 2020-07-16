import React, {useState} from 'react';
import PropTypes from 'prop-types';

// tools
import getClassName from 'tools/getClassName';

// core
import {MenuItem, SimpleMenu} from 'components/core/menu';
import IconButton from 'components/core/IconButton';
import getLinks from './getLinks';

import NavLink from './NavLink';

export default function HeaderNavMenu({className, selected}) {
    const [rootClassName, getChildClass] = getClassName({
        className,
        rootClass: 'header-nav-menu',
    });
    const [selectedVal, setSelectedVal] = useState();

    function handleSelect(newSelectedVal) {
        setSelectedVal(newSelectedVal);
    }

    return (
        <nav className={rootClassName}>
            <SimpleMenu
                className={getChildClass('menu')}
                handle={(
                    <IconButton
                        className={getChildClass('icon')}
                        tabIndex={0}
                        icon="menu"
                        aria-label="nav menu"
                        title="site navigation"
                        onPrimary
                    />
                )}
                style={{minWidth: '12.5rem'}}
            >
                {getLinks().map((link) => (
                    <MenuItem
                        key={link.children}
                        selected={[link.to, link.href].includes(selectedVal)}
                    >
                        <NavLink {...link} onSelect={handleSelect} menu />
                    </MenuItem>
                ))}
            </SimpleMenu>
        </nav>
    );
}

HeaderNavMenu.propTypes = {
    className: PropTypes.string,
    selected: PropTypes.bool,
};
