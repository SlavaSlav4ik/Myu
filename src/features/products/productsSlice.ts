import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductsAPI } from './productsAPI';
import { Product } from '../../types';

export const loadProducts = createAsyncThunk(
    'products/load',
    async () => await fetchProductsAPI()
);

interface State {
    items: Product[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: State = {
    items: [],
    status: 'idle',
    error: null,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadProducts.pending, state => { state.status = 'loading'; })
            .addCase(loadProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'; state.items = action.payload;
            })
            .addCase(loadProducts.rejected, (state, action) => {
                state.status = 'failed'; state.error = action.error.message || null;
            });
    },
});

export default productsSlice.reducer;