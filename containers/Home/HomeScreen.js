import { Text, View } from "react-native";
import AppButton from "../../components/Buttons/AppButton";
import React from "react";
import { connect } from "react-redux";
import {MainStyle} from "../../styles/MainStyle";

const HomeScreen = ({ Logger }) => {

    return (
        <View style={{ flex: 1, backgroundColor: "#ffffff", alignItems: "center", justifyContent: "center" }}>
            <Text style={{...MainStyle.H4}}>Vous êtes connecté: {Logger.user.email}</Text>

        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        Logger: state.Logger,
    };
}

export default connect(mapStateToProps)(HomeScreen);
