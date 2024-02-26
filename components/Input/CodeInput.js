import React, {useEffect, useRef, useState} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import PropTypes from "prop-types";
import NameAppInput from "./NameAppInput";
import Clipboard from '@react-native-clipboard/clipboard';

const CodeInput = ({ onSubmit, loading, clipboard }) => {

    const [smsCode, setSmsCode] = useState(null);
    const [thisCode, setThisCode] = useState(Array(6).fill(''));
    const [inputs, setInputs] = useState([]);

    const refs = useRef([])
    const timeoutRef = useRef(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (clipboard) {
            Clipboard.getString()
                .then(content => {
                    if (content.trim() !== '') {
                        setThisCode(content.trim().split(''));
                        if (content && content.length === 6) {
                            setSmsCode(thisCode)
                        }
                    }
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération du presse-papiers : ', error);
                })
        }
    }, [clipboard]);

    useEffect(() => {
        onSubmit(smsCode)
    }, [smsCode])

    const onChange = (value, index) => {
        const updatedCode = [...thisCode];
        updatedCode[index] = value;
        setThisCode(updatedCode);
        const newCode = updatedCode.join('');
        setSmsCode(newCode);
        if (value && index < 5) {
            refs.current[index + 1].focus();
        }
    };

    const onDelete = (nativeEvent, index) => {
        if (nativeEvent.key === 'Backspace') {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            if (index - 1 >= 0 && refs.current && refs.current[index - 1]) {
                refs.current[index - 1].focus();

                const currentIndex = index - 1;
                timeoutRef.current = setTimeout(() => {
                    checkPosition(currentIndex);
                }, 500);
            }
        }
    };

    const checkPosition = (index) => {

        if (refs.current[index] !== '') { //CASE VIDE
            const currentInput = refs.current[index]; //VALUE CASE ACTUELLE
            if (currentInput === '') {
                refs.current[index].focus();
            } else {
                if (refs.current && refs.current[index + 1]) {
                    refs.current[index + 1].focus();
                }
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


    const getLength = (i) => {
        if (i === 0 && smsCode && smsCode.length === 6) {
            return 6;
        } else {
            return 1;
        }
    }

    useEffect(() => {
        if (thisCode) {
            const array = []
            for (let i = 0; i < 6; i++) {
                array.push(
                    <NameAppInput
                        disabled={false}
                        key={i}
                        value={thisCode[i]}
                        style={{flex: 1, marginHorizontal: 8}}
                        inputProps={{
                            ref: (ref) => refs.current[i] = ref,
                            style: {
                                marginLeft: 0,
                                textAlign: 'center',
                            },
                            // autoFocus: i === 0,
                            keyboardType: 'numeric',
                            maxLength: getLength(i),
                            onKeyPress: ({ nativeEvent }) => onDelete(nativeEvent, i),
                        }}
                        onTextChange={(value) => onChange(value, i)}
                        loading={loading}
                    />
                );
            }
            setInputs(array)
        }
    }, [thisCode])

    return (
        <View style={{...styles.container}}>
            {inputs}
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


export default CodeInput;


