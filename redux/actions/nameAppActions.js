/**
 * Set state
 * @param {object} data The state data
 */
export const setState = (data) => {
    return {
        type: "SET_STATE",
        data,
    };
};

/**
 * Remove state
 */
export const removeState = () => {
    return {
        type: "REMOVE_STATE"
    };
};

/**
 * Set login from register
 */
export const setLoginFromRegister = (data) => {
    return {
        type: "SET_LOGIN_FROM_REGISTER",
        data,
    };
};

/**
 * Set is navigation appear
 */
export const setIsNavigationAppear = (data) => {
    return {
        type: "SET_IS_NAVIGATION_APPEAR",
        data,
    };
};

/**
 * Remove all data
 */
export const removeAllAppData = () => {
    return {
        type: "REMOVE_ALL",
    };
};

/**
 * Set Count for code verification
 */
export const setCountCode = (count) => {
    return {
        type: "SET_COUNT_CODE",
        count,
    };
};

/**
 * Update current time for all app
 */
export const updateCurrentTime = (time) => {
    return {
        type: "UPDATE_CURRENT_TIME",
        time,
    };
};

/**
 * Update next time for all app
 */
export const updateTime = (nextTime, lastTime) => {
    return {
        type: "UPDATE_TIME",
        nextTime,
        lastTime
    };
};