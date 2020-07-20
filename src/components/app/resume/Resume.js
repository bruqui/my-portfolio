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
import Experiences from './Experiences';

import './Resume.scss';

export default function Resume({className, resume, experiences}) {
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
        </CenteredContent>
    );
}

Resume.propTypes = {
    className: PropTypes.string,
    experiences: PropTypes.array,
    resume: PropTypes.object,
};
