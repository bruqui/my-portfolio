import React from 'react';
import PropTypes from 'prop-types';

import getClassName from 'tools/getClassName';
// core
import Headline from 'components/core/Headline';
import IconButton from 'components/core/IconButton';

// layout
import CenteredContent from 'components/layout/CenteredContent';

// app
import ContentfulElementParser from 'components/app/ContentfulElementParser';
import Certifications from './Certifications';
import Education from './Education';
import Experiences from './Experiences';
import Skillsets from './Skillsets';

import './Resume.scss';

export default function Resume({
    certifications,
    className,
    education,
    experiences,
    resume,
}) {
    const [rootClassName, getChildClass] = getClassName({className, rootClass: 'resume'});

    function handlePrintClick() {
        window.print();
    }

    return (
        <CenteredContent className={rootClassName}>
            <div className={getChildClass('content-right')}>
                <IconButton icon="print" onClick={handlePrintClick} />
                <IconButton icon="picture_as_pdf" tag="a" href="/download/resume.pdf" />
            </div>
            <Headline level={2}>{resume.name}</Headline>
            <ContentfulElementParser content={resume.summary.json} />
            <Experiences experiences={experiences} />
            <Skillsets />
            <Education education={education} />
            <Certifications certifications={certifications} />
        </CenteredContent>
    );
}

Resume.propTypes = {
    certifications: PropTypes.array,
    className: PropTypes.string,
    education: PropTypes.array,
    experiences: PropTypes.array,
    resume: PropTypes.object,
};
