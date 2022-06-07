import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        loginCart: (state, action) => {
            state.products = action.payload.products
            state.quantity = action.payload.products.length
            state.total = action.payload.products.reduce(
                                (sum, currentValue) => sum + currentValue.quantity*currentValue.price,0)
        },

        addProduct: (state, action) => {
            const product = action.payload
            const index = state.products.findIndex(p => p.productId === product._id && p.size === product.size)
            if(index !== -1) {
                state.products[index].quantity += product.quantity
                state.total += product.price * product.quantity
            } else {
                state.quantity += 1
                state.products.push({
                    productId: product._id,
                    quantity: product.quantity,
                    size: product.size,
                    price: product.price
                })
                state.total += product.price * product.quantity
            }
        },

        updateQuantity:(state,action) => {
            const product = action.payload
            const index = state.products.findIndex(p => p.productId === product.productId && p.size === product.size)
            if(product.type == "desc") {
                state.products[index].quantity -= 1
                state.total -= state.products[index].price
            }
            else {
                state.products[index].quantity += 1
                state.total += state.products[index].price
            }
        },
        deleteProduct:(state, action) => {
            const product = action.payload
            state.products = state.products.filter(p => p.productId !== product._id && p.size !== product.size)
            state.total -= product.price * product.quantity
            state.quantity -= 1
        },
        clear:(state) => {
            state.products = []
            state.quantity = 0
            state.total = 0
        }
    },
});

export const { addProduct, loginCart, updateQuantity, deleteProduct, clear } = cartSlice.actions;
export default cartSlice.reducer;