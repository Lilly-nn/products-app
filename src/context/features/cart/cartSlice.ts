import { currencyRates } from "@/info/currency/currencyRates";
import { CartType } from "@/types/cartType";
import { CartProductType, ProductType } from "@/types/productsType";
import { convertFromUSD } from "@/utils/convertCurrencies";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: CartType = {
    cartItems: [],
    totalItemsAmount: 0,
    totalPrice: 0,
    chosenCurrency: 'USD'
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state: CartType, action: PayloadAction<CartProductType>) => {
            const exists = state.cartItems.find(product => product.id === action.payload.id)
            if (!exists) {
                state.cartItems = [...state.cartItems, action.payload];
            }
            state.totalItemsAmount = state.cartItems.length;
            cartSlice.caseReducers.calculateTotalPrice(state);
        },
        addAmount: (state: CartType, action: PayloadAction<CartProductType>) => {
            state.cartItems = state.cartItems.map(item => item.id !== action.payload.id
                ? item
                : {
                    ...item,
                    chosenQuantity: item.chosenQuantity < item.stock ? item.chosenQuantity + 1 : item.stock
                })
            cartSlice.caseReducers.calculateTotalPrice(state);
        },
        extractAmount: (state: CartType, action: PayloadAction<CartProductType>) => {
            state.cartItems = state.cartItems.map(item => item.id !== action.payload.id
                ? item
                : {
                    ...item,
                    chosenQuantity: item.chosenQuantity > 1 ? item.chosenQuantity - 1 : 1
                })
            cartSlice.caseReducers.calculateTotalPrice(state);
        },
        removeFromCart: (state: CartType, action: PayloadAction<CartProductType>) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
            state.totalItemsAmount = state.cartItems.length;
            cartSlice.caseReducers.calculateTotalPrice(state);
        },
        calculateTotalPrice: (state: CartType) => {
            const index = state.chosenCurrency === "EUR" ? 0 : 1;
            const itemsTotal = state.cartItems.map(item => state.chosenCurrency == "USD" ? item.price * item.chosenQuantity : convertFromUSD((item.price * item.chosenQuantity), currencyRates[index][state.chosenCurrency]));
            state.totalPrice = itemsTotal.length > 0 ? itemsTotal.reduce((total, amount) => total + amount) : 0;
        },
        changeCurrency: (state, action: PayloadAction<string>) => {
            state.chosenCurrency = action.payload;
            cartSlice.caseReducers.calculateTotalPrice(state);
        }
    }
})

export const { addToCart, addAmount, extractAmount, removeFromCart, changeCurrency } = cartSlice.actions;
export default cartSlice.reducer;