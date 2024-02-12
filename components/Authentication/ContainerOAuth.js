import React from "react";
import {Platform, View} from "react-native";
import AppButton from "../Buttons/AppButton";
import {NameAppColor} from "../../styles/MainStyle";


const ContainerOAuth = ({ onPressApple, onPressGoogle, onPressFacebook }) => {

    const type = 1

    const styleCont = {
        borderColor: NameAppColor.Black,
        borderWidth: 0.5,
        width: "90%",
        paddingHorizontal: 41,
        paddingVertical: 16
    }

    const styleText = {
        color: NameAppColor.Black,
        fontFamily: "Satoshi"
    }

    return (
        <View>
            {Platform.OS === "ios" &&
                <AppButton
                    title={"Continuer avec Apple"}
                    type={type}
                    containerStyle={{
                        ...styleCont
                    }}
                    textStyle={{...styleText, marginLeft: 10}}
                    icon={"apple"}
                    onPress={onPressApple}
                    translateActive={false}
                />}
            <AppButton
                title={"Continuer avec Google"}
                type={type}
                containerStyle={{
                    ...styleCont,
                    marginTop: 10
                }}
                textStyle={{...styleText, marginLeft: 10}}
                icon={"google"}
                onPress={onPressGoogle}
                translateActive={false}
            />
            <AppButton
                title={"Continuer avec Facebook"}
                type={type}
                containerStyle={{
                    ...styleCont,
                    marginTop: 10,
                    marginBottom: 10
                }}
                textStyle={{...styleText, marginLeft: 10}}
                icon={"facebook"}
                onPress={onPressFacebook}
                translateActive={false}
            />
        </View>
    )
}

export default ContainerOAuth;
