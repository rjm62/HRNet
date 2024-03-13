import { configureStore } from "@reduxjs/toolkit";
import { choiceReducer } from "./reducers";
import storage from 'redux-persist/lib/storage'
import {FLUSH, REHYDRATE, PAUSE,REGISTER, PERSIST, PURGE, persistReducer, persistStore} from "redux-persist"
import {combineReducers} from '@reduxjs/toolkit'

const persistConfig = {
        key: 'root',
        version:1,
        storage,
}

const reducer = combineReducers({
        choice: choiceReducer ,  
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
 reducer: persistedReducer,
middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE,REGISTER, PERSIST, PURGE],
        },
}),


//  devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)