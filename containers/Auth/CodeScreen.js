import React, {useEffect, useRef, useState} from 'react';
import {
    View,
    KeyboardAvoidingView,Platform
} from 'react-native';

import {connect} from "react-redux";
import CodeInput from "../../components/Input/CodeInput";



const CodeScreen = ({ navigation, dispatch }) => {

    //REVOIR LE CODE QUI FAIT PLANTER L'APPLICATION
    // FAIRE LES API DE CONNEXION PLUTOT QUE REDUX

    return (
        <View>
            {/*<CodeInput />*/}
        </View>
    )


};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(null, mapDispatchToProps)(CodeScreen);


