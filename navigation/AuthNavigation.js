import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from "../containers/Welcome/WelcomeScreen";
import TutorialScreen from "../containers/Welcome/TutorialScreen";
import AuthScreen from "../containers/Auth/AuthScreen";


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
                    name="Auth"
                    component={AuthScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Tutorial"
                    component={TutorialScreen}
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