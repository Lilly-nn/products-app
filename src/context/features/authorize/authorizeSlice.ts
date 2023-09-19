import { createSlice } from "@reduxjs/toolkit";

type authorizeState = {
    isAuthorized: boolean;
}

const initialState: authorizeState = {
    isAuthorized: false
}

const authorizeSlice = createSlice({
    name: "authorized",
    initialState,
    reducers: {
        signIn: (state) => {
            state.isAuthorized = true;
        },
        signOut: (state) => {
            state.isAuthorized = false;
        }
    }
})

export const { signIn, signOut } = authorizeSlice.actions;
export default authorizeSlice.reducer;