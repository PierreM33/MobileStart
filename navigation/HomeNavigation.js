import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "../containers/Home/HomeScreen";
import {getFocusedRouteNameFromRoute, NavigationContainer} from "@react-navigation/native";


const StackHome = createNativeStackNavigator();

export default function HomeNavigation({ navigation, route, initialRoute, nav, Logger, dispatch }) {

    return (
        <NavigationContainer ref={nav}>
            <StackHome.Navigator
                initialRouteName={initialRoute}
                screenOptions={{
                    headerMode: 'screen',
                }}
                detachInactiveScreens={false}
            >
                <StackHome.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false
                    }}
                />
            </StackHome.Navigator>
        </NavigationContainer>
    );
}
