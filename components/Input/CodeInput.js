import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from "prop-types";
import NameAppInput from "./NameAppInput";


const CodeInput = ({ code, onCodeChange, onSubmit = null, loading }) => {
    const [decomposedCode, setDecomposedCode] = useState([null, null, null, null, null, null]);
    const [smsCode, setSmsCode] = useState(null);

    const refs = useRef([])

    useEffect(() => {
        if (smsCode && smsCode.length === 6) {
            const codeUpdate = []
            codeUpdate[0] = smsCode[0]
            codeUpdate[1] = smsCode[1]
            codeUpdate[2] = smsCode[2]
            codeUpdate[3] = smsCode[3]
            codeUpdate[4] = smsCode[4]
            codeUpdate[5] = smsCode[5]
            setDecomposedCode(codeUpdate)
            const codeJoin = codeUpdate.join('')
            onCodeChange(codeJoin)
            if (onSubmit) {
                onSubmit(codeJoin)
            }

        }
    }, [smsCode])

    useEffect(() => {
        if (code) {
            const arr = []
            for (let i = 0; i < 6; i++) {
                if (code[i]) {
                    arr.push(code[i])
                }
                else {
                    arr.push(null)
                }
            }
            setDecomposedCode(arr)
        }
    }, [code])

    const onchange = (value, index) => {
        const codeUpdate = [...decomposedCode];
        setSmsCode(value)
        if (value.length <= 1) {
            codeUpdate[index] = value;
            setDecomposedCode(codeUpdate);
            const codeJoin = codeUpdate.join('')
            onCodeChange(codeJoin);

            if (codeJoin && codeJoin.length === 6 && onSubmit) {
                onSubmit(codeJoin)
            }
            else if (value) {
                const nextEmptyIndex = findNextEmptyIndex(codeUpdate, index + 1);
                if (refs.current && refs.current[nextEmptyIndex]) {
                    refs.current[nextEmptyIndex].focus();
                }
            }
        }
    }

    const onDelete = ( nativeEvent, index ) => {
        if (nativeEvent.key === 'Backspace') {
            if (index - 1 >= 0 && refs.current && refs.current[index - 1]) {
                refs.current[index - 1].focus();
            }
        }
    }

    const findNextEmptyIndex = (code, startIndex) => {
        if (startIndex >= code.length) {
            return startIndex;
        }
        if (!code[startIndex]) {
            return startIndex;
        }
        return findNextEmptyIndex(code, startIndex + 1);
    };

    return (
        <View style={{...styles.container}}>
            {decomposedCode.map((value, index) => {
                return (
                    <NameAppInput
                        disabled={loading}
                        key={index}
                        value={value}
                        style={{flex: 1, marginHorizontal: 8}}
                        inputProps={{
                            ref: (ref) => refs.current[index] = ref,
                            style: {
                                marginLeft: 0,
                                textAlign: 'center'
                            },
                            keyboardType: 'numeric',
                            maxLength: index === 0 ? 6 : 1,
                            onKeyPress: ({ nativeEvent }) => onDelete(nativeEvent, index)
                        }}
                        onTextChange={(value) => onchange(value, index)}
                    />
                )
            })}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        width: '90%',
        alignSelf: 'center',
        marginTop: 45,
    },

});

CodeInput.propTypes = {
    onCodeChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func
};

export default CodeInput;


