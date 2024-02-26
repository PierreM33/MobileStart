import React, {useEffect, useRef, useState} from 'react';
import {
    View,
    KeyboardAvoidingView, Platform, Text, TouchableOpacity, Clipboard, StatusBar, Dimensions
} from 'react-native';

import {connect} from "react-redux";
import CodeInput from "../../components/Input/CodeInput";
import AppButton from "../../components/Buttons/AppButton";
import BackButton from "../../components/Buttons/BackButton";
import {NameAppColor} from "../../styles/MainStyle";
import NameAppScrollView from "../../components/NameAppScrollView";
import {LoginAndRegisterStyle} from "../../styles/Login/LoginAndRegisterStyle";



const CodeScreen = ({ navigation, dispatch }) => {

    const [code, setCode] = useState("")
    const [countDown, setCountDown] = useState(60)
    const [resend, setResend] = useState(false)
    const [clipboard, setClipboard] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect( () => {
        if (countDown && resend) {
            setTimeout( () => {
                setCountDown(countDown - 1)
            }, 1000)
        }
    }, [countDown, resend])

    useEffect( () => {
        disabled()
    }, [code])

    const onPress = () => {
        console.log("Envoyer le code")
    }

    const onCodeChange = (code) => {
        setCode(code)
    }

    const disabled = () => {
        if (code) {
            const result = code.includes(' ')
            if (code.length === 6 && !result) {
                return false
            } else {
                return true
            }
        } else {
            return true
        }

    }


    const resendCode = () => {
        console.log("Resend code")
        setResend(true)
    }

    const onCopied = async () => {
        try {
            await Clipboard.setString("123456");
            console.log("Texte copié");
            setClipboard(true)
        } catch (error) {
            console.error("Erreur de copie", error);
        }
    }


    return (
        <NameAppScrollView>
            <StatusBar barStyle={"dark-content"} animated={true} translucent={true}  backgroundColor={"transparent"}/>
            <View style={{height: Dimensions.get('window').height, backgroundColor: "white", flex: 1, justifyContent: 'center'}} >
                <View style={{position: "absolute", top: 75, left: 15}}>
                    <BackButton onPress={ () => {navigation.goBack()}}/>
                </View>
                <CodeInput onSubmit={ (state) => {onCodeChange(state)}} clipboard={clipboard} loading={loading} />
                <AppButton title={"Valider"} type={2} translateActive={false} onPress={onPress} disabled={disabled()}/>
                {code && code.length === 6 &&
                    <View style={{alignItems: "center", marginTop: 25}}><Text>Votre code = {code}</Text></View>}
                <TouchableOpacity style={{alignItems: "center", marginTop: 25, flexDirection: "row", display: "flex", justifyContent: "center"}} onPress={resendCode}>
                    <Text style={{color: NameAppColor.Black, textDecorationLine: 'underline', fontSize: 16}}>Renvoyer le code</Text>
                    <Text style={{color: NameAppColor.Black, fontSize: 16}}>{resend ? ( " (" + countDown + ")") : ""}</Text>
                </TouchableOpacity>
                <AppButton title={"Copier le code"} type={2} translateActive={false} onPress={onCopied} disabled={false} containerStyle={{marginTop: 15}}/>
            </View>
        </NameAppScrollView>
    )


};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(null, mapDispatchToProps)(CodeScreen);


