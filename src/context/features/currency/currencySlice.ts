import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CurrencyState = {
    chosenCurrency: string;
}

const initialState: CurrencyState = {
    chosenCurrency: 'USD'
}

const currencySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        changeCurrency: (state, action: PayloadAction<string>) => {
            state.chosenCurrency = action.payload
        }
    }
})

export const { changeCurrency } = currencySlice.actions;
export default currencySlice.reducer;