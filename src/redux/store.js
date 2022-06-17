import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import thunk from "redux-thunk";
import usersReducer from "./userSlice";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        middleware: [thunk, logger],
    },
});
