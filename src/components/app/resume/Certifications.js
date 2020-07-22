import React from 'react';
import PropTypes from 'prop-types';

import getClassName from 'tools/getClassName';

// core
import Headline from 'components/core/Headline';

import './Certifications.scss';

export default function Certifications({className, certifications}) {
    const [rootClassName, getChildClass] = getClassName({
        className,
        rootClass: 'certifications',
    });

    return (
        <section className={rootClassName}>
            <Headline level={3} size={2}>
                Certifications
            </Headline>
            {certifications.map(({node: {id: certificationsId, issuer, name}}) => (
                <section key={certificationsId} className={getChildClass('school')}>
                    <Headline level={4} size={4}>
                        {name} - <span className={getChildClass('issuer')}>{issuer}</span>
                    </Headline>
                </section>
            ))}
        </section>
    );
}

Certifications.propTypes = {
    className: PropTypes.string,
    certifications: PropTypes.arrayOf(
        PropTypes.shape({
            node: PropTypes.shape({
                id: PropTypes.string,
                issuer: PropTypes.string,
                name: PropTypes.string,
            }),
        }),
    ),
};
