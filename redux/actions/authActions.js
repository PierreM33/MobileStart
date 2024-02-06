/**
 * Update user
 * @param {object} data The user data
 */
export const updateUser = data => {
    return {
        type: "SET_USER",
        data,
    };
};

/**
 * Remove user
 */
export const removeUser = () => {
    return {
        type: "REMOVE_USER"
    };
};

/**
 * Update token
 * @param {object} data The token data
 */
export const updateToken = data => {
    return {
        type: "SET_TOKEN",
        data,
    };
};

/**
 * Remove token
 */
export const removeToken = () => {
    return {
        type: "REMOVE_TOKEN"
    };
};

/**
 * Update refresh token
 * @param {object} data The refresh token data
 */
export const updateRefreshToken = data => {
    return {
        type: "SET_REFRESH_TOKEN",
        data,
    };
};

/**
 * Update mercure token
 * @param {string} data The refresh token data
 */
export const updateMercureToken = data => {
    return {
        type: "SET_MERCURE_TOKEN",
        data,
    };
};

/**
 * Remove refresh token
 */
export const removeRefreshToken = () => {
    return {
        type: "REMOVE_REFRESH_TOKEN"
    };
};

/**
 * Update expo token
 * @param {object} data The token data
 */
export const setExpoToken = data => {
    return {
        type: "SET_EXPO_TOKEN",
        data,
    };
};

/**
 * Remove expo token
 */
export const removeExpoToken = () => {
    return {
        type: "REMOVE_EXPO_TOKEN"
    };
};

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
 * Update number of notification
 */
export const updateNotification = (number) => {
    return {
        type: "UPDATE_NUMBER_NOTIFICATION",
        data: number
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

/**
 * Set language value
 */
export const setLanguage = (value) => {
    return {
        type: "SET_LANGUAGE",
        data: value
    };
};
