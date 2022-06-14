import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

const initialState = []

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, payload) => {
            state.push(action.payload)
        }
    }
})

export const {addUser} = userSlice.actions
export const {usersReducer} = userSlice.reducer