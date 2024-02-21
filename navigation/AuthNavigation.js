import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from "../containers/Welcome/WelcomeScreen";
import LoginScreen from "../containers/Auth/LoginScreen";
import CodeScreen from "../containers/Auth/CodeScreen";
import RegisterScreen from "../containers/Auth/RegisterScreen";


const Stack = createNativeStackNavigator();

export default function AuthNavigation({ initialRoute, nav }) {

    return (
        <NavigationContainer ref={nav}>
            <Stack.Navigator
                initialRouteName={initialRoute}
                screenOptions={{
                    headerMode: 'screen',
                    animation: 'fade',
                    animationDuration: 200
                }}
            >
                <Stack.Screen
                    name="Welcome"
                    component={WelcomeScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Code"
                    component={CodeScreen}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
