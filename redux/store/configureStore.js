import AsyncStorage from '@react-native-community/async-storage';
import {Logger} from "../reducers/authReducer";
import {nameAppState} from "../reducers/nameAppReducer";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {persistReducer, persistStore} from "redux-persist";

const persistConfig = {
    key: "NameApp",
    storage: AsyncStorage,
};

const rootReducer = combineReducers({
    Logger,
    nameAppState
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
})

export const persistor = persistStore(store);
