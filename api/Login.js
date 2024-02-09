import AxiosInstance from "./AxiosInstance";
import {manageAPIErrors} from "../utilities/error";
import {translate} from "../utilities/translation";


export const loginPhone = async (setLoading, phone, phoneCode, code, verificationId) => {
    setLoading(true)
    try {
        phone = phone.replace(/ /g, '')
        const body = {
            phone: phone,
            phoneCode: phoneCode,
            verifyCode: code,
            verificationId: verificationId
        }
        const refreshToken = await AxiosInstance().post('/api/login_phone', body)
        setLoading(false)

        return refreshToken

    } catch (e) {
        setLoading(false)
        manageAPIErrors(e)
    }
}


//TRANSLATE NE SONT PAS FAIT CAR ILS CHANGERONT EN FONCTION DE L'APP
export const login = async (setLoading, setMessageError, data, setError) => {
    setLoading(true)
    try {
        const body = {
            username: data.username,
            password: data.password
        }
        return await AxiosInstance().post('/api/login_check', body)

    } catch (e) {
        setError(true)
        if (e.response) {
            if (e.response.status === 401) {
                setMessageError(translate("Le mot de passe ou l'adresse email n'est pas valide"))
            } else if (e.response.status === 302) {
                setMessageError(translate("Cliquez ici pour renvoyer le mail de vérification"))
            } else if (e.response.status === 403) {
                setMessageError(translate("L'utilisateur est désactivé, contactez un administrateur."))
            }  else if (e.response.status === 500) {
                setMessageError(translate("Une erreur est survenue sur le serveur, merci de réessayer ultérieurement"))
            }
        }
        else {
            setMessageError(translate("Une erreur est survenue sur le serveur, merci de réessayer ultérieurement"))
        }
    }
    setLoading(false)
}
