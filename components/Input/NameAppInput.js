import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View, Text} from 'react-native';
import PropTypes from "prop-types";
import {ErrorColor, NameAppColor, MainStyle} from "../../styles/MainStyle";


const NameAppInput = ({ value, onTextChange, style = {}, loading, disabled, inputProps = {}, error = null, errorMessage = null, icon = null, onIconPress = null }) => {

    const [focused, setFocused] = useState(false);

    return (
        <View style={{...styles.container, ...style}}>
            <View style={{flexDirection: 'row'}}>
                <TextInput
                    {...inputProps}
                    selectionColor={NameAppColor.Black}
                    style={{
                        ...MainStyle.H3,
                        ...styles.input,
                        ...inputProps.style,
                    }}
                    placeholderTextColor={NameAppColor.Grey50}
                    editable={!disabled && !loading}
                    color={!error ? ((disabled || loading) ? NameAppColor.Disabled : NameAppColor.Grey90) : ErrorColor.Error1}
                    onChangeText={(text) => onTextChange(text)}
                    value={value}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
                {icon !== null &&
                <TouchableOpacity onPress={onIconPress} activeOpacity={0.8} style={{position: 'absolute', right: 8}}>
                    {icon}
                </TouchableOpacity>}
            </View>
            <View
                style={[{
                    ...styles.line, backgroundColor: focused ? NameAppColor.Black : NameAppColor.Grey50
                }, focused ? styles.shadowLine : {}]}
            />
            {errorMessage &&
                <Text style={{...MainStyle.errorMessage, marginTop: 4}}>{errorMessage}</Text>}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    input: {
        width: '100%',
        marginLeft: 15,
        color: NameAppColor.Grey90,
        marginBottom: 6
    },
    line: {
        height: 2,
        borderRadius: 100
    },
    shadowLine: {
        shadowColor: "#A47CF6",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity:  1,
        shadowRadius: 10,
        elevation: 0
    },
});

NameAppInput.propTypes = {
    value: PropTypes.string,
    onTextChange: PropTypes.func.isRequired,
    style: PropTypes.object,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    inputProps: PropTypes.object,
    error: PropTypes.bool,
    errorMessage: PropTypes.string
}

export default NameAppInput;


