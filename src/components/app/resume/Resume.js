import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import getClassName from 'tools/getClassName';
import useRecaptchaVerified from 'hooks/useRecaptchaVerified';

// core
import Button from 'components/core/Button';
import Headline from 'components/core/Headline';
import IconButton from 'components/core/IconButton';

// layout
import CenteredContent from 'components/layout/CenteredContent';

// app
import ContentfulElementParser from 'components/app/ContentfulElementParser';
import Certifications from './Certifications';
import Education from './Education';
import Experiences from './Experiences';
import PrivateInfo from './PrivateInfo';
import Recaptcha from '../Recaptcha';
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
    const {verified} = useRecaptchaVerified();
    const [showPersonalInfo, setShowPeronalInfo] = useState(false);

    useEffect(() => {
        if (!verified) {
            setShowPeronalInfo(false);
        }
    }, [verified]);

    function handlePrintClick() {
        window.print();
    }

    function handleShowPeronalInfo() {
        setShowPeronalInfo(true);
    }

    return (
        <CenteredContent className={rootClassName}>
            <div className={getChildClass('content-right')}>
                <IconButton icon="print" onClick={handlePrintClick} />
                <IconButton icon="picture_as_pdf" tag="a" href="/download/resume.pdf" />
            </div>
            <Headline level={2}>{resume.name}</Headline>
            <div>{resume.location}</div>
            <Recaptcha show={!verified && showPersonalInfo} />
            {!showPersonalInfo && (
                <Button
                    className={getChildClass('button')}
                    onClick={handleShowPeronalInfo}
                    raised
                >
                    Reveal Contact Info
                </Button>
            )}
            <PrivateInfo show={verified && showPersonalInfo} />
            <div className={getChildClass('print-only')}>
                <div>Website: {resume.website}</div>
                <div>LinkedIn: {resume.linkedin}</div>
                <div>Github: {resume.github}</div>
            </div>
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
