import { createSlice } from "@reduxjs/toolkit";

type authorizeState = {
    isAuthorized: boolean;
    userId: string | null;
}

const initialState: authorizeState = {
    userId: null,
    isAuthorized: false,

}

const authorizeSlice = createSlice({
    name: "authorized",
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.isAuthorized = true;
            state.userId = action.payload;
        },
        signOut: (state) => {
            state.isAuthorized = false;
            state.userId = null;
        }
    }
})

export const { signIn, signOut } = authorizeSlice.actions;
export default authorizeSlice.reducer;