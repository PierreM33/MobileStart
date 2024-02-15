import React, {useEffect, useRef, useState} from 'react';
import {Image, Animated, Dimensions, StyleSheet} from 'react-native';
import {NameAppColor} from "../styles/MainStyle";

const SplashScreen = ({ isVisible, onClose, duration = 2000 }) => {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (isVisible) {
            opacity.setValue(1);
            setTimeout(() => {
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 250,
                    useNativeDriver: true
                }).start(() => {
                    onClose();
                });
            }, duration)
        }
    }, [isVisible])

    return (
        <Animated.View
            style={{...styles.ViewContainer, position: 'absolute', top: 0, left: 0, opacity: opacity}}
        >
            <Image
                source={require('../assets/SplashImage.png')}
                style={{width: '100%'}}
                resizeMode={'contain'}
            />
        </Animated.View>
    )
};

const styles = StyleSheet.create({
    ViewContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: NameAppColor.Grey10
    }
});

export default SplashScreen;


