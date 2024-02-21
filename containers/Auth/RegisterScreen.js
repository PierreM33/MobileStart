import React, {useEffect, useRef, useState} from 'react';
import {
    View,
    KeyboardAvoidingView, Platform, Text, StatusBar, ScrollView, Dimensions, Keyboard, TouchableOpacity
} from 'react-native';

import {connect} from "react-redux";
import {MainStyle, NameAppColor} from "../../styles/MainStyle";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {LoginAndRegisterStyle} from "../../styles/Login/LoginAndRegisterStyle";
import * as Animatable from 'react-native-animatable';
import {translate} from "../../utilities/translation";
import AppInput from "../../components/Buttons/AppInput";
import AppButton from "../../components/Buttons/AppButton";
import BackButton from "../../components/Buttons/BackButton";
import NameAppScrollView from "../../components/NameAppScrollView";


const RegisterScreen = ({ navigation, dispatch }) => {

    const [error, setError] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [secondPassword, setSecondPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [messageError, setMessageError] = useState(null)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isSecondPasswordVisible, setIsSecondPasswordVisible] = useState(false)


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

    const togglePasswordVisibility = (state) => {
        if ("first" === state) {
            setIsPasswordVisible(!isPasswordVisible)
        } else {
            setIsSecondPasswordVisible(!isSecondPasswordVisible)
        }
    }

    return (
        <NameAppScrollView>
            <StatusBar barStyle={"dark-content"} animated={true} translucent={true}  backgroundColor={"transparent"}/>
            <View style={[LoginAndRegisterStyle.inner, {height: Dimensions.get('window').height + (Platform.OS === 'ios' ? 0 : 0)}]} >
                <View style={{position: "absolute", top: 75, left: 15}}>
                    <BackButton onPress={onPressBack}/>
                </View>
                <View style={LoginAndRegisterStyle.containerInput}>
                    <View style={{alignSelf: "center"}}>
                        <Text style={MainStyle.H1}>Inscription</Text>
                    </View>
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
                        togglePasswordVisibility={ () => {togglePasswordVisibility("first")}}
                        inputProps={{
                            secureTextEntry: !isPasswordVisible
                        }}
                    />
                    <AppInput
                        placeholder={"Répétez le mot de passe"}
                        containerStyle={{marginTop: 8}}
                        text={secondPassword}
                        setText={setSecondPassword}
                        error={error}
                        viewPassword={true}
                        isPasswordVisible={isSecondPasswordVisible}
                        togglePasswordVisibility={ () => {togglePasswordVisibility("second")}}
                        inputProps={{
                            secureTextEntry: !isSecondPasswordVisible
                        }}
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
        </NameAppScrollView>
    )


};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(null, mapDispatchToProps)(RegisterScreen);


