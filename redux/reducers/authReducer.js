import * as RNLocalize from "react-native-localize";

const initialStateLogger = {
    user: {},
    token: null,
    refreshToken: null,
    language: RNLocalize.getCountry().toLowerCase()
}

export const Logger = (state = initialStateLogger, action) => {
    let nextState
    switch (action.type) {
        case 'SET_USER':
            nextState = {
                ...state,
                user: action.data
            }
            return nextState || state
        case 'REMOVE_USER':
            nextState = {
                ...state,
                user: {}
            }
            return nextState || state
        case 'SET_TOKEN':
            nextState = {
                ...state,
                token: action.data
            }
            return nextState || state
        case 'REMOVE_TOKEN':
            nextState = {
                ...state,
                token: null
            }
            return nextState || state
        case 'SET_REFRESH_TOKEN':
            nextState = {
                ...state,
                refreshToken: action.data
            }
            return nextState || state
        case 'REMOVE_REFRESH_TOKEN':
            nextState = {
                ...state,
                refreshToken: null
            }
            return nextState || state
        case 'SET_LANGUAGE':
            nextState = {
                ...state,
                language: action.data
            }
            return nextState || state
        default:
            return state;
    }
};
