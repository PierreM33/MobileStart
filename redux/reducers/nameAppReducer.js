const initialStateApp = {
    state: {
        message: null,
        type: null
    }
}

export const nameAppState = (state = initialStateApp, action) => {
    let nextState
    switch (action.type) {
        case 'SET_STATE':
            nextState = {
                ...state,
                state: action.data
            }
            return nextState || state
        case 'REMOVE_STATE':
            nextState = {
                ...state,
                state: {}
            }
            return nextState || state
        default:
            return state;
    }
};
