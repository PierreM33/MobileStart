import React, {useState, useEffect, useRef} from 'react';
import { connect } from 'react-redux';
import { useFonts } from 'expo-font';
import {Text, StatusBar, TouchableOpacity, View} from "react-native";
import AuthNavigation from "./navigation/AuthNavigation";
import HomeNavigation from "./navigation/HomeNavigation";


function NameApp(props) {
    const [mounted, setMounted] = useState(false);
    const [logged, setLogged] = useState(false);

    const authNav = useRef(null)
    const navNameApp = useRef(null)

    useEffect(() => {
        setMounted(true)
    }, []);

    useEffect( () => {
        const checkAuthentication = async () => {
            if (mounted) {
                await isLogged();
            }
        };

        checkAuthentication();
    }, [props, mounted])


    let fontsLoaded = useFonts({
        'Sequel': require('./assets/fonts/Sequel_Sans_Roman_Disp.otf'),
    });

    const isLogged = () => {
        if (props.Logger.user && props.Logger.token && props.Logger.refreshToken) {
            setLogged(true)
        } else {
            setLogged(false)
        }
    }

    if (!fontsLoaded || !mounted) {
        return null
    }
    else if (logged) {
        return (
            <View style={{flex: 1}}>
                <StatusBar barStyle={"dark-content"} translucent={true} backgroundColor={"transparent"}/>
                <HomeNavigation initialRoute='Home' nav={navNameApp} Logger={props.Logger.user}/>
            </View>
        )
    }
    else if (!logged) {
        return (
            <View style={{flex: 1}}>
                <StatusBar barStyle={"dark-content"} translucent={true} backgroundColor={"transparent"}/>
                <AuthNavigation initialRoute='Welcome' nav={authNav}/>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NameApp);
