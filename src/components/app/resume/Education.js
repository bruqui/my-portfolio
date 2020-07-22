import React from 'react';
import PropTypes from 'prop-types';

import getClassName from 'tools/getClassName';

// core
import Headline from 'components/core/Headline';

import './Education.scss';

export default function Education({className, education}) {
    const [rootClassName, getChildClass] = getClassName({
        className,
        rootClass: 'education',
    });

    return (
        <section className={rootClassName}>
            <Headline level={3} size={2}>
                Education
            </Headline>
            {education.map(
                ({node: {id: educationId, school, description, yearStart, yearEnd}}) => (
                    <section key={educationId} className={getChildClass('school')}>
                        <Headline level={4} size={4}>
                            {school}{' '}
                            <span className={getChildClass('years')}>
                                {yearStart} - {yearEnd}
                            </span>
                        </Headline>
                        <div className={getChildClass('description')}>{description}</div>
                    </section>
                ),
            )}
        </section>
    );
}

Education.propTypes = {
    className: PropTypes.string,
    education: PropTypes.arrayOf(
        PropTypes.shape({
            node: PropTypes.shape({
                id: PropTypes.string,
                school: PropTypes.string,
                description: PropTypes.string,
                yearStart: PropTypes.number,
                yearEnd: PropTypes.number,
            }),
        }),
    ),
};
