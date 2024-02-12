import { Text, View } from "react-native";
import React from "react";
import { connect } from "react-redux";
import {MainStyle} from "../../styles/MainStyle";

const SecondScreen = ({ Logger, dispatch }) => {

    return (
        <View style={{ flex: 1, backgroundColor: "#ffffff", alignItems: "center", justifyContent: "center" }}>
            <Text style={{...MainStyle.H4}}>Ici une deuxieme page vide pour avoir deux onglets de navigation</Text>

        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        Logger: state.Logger,
    };
}

export default connect(mapStateToProps)(SecondScreen);
