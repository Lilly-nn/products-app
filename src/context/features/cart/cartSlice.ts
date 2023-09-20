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
    reducers: {
        // addToCart: (state: CartType, action: ActionPayloadT) => {
        //     const exists = state.cartItems.find(product => product.id === action.payload.id)
        //     if (!exists) {
        //         state.cartItems = [...state.cartItems, action.payload];
        //     }
        //     state.totalItemsAmount = state.cartItems.length;
        //     cartSlice.caseReducers.calculateTotalPrice(state);
        // },
        // addAmount: (state: CartType, action: { payload: string }) => {
        //     state.cartItems = state.cartItems.map(item => item.id !== action.payload
        //         ? item
        //         : {
        //             ...item,
        //             amount: item.amount + 1
        //         })
        //     cartSlice.caseReducers.calculateTotalPrice(state);
        // },
        // extractAmount: (state: CartType, action: PayloadAction<string>) => {
        //     state.cartItems = state.cartItems.map(item => item.id !== action.payload
        //         ? item
        //         : {
        //             ...item,
        //             amount: item.amount > 1 ? item.amount - 1 : 1
        //         })
        //     cartSlice.caseReducers.calculateTotalPrice(state);
        // },
        // removeFromCart: (state: CartType, action: PayloadAction<string>) => {
        //     state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        //     state.totalItemsAmount = state.cartItems.length;
        //     cartSlice.caseReducers.calculateTotalPrice(state);
        // },
        // calculateTotalPrice: (state: CartType) => {
        //     const itemsTotal: number[] = [];
        //     state.cartItems.forEach(item => itemsTotal.push(item.price * item.amount));
        //     state.totalPrice = itemsTotal.length > 0 ? itemsTotal.reduce((total, amount) => total + amount) : 0;
        // }
    }
})

export default cartSlice.reducer;