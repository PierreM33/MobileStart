import React, {useEffect, useRef, useState} from 'react';
import {
    Keyboard,
    Platform,
} from 'react-native';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {NameAppColor} from "../styles/MainStyle";


const NameAppScrollView = ({ scrollViewProps, children }) => {

    const [keyboard, setKeyboard] = useState(false)
    const scrollRef = useRef(null)
    const [scroll, setScroll] = useState(false);

    useEffect(() => {

        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', _keyboardDidShow.bind(this));
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', _keyboardDidHide.bind(this));

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        }
    }, [])


    const _keyboardDidShow = (e) => {
        setScroll(true)
    }

    const _keyboardDidHide = () => {
        Keyboard.dismiss();
        setScroll(false)
    }


    return (
        <KeyboardAwareScrollView
            bounces={false}
            enableOnAndroid={true}
            scrollEnabled={scroll}
            enableAutomaticScroll={true}
            extraScrollHeight={Platform.OS === 'ios' ? 0 : 25}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{
                flex: 1,
                backgroundColor: NameAppColor.White,
                width: '100%',
                alignSelf: 'center',
            }}
            {...scrollViewProps}
        >
            {children}
        </KeyboardAwareScrollView>
    )
}


export default NameAppScrollView;




