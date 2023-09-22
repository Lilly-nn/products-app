import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import userReducer from "./features/authorize/authorizeSlice";
import categoryReducer from "./features/categories/categoriesSlice";
import visibleReducer from "./features/visible/visibleSlice";


export const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
    category: categoryReducer,
    visible: visibleReducer
})

export type RootState = ReturnType<typeof rootReducer>