import React, {useEffect, useRef, useState} from 'react';
import {
    View,
    KeyboardAvoidingView,Platform
} from 'react-native';

import {connect} from "react-redux";
import BackButton from "../../components/Buttons/BackButton";
import AppInput from "../../components/Buttons/AppInput";
import AppButton from "../../components/Buttons/AppButton";
import AxiosInstance from "../../api/AxiosInstance";



const AuthScreen = ({ navigation, dispatch }) => {

    const [error, setError] = useState(false)
    const [email, setEmail] = useState("pierre@yami.fr")
    const [password, setPassword] = useState("pierre")

    const onPressBack = () => {
        navigation.goBack()
    }

    const onPressLogin = async () => {
        if (email === "" || password === "") {
            setError(true)
        } else {
            setError(false)
            const user = {email: email, password: password};
            const token = 'HGDSHJKSHDJKSD';

            // Dispatch des actions pour mettre à jour le Redux store
            dispatch({type: 'SET_USER', data: user});
            dispatch({type: 'SET_TOKEN', data: token});
            dispatch({type: 'SET_REFRESH_TOKEN', data: token});
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex: 1}}
        >

            <View style={{backgroundColor: "white", flex: 1}}>
                <View style={{position: "absolute", top: 75, left: 15}}>
                    <BackButton onPress={onPressBack}/>
                </View>
                <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    <AppInput
                        placeholder={"Email"}
                        containerStyle={{marginTop: 8}}
                        text={email}
                        setText={setEmail}
                        error={error}
                    />
                    <AppInput
                        placeholder={"Mot de passe"}
                        containerStyle={{marginTop: 8}}
                        text={password}
                        setText={setPassword}
                        error={error}
                    />
                    <AppButton
                        title={"Connexion"}
                        translateActive={false}
                        type={2}
                        onPress={onPressLogin}
                        containerStyle={{marginTop: 20}}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    )


};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(null, mapDispatchToProps)(AuthScreen);


