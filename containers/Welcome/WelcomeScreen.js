import React, {useEffect, useState} from 'react';
import {Image, View, Text, Linking} from 'react-native';
import {WelcomeStyle} from "../../styles/WelcomeStyle";
import AppButton from "../../components/Buttons/AppButton";


const WelcomeScreen = ({ navigation }) => {

    const onPressDiscover = () => {
        navigation.navigate("Tutorial")
    }
    const onPressLogin = () => {
        navigation.navigate("Auth")
    }
    const onPressCode = () => {
        navigation.navigate("Code")
    }

    return (
        <View style={WelcomeStyle.container}>
            <Text style={WelcomeStyle.text}>Bienvenue sur le pack de démarrage</Text>
            <AppButton
                title={"Découvrir"}
                translateActive={false}
                type={2}
                onPress={onPressDiscover}
                containerStyle={{marginTop: 20}}
            />
            <AppButton
                title={"Login"}
                translateActive={false}
                type={2}
                onPress={onPressLogin}
                containerStyle={{marginTop: 20}}
            />
            <AppButton
                title={"Sms Code"}
                translateActive={false}
                type={2}
                onPress={onPressCode}
                containerStyle={{marginTop: 20}}
            />
        </View>
    )


};

export default WelcomeScreen;


