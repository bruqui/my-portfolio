import React from 'react';

import getClassName from 'tools/getClassName';

export default function resumePdf() {
    const [rootClassName] = getClassName({rootClass: 'resume-pdf'});

    return <div className={rootClassName}>resume-pdf</div>;
}
