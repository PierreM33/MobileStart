import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import {translate} from "../../utilities/translation";

const AppButton = ({ translateActive = true , type, title, containerStyle = {}, onPress, disabled = false }) => {

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

    return (
        <TouchableOpacity onPress={onPress} style={{ ...styles.container, ...getButtonStyle(disabled ? 0 : type), ...containerStyle}} disabled={disabled}>
            <Text style={{
                ...styles.text,
                ...getColorText( disabled ? 0 : type),
            }}>
                {translateActive ? translate(title) : title}
            </Text>
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



/*


return (

    );



            <TouchableOpacity
            style={{ ...styles.containers, ...getButtonStyle(type), ...containerStyle}}
            onPress={onPress}
            disabled={disabled || loading}
            // activeOpacity={0.8}
        >
            {icon && iconPosition === 'BEFORE' && icon}
            <Text style={{...styles.text, ...MainStyle.T1, color: getColor(type), ...textStyle}}>
                {translateActive ? translate(title) : title}
            </Text>
            {icon && iconPosition === 'AFTER' && icon}
        </TouchableOpacity>

 */
