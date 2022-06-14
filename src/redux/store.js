import {midd,  configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import userSlice from "./userSlice";

export const store = configureStore({
    reducer: {
        users: userSlice,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    },
});
