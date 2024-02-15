import { StyleSheet, Text, View } from 'react-native';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {store, persistor} from "./redux/store/configureStore";
import NameApp from "./NameApp";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {useEffect, useState} from "react";
import SplashScreen from "./components/SplashScreen";

export default function App() {

    const [isSplashVisible, setIsSplashVisible] = useState(true)

    useEffect(() => {
        setIsSplashVisible(true)

        return () => {
            setIsSplashVisible(true)
        }
    }, []);


    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <GestureHandlerRootView style={{flex: 1}}>
                    <NameApp/>
                    {isSplashVisible &&
                        <SplashScreen
                            isVisible={isSplashVisible}
                            onClose={() => setIsSplashVisible(false)}
                        />
                    }
                </GestureHandlerRootView>
            </PersistGate>
        </Provider>
    );
}
