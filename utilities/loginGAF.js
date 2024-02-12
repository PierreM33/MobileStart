import {Linking, Platform} from "react-native";
import SafariView from "react-native-safari-view";

export const loginWithGoogle = async () => {
    const config = require("../config/config.json")
    const url = config["serverIp"] + '/api/login_google'

    if (Platform.OS === 'ios') {
        SafariView.isAvailable()
            .then(SafariView.show({
                url: url
            }))
            .catch(error => {
                // Fallback WebView code for iOS 8 and earlier
            });
    }
    else {
        await Linking.openURL(url)
    }
}

export const loginWithFacebook = async () => {
    const config = require("../config/config.json")
    const url = config["serverIp"] + '/api/login_facebook'

    if (Platform.OS === 'ios') {
        SafariView.isAvailable()
            .then(SafariView.show({
                url: url
            }))
            .catch(error => {
                // Fallback WebView code for iOS 8 and earlier
            });
    }
    else {
        await Linking.openURL(url)
    }
}

export const loginWithApple = async () => {
    const config = require("../config/config.json")
    const url = config["serverIp"] + '/api/login_apple'

    if (Platform.OS === 'ios') {
        SafariView.isAvailable()
            .then(SafariView.show({
                url: url
            }))
            .catch(error => {
                // Fallback WebView code for iOS 8 and earlier
            });
    }
    else {
        await Linking.openURL(url)
    }
}