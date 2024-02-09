import {store} from '../redux/store/configureStore'
import SystemSetting from 'react-native-system-setting'
import {translate} from "./translation";

export const manageAPIErrors = async (e) => {
    const isAirPlane = await SystemSetting.isAirplaneEnabled()
    const state = store.getState()
    let message = null
    let autoClose = true
    let type = 'ERROR'

    if (isAirPlane) {
        type = 'INFO'
        message = translate("AIRPLANE")
        // dispatchMessage(type, message, null, store.dispatch, autoClose)
    }
    else if (state) {
        type = 'INFO'
        message = translate("NO_INTERNET")
        // dispatchMessage(type, message, null, store.dispatch, autoClose)
    }
    else if (e && e.response && e.response.status !== null) {
        switch (e.response.status) {
            case 0:
                message = translate("ERREUR_0")
                autoClose = false
                type = 'INFO'
                break
            case 400:
                message = translate("ERREUR_400")
                break
            case 401:
                message = translate("ERREUR_401")
                type = 'WARNING'
                break
            case 404:
                message = translate("ERREUR_404")
                break
            case 429:
                message = translate("ERREUR_429")
                break
            case 500:
                message = translate("ERREUR_500")
                break
        }

        // dispatchMessage(type, message, null, store.dispatch, autoClose)
    }

}
