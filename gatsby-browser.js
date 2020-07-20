/* eslint-disable import/prefer-default-export, react/display-name, react/prop-types */
import React from 'react';

import Providers from './src/components/providers/Providers';

export function wrapRootElement({element}) {
    return <Providers>{element}</Providers>;
}
