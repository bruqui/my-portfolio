import React, {createContext, useCallback, useReducer} from 'react';
import PropTypes from 'prop-types';

const DEFAULT_CONTEXT = {
    getNodePos: () => null,
    setNodePos: () => null,
};

function reducer(state, {type, payload = {}}) {
    const actions = {
        SET_NODE: {
            ...state,
            ...payload,
        },
    };

    return actions[type] || state;
}

/* eslint-disable import/no-unused-modules */
export const ScrollPositionContext = createContext(DEFAULT_CONTEXT);

export default function ScrollPositionProvider({children}) {
    const [state, dispatch] = useReducer(reducer, {});
    const getNodePos = useCallback((nodeName) => state[nodeName], [state]);

    function setNodePos(node) {
        dispatch({type: 'SET_NODE', payload: node});
    }

    const context = {
        getNodePos,
        setNodePos,
    };

    return (
        <ScrollPositionContext.Provider value={context}>
            {children}
        </ScrollPositionContext.Provider>
    );
}

ScrollPositionProvider.propTypes = {
    children: PropTypes.node,
};
