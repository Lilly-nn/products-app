import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./features/authorize/authorizeSlice";
import cartReducer from "./features/cart/cartSlice";
import categoryReducer from "./features/categories/categoriesSlice";
import visibleReducer from "./features/visible/visibleSlice";
import { productsApi } from "./services/productsApi";
import { persistReducer } from 'redux-persist';
import { storage } from "./storage.config.js";

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const rootReducer = combineReducers({
    cart: persistedReducer,
    user: userReducer,
    category: categoryReducer,
    visible: visibleReducer,
    [productsApi.reducerPath]: productsApi.reducer
})

export type RootState = ReturnType<typeof rootReducer>