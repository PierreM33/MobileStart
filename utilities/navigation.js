import {Dimensions} from "react-native";
import DeviceInfo from "react-native-device-info";
import {NameAppColor} from "../styles/MainStyle";

const ScreenBottomBarDisappear = [
    "NameScreenBottomBarOff",
]

export const isBottomBar = (routeName) => {
    if (ScreenBottomBarDisappear.includes(routeName)) {
        return false
    } else {
        return true
    }
}

export const getStyleNavBar = (hide = false) => {
    let style = {}
    if (hide) {
        style = {position: 'absolute', bottom: -300, display: 'none'}
    }
    else {
        style = {minHeight: Dimensions.get("window").height / 10, position: 'absolute', bottom: 0, paddingTop: 7, display: 'flex', backgroundColor: NameAppColor.White, borderTopWidth: 1, borderTopColor: NameAppColor.Orange10}
    }

    if (!DeviceInfo.hasNotch()) {
        style = {...style, minHeight: Dimensions.get("window").height / 11, paddingBottom: 12}
    }

    return style
}
