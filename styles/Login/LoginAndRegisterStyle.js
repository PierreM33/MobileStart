import {Platform, StyleSheet} from "react-native";
import DeviceInfo from "react-native-device-info";
import {NameAppColor} from "../MainStyle";


const LoginAndRegisterStyle = StyleSheet.create({

    inner: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 0,
        paddingBottom: DeviceInfo.hasNotch() ? 50 : 20
    },
    containerInput: {
        marginTop: 32,
        width: "100%",
        alignItems: "center",
        justifyContent: 'center'
    }
});

export {LoginAndRegisterStyle};
