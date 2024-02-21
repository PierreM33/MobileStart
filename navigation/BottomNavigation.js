import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeNavigation from "./HomeNavigation";
import {NameAppColor} from "../styles/MainStyle";
import Home from "../assets/icons/Home.svg";
import SecondNavigation from "./SecondNavigation";

const BottomTab = createBottomTabNavigator();


export default function BottomNavigation({ nav, initialRoute, Logger }) {

    const [tab, setTab] = useState("HomeTab");

    useEffect(() => {
        if (nav.current) {
            if (tab === 'HomeTab') {
                nav.current.navigate('Home')
            } else if (tab === 'SecondTab') {
                nav.current.navigate('Second')
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
                    tabBarActiveTintColor: NameAppColor.Orange10,
                    tabBarInactiveTintColor: NameAppColor.Orange10,
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
                                        color: focused ? NameAppColor.Orange50 : NameAppColor.Orange10,
                                        fontFamily: 'Satoshi Bold'
                                    }}
                                >
                                    Accueil
                                </Text>
                            )
                        },
                    }}

                />
                <BottomTab.Screen
                    name="SecondTab"
                    initialParams={{initialRoute: initialRoute}}
                    component={SecondNavigation}
                    options={{
                        tabBarLabel: ({focused}) => {
                            return (
                                <Text
                                    style={{
                                        marginBottom: 5,
                                        alignSelf: 'center',
                                        fontSize: 11,
                                        color: focused ? NameAppColor.Orange50 : NameAppColor.Orange10,
                                        fontFamily: 'Satoshi Bold'
                                    }}
                                >
                                    Disconnet
                                </Text>
                            )
                        },
                    }}

                />
            </BottomTab.Navigator>
        </NavigationContainer>
    );
}
