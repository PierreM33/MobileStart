import axios from "axios";
import {store} from "../redux/store/configureStore";
import {removeAllAuthData, setAllAuthData, setDisconnected} from "../redux/actions/authActions";
// import {manageAPIErrors} from "../utilities/error";
import config from "../config/config.json";
import * as RNLocalize from "react-native-localize";


export const logout = async (Logger) => {
    try {
        let action = setDisconnected(true)
        store.dispatch(action)
        action = removeAllAuthData()
        store.dispatch(action)
        // action = removeAllAppData()
        // store.dispatch(action)
        if (Logger && Logger.token) {
            const data = {expoToken: Logger.expoToken}
            await AxiosInstance(Logger).post('/api/logout', data)
        }
        console.log('User logged out successfully')
    } catch (e) {
        // manageAPIErrors(e)
    }
}

export default function AxiosInstance(Logger = null) {

    const config = require("../config/config.json")

    const axiosApi = axios.create({
        baseURL: config["serverIp"],
        //timeout: 10000
    })

    axiosApi.interceptors.request.use(
        (config) => {
            const token = Logger ? Logger.token : null
            if (token) {
                config.headers['Authorization'] = 'Bearer ' + token
                config.headers['locale'] = RNLocalize.getLocales()[0].languageCode
            }

            return config
        },

        (error) => {
            return Promise.reject(error)
        }
    )

    axiosApi.interceptors.response.use(
        async (response) => {
            if (Logger && Logger.user) {
                if ((response.config.url.includes('/users') || response.config.url.includes('/searchProfile') || response.config.url.includes('/anecdotes') || response.config.url.includes('/profile')) && (response.config.method === 'put' || response.config.method === 'post')) {
                    refreshToken(Logger, response, false)
                }
            }

            return response.data
        },
        async (error) => {
            if (error.response && error.response.status === 401 && !error.response.config.url.includes('logout') && Logger && Logger.refreshToken) {
                return await refreshToken(Logger, error.response)
            }
            return Promise.reject(error)
        }
    )

    return axiosApi
}

export const refreshToken = async (Logger, response, doRetry = true) => {
    const data = {
        refresh_token: Logger.refreshToken
    }

    try {
        const res = await axios.post(
            config["serverIp"] + '/api/token/refresh',
            data,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )

        const newToken = res.data.token
        const action = setAllAuthData(res.data)
        store.dispatch(action)

        if (doRetry) {
            response.config.headers['Authorization'] = 'Bearer ' + newToken
            const baseResponse = await axios(response.config)

            return baseResponse.data
        }

        return null
    } catch (e) {
        await logout(Logger)
        return Promise.reject(e)
    }
}
