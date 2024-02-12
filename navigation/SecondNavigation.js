import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "../containers/Home/HomeScreen";
import {getFocusedRouteNameFromRoute, NavigationContainer} from "@react-navigation/native";
import {getStyleNavBar, isBottomBar} from "../utilities/navigation";
import SecondScreen from "../containers/Second/SecondScreen";


const StackSecond = createNativeStackNavigator();

export default function SecondNavigation({ navigation, route, initialRoute, nav, Logger, dispatch }) {

    //DANS UTILITIES, SI JE VEUX RETIRER LA BOTTOM BAR DE LA NAVIGATION
    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (!routeName || !isBottomBar(routeName)) {
            navigation.setOptions({tabBarStyle: getStyleNavBar(true)});
        } else {
            navigation.setOptions({tabBarStyle: getStyleNavBar(false)});
        }
    }, [navigation, route, Logger]);

    return (
        <StackSecond.Navigator
            initialRouteName={initialRoute}
            screenOptions={{
                headerMode: 'screen',
            }}
            detachInactiveScreens={false}
        >
            <StackSecond.Screen
                name="Second"
                component={SecondScreen}
                options={{
                    headerShown: false
                }}
            />
        </StackSecond.Navigator>
    );
}
