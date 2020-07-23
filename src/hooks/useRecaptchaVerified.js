import {useContext} from 'react';

import {RecaptchaContext} from 'components/providers/RecaptchaProvider';

export default function useRecaptchaVerified() {
    const {verified, setVerified} = useContext(RecaptchaContext);

    return {verified, setVerified};
}
