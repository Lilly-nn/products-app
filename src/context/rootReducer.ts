import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import userReducer from "./features/authorize/authorizeSlice";
import categoryReducer from "./features/categories/categoriesSlice";

export const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
    category: categoryReducer
})

export type RootState = ReturnType<typeof rootReducer>