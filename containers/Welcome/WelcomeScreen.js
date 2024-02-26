import React, {useEffect, useState} from 'react';
import {Image, View, Text, Linking, TextInput} from 'react-native';
import {WelcomeStyle} from "../../styles/WelcomeStyle";
import AppButton from "../../components/Buttons/AppButton";


const WelcomeScreen = ({ navigation }) => {

    const onPressLogin = () => {
        navigation.navigate("Login")
    }
    const onPressRegister = () => {
        navigation.navigate("Register")
    }

    return (
        <View style={WelcomeStyle.container}>
            <Text style={WelcomeStyle.text}>Bienvenue sur le pack de démarrage de l'application</Text>
            <AppButton
                title={"Login"}
                translateActive={false}
                type={2}
                onPress={onPressLogin}
                containerStyle={{marginTop: 20}}
            />
            <AppButton
                title={"Register"}
                translateActive={false}
                type={2}
                onPress={onPressRegister}
                containerStyle={{marginTop: 20}}
            />
        </View>
    )


};

export default WelcomeScreen;


