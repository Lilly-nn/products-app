import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CategoriesState = {
    chosenCategory: string;
}

const initialState: CategoriesState = {
    chosenCategory: 'groceries'
}

const categoriesSlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        changeCategory: (state, action: PayloadAction<string>) => {
            state.chosenCategory = action.payload
        }
    }
})

export const { changeCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;