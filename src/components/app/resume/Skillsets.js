import React from 'react';
import PropTypes from 'prop-types';

// tools
import getClassName from 'tools/getClassName';

// core
import Badge from 'components/core/Badge';

// scss
import './Skillsets.scss';

export default function Skillsets({className, skills}) {
    const [rootClassName, getChildClass] = getClassName({
        className,
        rootClass: 'skillsets',
    });

    return skills && skills.length ? (
        <div className={rootClassName}>
            {skills.map(({name}) => (
                <Badge className={getChildClass('skill')} key={name}>
                    {name}
                </Badge>
            ))}
        </div>
    ) : null;
}

Skillsets.propTypes = {
    className: PropTypes.string,
    skills: PropTypes.array,
};
