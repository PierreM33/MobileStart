import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const BackButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.closeContainer}>
            <Text>X</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    closeContainer: {
        borderRadius: 100,
        padding: 20,
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.25)",
    }
});

export default BackButton;
