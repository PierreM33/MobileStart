
/**
 * Set all auth reducer
 * @param {object} data The reducer data
 */
export const setAllAuthData = (data) => {
    return {
        type: "SET_ALL",
        data, // user, token, refreshToken
    };
};

/**
 * Remove all auth reducer
 */
export const removeAllAuthData = () => {
    return {
        type: "REMOVE_ALL"
    };
};



/**
 * Set disconnected value
 */
export const setDisconnected = (value) => {
    return {
        type: "SET_DISCONNECTED",
        data: value
    };
};
