import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [1],
        isFetching:false,
        error:false,
        success: false,
    },
    reducers: {
        // CLEAR 
        clear: (state) => {
            state.success = false
            state.error = false
        },

        //GET ALL
        getProductStart:(state) => {
            state.isFetching = true
        },
        getProductSuccess:(state, action) => {
            state.isFetching = false
            state.products = action.payload
        },
        getProductFailure:(state) => {
            state.isFetching = false
            state.error = true
        },

        //CREATE
        createProductStart:(state) => {
            state.isFetching = true
            state.success = false
            state.error = false
        },
        createProductSuccess:(state, action) => {
            state.isFetching = false
            state.success = action.payload
        },
        createProductFailure:(state, action) => {
            state.isFetching = false
            state.error = action.payload
        },

        //EDIT
        editProductStart:(state) => {
            state.isFetching = true
            state.success = false
            state.error = false
        },
        editProductSuccess:(state, action) => {
            state.isFetching = false
            state.success = action.payload
        },
        editProductFailure:(state, action) => {
            state.isFetching = false
            state.error = action.payload
        },

        // DELETE
        deleteProductStart:(state) => {
            state.isFetching = true
            state.success = false
            state.error = false
        },
        deleteProductSuccess:(state, action) => {
            state.isFetching = false
            state.success = action.payload
        },
        deleteProductFailure:(state, action) => {
            state.isFetching = false
            state.error = action.payload
        }
    },
});

export const { 
    getProductStart, getProductSuccess, getProductFailure, 
    createProductStart, createProductSuccess, createProductFailure,
    editProductStart, editProductSuccess, editProductFailure,
    deleteProductStart, deleteProductSuccess, deleteProductFailure,
    clear,
} = productSlice.actions;
export default productSlice.reducer;