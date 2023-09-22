import { createSlice } from "@reduxjs/toolkit";

type visibleState = {
    categoriesVisible: boolean;
}

const initialState: visibleState = {
    categoriesVisible: true
}

const visibleSlice = createSlice({
    name: "authorized",
    initialState,
    reducers: {
        setVisible: (state) => {
            state.categoriesVisible = !state.categoriesVisible;
        },

    }
})

export const { setVisible } = visibleSlice.actions;
export default visibleSlice.reducer;