import React, {useEffect, useRef, useState} from 'react';
import {
    View,
    KeyboardAvoidingView, Platform, Text, Keyboard, StatusBar, Dimensions, TouchableOpacity
} from 'react-native';

import {connect} from "react-redux";
import BackButton from "../../components/Buttons/BackButton";
import AppInput from "../../components/Buttons/AppInput";
import AppButton from "../../components/Buttons/AppButton";
import {MainStyle, NameAppColor} from "../../styles/MainStyle";
import {LoginAndRegisterStyle} from "../../styles/Login/LoginAndRegisterStyle";
import NameAppScrollView from "../../components/NameAppScrollView";



const LoginScreen = ({ navigation, dispatch }) => {

    const [error, setError] = useState(false)
    const [email, setEmail] = useState("test")
    const [password, setPassword] = useState("test")
    const [loading, setLoading] = useState(false)
    const [messageError, setMessageError] = useState(null)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    useEffect( () => {
        setTimeout( () => {
            setLoading(false)
            setError(false)
        }, 2000)
    }, [error])

    const onPressBack = () => {
        navigation.goBack()
    }

    const onPressLogin = async () => {
        if (email === "" || password === "") {
            setError(true)
        } else {
            setError(false)
            setLoading(true)
            const data = {
                username: email,
                password: password
            }
            // const resultLogin = await login(setLoading, setMessageError, data, setError) //TEMPORAIREMENT COMMENTE CAR PAS D'API ACTIF

            if (data.password === "test" && data.username === "test") {
                // if (resultLogin.user && resultLogin.token && resultLogin.refresh_token) {
                    // REDIRECTION
                // }
                setTimeout( () => {
                    setLoading(false)
                }, 2000)
                setTimeout( () => {
                    const user = {email: email, password: password, token: 'HGDSHJKSH'};
                    dispatch({type: 'SET_USER', data: user});
                    dispatch({type: 'SET_TOKEN', data: user.token});
                    dispatch({type: 'SET_REFRESH_TOKEN', data: user.token});
                }, 1000)



            } else {
                setLoading(false)
                setError(true)
                setMessageError("Le mot de passe ou l'adresse email n'est pas valide")
            }
        }

    }

    const disabled = () => {
        return email === "" || password === "" || loading || error || password.length < 4
    }

    const onPressCode = () => {
        navigation.navigate("Code")
    }

    const onForgotPassword = () => {
        //
    }

    return (
        <NameAppScrollView>
            <StatusBar barStyle={"dark-content"} animated={true} translucent={true}  backgroundColor={"transparent"}/>
            <View style={[LoginAndRegisterStyle.inner, {height: Dimensions.get('window').height + (Platform.OS === 'ios' ? 0 : 0)}]} >
                <View style={{position: "absolute", top: 75, left: 15}}>
                    <BackButton onPress={onPressBack}/>
                </View>
                <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    <View style={{alignSelf: "center"}}>
                        <Text style={MainStyle.H1}>Connexion</Text>
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
                        togglePasswordVisibility={ () => {setIsPasswordVisible(!isPasswordVisible)}}
                        inputProps={{
                            secureTextEntry: !isPasswordVisible
                        }}
                    />
                    <AppButton
                        title={"Connexion"}
                        translateActive={false}
                        type={2}
                        onPress={onPressLogin}
                        containerStyle={{marginTop: 20}}
                        disabled={disabled()}
                        loading={loading}
                    />
                    {error && <View style={{marginTop: 15}}>
                        <Text style={{color: "red"}}>{messageError}</Text>
                    </View>}
                    {/*<ContainerOAuth*/}
                    {/*    onPressApple={loginWithApple}*/}
                    {/*    onPressFacebook={loginWithFacebook}*/}
                    {/*    onPressGoogle={loginWithGoogle}*/}
                    {/*/>*/}
                    <TouchableOpacity style={{alignSelf: "center", marginVertical: 20}} onPress={onForgotPassword} disabled={loading} >
                        <Text style={MainStyle.H5}>Mot de passe oublié</Text>
                    </TouchableOpacity>
                    <AppButton
                        title={"Sms Code"}
                        translateActive={false}
                        type={2}
                        onPress={onPressCode}
                        containerStyle={{marginTop: 20}}
                        disabled={loading}
                    />
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

export default connect(null, mapDispatchToProps)(LoginScreen);


