import { createSlice } from "@reduxjs/toolkit";

// type CartType = {
//     cartItem: string[];
//     totalItemsAmount: number;
//     totalPrice: number;
// }


const initialState = {
    cartItems: [],
    totalItemsAmount: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {}
})

export default cartSlice.reducer;