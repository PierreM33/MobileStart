import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from "prop-types";
import NameAppInput from "./NameAppInput";


const CodeInput = ({ code, onCodeChange, onSubmit, loading }) => {

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
        if (smsCode && smsCode.length === 6) {
            const codeUpdate = []
            codeUpdate[0] = smsCode[0]
            codeUpdate[1] = smsCode[1]
            codeUpdate[2] = smsCode[2]
            codeUpdate[3] = smsCode[3]
            codeUpdate[4] = smsCode[4]
            codeUpdate[5] = smsCode[5]
            setThisCode(codeUpdate)
            const codeJoin = codeUpdate.join('')
            if (onSubmit) {
                onSubmit(codeJoin)
            }
        }
    }, [smsCode])

    const onchange = (value, index) => {
        const codeUpdate = [...thisCode];
        setSmsCode(value)
        if (value.length <= 1) {
            codeUpdate[index] = value;
            setThisCode(codeUpdate);
            const codeJoin = codeUpdate.join('')

            if (codeJoin && codeJoin.length === 6 && onSubmit) {
                onSubmit(codeJoin)
            } else if (value) {
                const nextEmptyIndex = findNextEmptyIndex(codeUpdate, index + 1);
                if (refs.current && refs.current[nextEmptyIndex]) {
                    refs.current[nextEmptyIndex].focus();
                }
            }
        }
    }


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
                            autoFocus: i === 0,
                            keyboardType: 'numeric',
                            maxLength: getLength(i),
                            onKeyPress: ({ nativeEvent }) => onDelete(nativeEvent, i)
                        }}
                        onTextChange={(value) => onchange(value, i)}
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

CodeInput.propTypes = {
    onCodeChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func
};

export default CodeInput;


