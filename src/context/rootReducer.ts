import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./features/authorize/authorizeSlice";
import cartReducer from "./features/cart/cartSlice";
import categoryReducer from "./features/categories/categoriesSlice";
import visibleReducer from "./features/visible/visibleSlice";
import currencyReducer from "./features/currency/currencySlice";
import { productsApi } from "./services/productsApi";

export const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
    category: categoryReducer,
    visible: visibleReducer,
    currency: currencyReducer,
    [productsApi.reducerPath]: productsApi.reducer
})

export type RootState = ReturnType<typeof rootReducer>