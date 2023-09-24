import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { productsApi } from "./services/productsApi";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})

setupListeners(store.dispatch)