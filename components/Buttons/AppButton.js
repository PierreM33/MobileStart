import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {translate} from "../../utilities/translation";
import {NameAppColor} from "../../styles/MainStyle";
import Google from "../../assets/icons/Google.svg";
import Apple from "../../assets/icons/Apple.svg";
import Facebook from "../../assets/icons/Facebook.svg";

const AppButton = ({ type, title, icon = false, containerStyle = {}, textStyle= {}, onPress, disabled = false, loading, translateActive = false }) => {

    const getButtonStyle = (type) => {
        switch (type) {
            case 0:
                return { backgroundColor : "grey" }
            case 1:
                return { backgroundColor : "white" }
            case 2:
                return { backgroundColor : "black" }
            default:
                return { backgroundColor : "black" }
        }
    }
    const getColorText = (type) => {
        switch (type) {
            case 0:
                return { color : "white" }
            case 1:
                return { color : "black" }
            case 2:
                return { color : "white" }
            default:
                return { color : "white" }
        }
    }

    const getIcons = (icon) => {
        console.log("icon", icon)
        switch (icon) {
            case "apple":
                return <Apple width={20} height={20}/>
            case "google":
                return <Google width={20} height={20}/>
            case "facebook":
                return <Facebook width={20} height={20}/>
            default:
                return null
        }
    }

    return (
        <TouchableOpacity onPress={onPress} style={{ ...styles.container, ...getButtonStyle(disabled ? 0 : type), ...containerStyle}} disabled={disabled}>
            <View style={{flexDirection: "row", alignItems: 'center'}}>
                {!loading && icon && getIcons(icon)}
                {!loading && <Text style={{ ...styles.text, ...textStyle, ...getColorText( disabled ? 0 : type)}}>
                    {translateActive ? translate(title) : title}
                </Text>}
                {loading && <ActivityIndicator animating={true} color={NameAppColor.Black} size={"small"}/>}
            </View>
        </TouchableOpacity>
    )


};

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        alignSelf: "center",
        paddingHorizontal: 32,
        paddingVertical: 12,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        textAlign: "center",
        fontSize: 16,
    }
});

export default AppButton;
