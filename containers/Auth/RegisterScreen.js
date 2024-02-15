import React, {useEffect, useRef, useState} from 'react';
import {
    View,
    KeyboardAvoidingView, Platform, Text
} from 'react-native';

import {connect} from "react-redux";
import BackButton from "../../components/Buttons/BackButton";
import AppInput from "../../components/Buttons/AppInput";
import AppButton from "../../components/Buttons/AppButton";
import AxiosInstance from "../../api/AxiosInstance";
import {login} from "../../api/Login";
import {setAllAuthData} from "../../redux/actions/authActions";
import ContainerOAuth from "../../components/Authentication/ContainerOAuth";
import {loginWithApple, loginWithFacebook, loginWithGoogle} from "../../utilities/loginGAF";



const RegisterScreen = ({ navigation, dispatch }) => {

    const [error, setError] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [secondPassword, setSecondPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [messageError, setMessageError] = useState(null)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)


    useEffect( () => {

    }, [error])

    useEffect( () => {
        if ((password !== secondPassword) && secondPassword.length > 0) {
            setError(true)
            setMessageError("Les mots de passe ne correspondent pas")
        }
        setTimeout( () => {
            if (password === secondPassword) {
                setError(false)
            }
        }, 250)
    }, [password, secondPassword])

    const onPressBack = () => {
        navigation.goBack()
    }

    const onPressRegister = async () => {

    }

    const disabled = () => {
        return email === "" || password === "" || secondPassword !== password || secondPassword === "" || loading || error || password.length < 4 || !/[A-Z]/.test(password);
    }

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex: 1}}
        >

            <View style={{backgroundColor: "white", flex: 1, justifyContent: "center", alignItems: "center"}}>
                <View style={{position: "absolute", top: 75, left: 15, zIndex: 2}}>
                    <BackButton onPress={onPressBack}/>
                </View>
                <View style={{backgroundColor: "orange"}}>
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
                        viewPassword={true}
                        isPasswordVisible={isPasswordVisible}
                        togglePasswordVisibility={togglePasswordVisibility}
                    />
                    <AppInput
                        placeholder={"Répétez le mot de passe"}
                        containerStyle={{marginTop: 8}}
                        text={secondPassword}
                        setText={setSecondPassword}
                        error={error}
                        viewPassword={true}
                        isPasswordVisible={isPasswordVisible}
                        togglePasswordVisibility={togglePasswordVisibility}
                    />
                    <AppButton
                        title={"S'inscrire"}
                        translateActive={false}
                        type={2}
                        onPress={onPressRegister}
                        containerStyle={{marginTop: 20}}
                        disabled={disabled()}
                        loading={loading}
                    />
                    {error && <View style={{marginTop: 15}}>
                        <Text style={{color: "red"}}>{messageError}</Text>
                    </View>}
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

export default connect(null, mapDispatchToProps)(RegisterScreen);


