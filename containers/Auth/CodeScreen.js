import React, {useEffect, useRef, useState} from 'react';
import {
    View,
    KeyboardAvoidingView, Platform, Text, TouchableOpacity
} from 'react-native';

import {connect} from "react-redux";
import CodeInput from "../../components/Input/CodeInput";
import AppButton from "../../components/Buttons/AppButton";
import BackButton from "../../components/Buttons/BackButton";
import {NameAppColor} from "../../styles/MainStyle";



const CodeScreen = ({ navigation, dispatch }) => {

    const [code, setCode] = useState("")

    const onPress = () => {
        console.log("Envoyer le code")
    }

    const onCodeChange = (code) => {
        setCode(code)
    }

    const disabled = () => {
        return !(code && code.length === 6);
    }

    const resendCode = () => {
        console.log("Resend code")
    }

    return (
        <View style={{backgroundColor: "white", flex: 1, justifyContent: 'center'}}>
            <View style={{position: "absolute", top: 75, left: 15}}>
                <BackButton onPress={ () => {navigation.goBack()}}/>
            </View>
            <CodeInput onSubmit={ (state) => {onCodeChange(state)}} />
            <AppButton title={"Valider"} type={2} translateActive={false} onPress={onPress} disabled={disabled()}/>
            {code && code.length === 6 &&
                <View style={{alignItems: "center", marginTop: 25}}><Text>Votre code = {code}</Text></View>}
            <TouchableOpacity style={{alignItems: "center", marginTop: 25}} onPress={resendCode}>
                <Text style={{color: NameAppColor.Purple50, textDecorationLine: 'underline', fontSize: 16}}>Renvoyer le code</Text>
            </TouchableOpacity>
        </View>
    )


};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(null, mapDispatchToProps)(CodeScreen);


