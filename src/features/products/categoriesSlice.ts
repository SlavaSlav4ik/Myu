import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Category } from '../../types';
import {fetchCategoriesAPI} from "./productsAPI";

export const loadCategories = createAsyncThunk(
    'categories/load',
    async () => await fetchCategoriesAPI()
);

interface State {
    items: Category[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: State = {
    items: [],
    status: 'idle',
    error: null,
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadCategories.pending, state => { state.status = 'loading'; })
            .addCase(loadCategories.fulfilled, (state, action) => {
                state.status = 'succeeded'; state.items = action.payload;
            })
            .addCase(loadCategories.rejected, (state, action) => {
                state.status = 'failed'; state.error = action.error.message || null;
            });
    },
});

export default categoriesSlice.reducer;