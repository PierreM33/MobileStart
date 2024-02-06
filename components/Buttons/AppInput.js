import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {MainStyle, NameAppColor} from "../../styles/MainStyle";
import EyeClose from "../../assets/icons/EyeClose.svg";
import Eye from "../../assets/icons/Eye.svg";

const AppInput = ({ placeholder, setText, text, label = null, containerStyle = {}, textStyle = {}, inputProps = {}, onSubmitEditing, messageError, error, togglePasswordVisibility, viewPassword = false, isPasswordVisible}) => {

    const onChange = (text) => {
        setText(text)
    }

    const thisError = !error ? NameAppColor.Black : NameAppColor.Red

    return (
        <View style={{alignSelf: 'center', ...containerStyle}}>
            {label !== null &&
                <Text style={{...MainStyle.H4, marginLeft: 25, marginBottom: 5}}>{label}</Text>}
            <View style={{ ...styles.container, borderColor: thisError}}>
                <TextInput
                    {...inputProps}
                    placeholder={placeholder ? placeholder : ""}
                    placeholderTextColor={NameAppColor.Grey50}
                    style={{...textStyle, ...MainStyle.H5, width: "90%"}}
                    color={thisError}
                    autoCapitalize={"none"}
                    onChangeText={(text) => onChange(text)}
                    value={text}
                    onSubmitEditing={onSubmitEditing}
                />
                {/*{viewPassword &&*/}
                {/*    <TouchableOpacity style={{right: 5, position: 'absolute', width: 40, height: 40, alignItems: "center", justifyContent: "center"}} onPress={togglePasswordVisibility}>*/}
                {/*        {!isPasswordVisible && <Eye width={20} height={20} stroke={thisError}/>}*/}
                {/*        {isPasswordVisible && <EyeClose width={20} height={20} stroke={thisError}/>}*/}
                {/*    </TouchableOpacity>}*/}
            </View>
            {messageError &&
                <Text style={{alignSelf: "center", color: "red", width: "90%", fontSize: 12, opacity: error ? 1:0}}>
                    {messageError}
                </Text>}
        </View>

    )


};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderRadius: 30,
        backgroundColor: "white",
        borderWidth: 1,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 25,
        paddingVertical: 16,
    },
});

export default AppInput;


