import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import thunk from "redux-thunk";
import userSlice from "./userSlice";

export const store = configureStore({
    reducer: {
        users: userSlice,
        middleware: [thunk, logger],
    },
});
