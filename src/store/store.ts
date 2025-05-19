// Исправь на этом файле:

import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import categoriesReducer from '../features/products/categoriesSlice';
import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer,
        cart: cartReducer,
    },
});

// 👇 Правильная сигнатура RootState:
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
