import { Text, View } from "react-native";
import React from "react";
import { connect } from "react-redux";
import {MainStyle} from "../../styles/MainStyle";
import AppButton from "../../components/Buttons/AppButton";

const SecondScreen = ({ Logger, dispatch }) => {

    const onPressDisconnect = () => {
        dispatch({ type: 'REMOVE_USER' });
        dispatch({ type: 'REMOVE_TOKEN' });
        dispatch({ type: 'REMOVE_REFRESH_TOKEN' });
    }


    return (
        <View style={{ flex: 1, backgroundColor: "#ffffff", alignItems: "center", justifyContent: "center" }}>
            <AppButton
                title={"Déconnexion"}
                translateActive={false}
                type={2}
                onPress={onPressDisconnect}
                containerStyle={{ marginTop: 20 }}
            />
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        Logger: state.Logger,
    };
}

export default connect(mapStateToProps)(SecondScreen);
