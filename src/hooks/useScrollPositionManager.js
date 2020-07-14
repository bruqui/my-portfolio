import {useCallback, useContext, useEffect, useLayoutEffect, useRef} from 'react';

import {ScrollPositionContext} from 'components/providers/ScrollPositionProvider';

function scroll(target, {posX, posY}) {
    if (target instanceof window.Window) {
        target.scrollTo(posX, posY);
    } else {
        /* eslint-disable no-param-reassign */
        target.scrollLeft = posX;
        target.scrollTop = posY;
        /* eslint-enable no-param-reassign */
    }
}

function getScrollPosition(target) {
    return target instanceof window.Window
        ? {posX: target.scrollX, posY: target.scrollY}
        : {posX: target.scrollLeft, posY: target.scrollTop};
}

// eslint-disable-next-line import/no-unused-modules
export default function useScrollPositionManager(nodeName) {
    const thisRef = useRef();
    const {getNodePos, setNodePos} = useContext(ScrollPositionContext);

    const setNode = useCallback(() => {
        if (thisRef.current) {
            setNodePos({[nodeName]: getScrollPosition(thisRef.current)});
        }
    }, [getNodePos, thisRef.current, nodeName, setNodePos]);

    // Restore Scroll Position
    useLayoutEffect(() => {
        const pos = getNodePos(nodeName);

        if (pos && thisRef.current) {
            scroll(thisRef.current, pos);
        }
    }, [getNodePos, thisRef.current]);

    // Set Scroll Position
    useEffect(() => setNode, [thisRef.current]);

    return thisRef;
}
