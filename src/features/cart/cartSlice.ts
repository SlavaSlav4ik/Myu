// src/features/cart/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types';

export type DeliveryMode = 'delivery' | 'pickup';

interface CartItem extends Product {
    quantity: number;
}

interface CartState {
    items: CartItem[];
    deliveryMode: DeliveryMode;
}

const initialState: CartState = {
    items: [],
    deliveryMode: 'pickup',  // по умолчанию самовывоз
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Корзина
        addToCart(state, action: PayloadAction<Product>) {
            const existing = state.items.find(i => i.id === action.payload.id);
            if (existing) existing.quantity++;
            else state.items.push({ ...action.payload, quantity: 1 });
        },
        removeFromCart(state, action: PayloadAction<number>) {
            state.items = state.items.filter(i => i.id !== action.payload);
        },
        increaseQuantity(state, action: PayloadAction<number>) {
            const item = state.items.find(i => i.id === action.payload);
            if (item) item.quantity++;
        },
        decreaseQuantity(state, action: PayloadAction<number>) {
            const item = state.items.find(i => i.id === action.payload);
            if (item) {
                if (item.quantity > 1) item.quantity--;
                else state.items = state.items.filter(i => i.id !== action.payload);
            }
        },
        clearCart(state) {
            state.items = [];
        },

        // Режим доставки/самовывоза
        setMode(state, action: PayloadAction<DeliveryMode>) {
            state.deliveryMode = action.payload;
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    setMode,             // <-- экшен для переключения режима
} = cartSlice.actions;

export default cartSlice.reducer;
