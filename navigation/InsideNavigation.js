import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeNavigation from "./HomeNavigation";
import {NameAppColor} from "../styles/MainStyle";
import Home from "../assets/icons/Home.svg";

const BottomTab = createBottomTabNavigator();


export default function InsideNavigation({ nav, initialRoute, Logger }) {

    const [tab, setTab] = useState("HomeTab");

    useEffect(() => {
        if (nav.current) {
            if (tab === 'HomeTab') {
                nav.current.navigate('Home')
            }
        }
    }, [tab])


    return (
        <NavigationContainer ref={nav}>
            <BottomTab.Navigator
                initialRouteName="HomeTab"
                screenOptions={{
                    headerShown: false,
                    //unmountOnBlur: true,
                    tabBarActiveTintColor: NameAppColor.Purple50,
                    tabBarInactiveTintColor: NameAppColor.Purple50,
                }}
                screenListeners={{
                    focus: (route) => {
                        const r = route.target.split('-')[0]
                        setTab(r)
                    }
                }}
            >
                <BottomTab.Screen
                    name="HomeTab"
                    initialParams={{initialRoute: initialRoute}}
                    component={HomeNavigation}
                    options={{
                        tabBarLabel: ({focused}) => {
                            return (
                                <Text
                                    style={{
                                        marginBottom: 5,
                                        alignSelf: 'center',
                                        fontSize: 11,
                                        color: focused ? NameAppColor.Purple50 : NameAppColor.Grey20,
                                        fontFamily: 'Satoshi Bold'
                                    }}
                                >
                                    Accueil
                                </Text>
                            )
                        },
                    }}
                />
            </BottomTab.Navigator>
        </NavigationContainer>
    );
}
