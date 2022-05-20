import {  loginFailure, loginStart, loginSuccess, tokenExpires } from "./userRedux";
import { 
    getProductFailure, getProductStart, getProductSuccess,
    createProductStart, createProductSuccess, createProductFailure,
    editProductStart, editProductSuccess, editProductFailure, 
    deleteProductStart, deleteProductSuccess, deleteProductFailure, 
} from "./productRedux";
import axios from "axios"; 

const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("/auth/login", user);
        const resData = res.data
        if(resData.code === 0) {
            dispatch(loginSuccess(resData.data));
        } else {
            dispatch(loginFailure(resData.message));
        }
    } catch (err) {}
};

const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await axios.get("/products");
        dispatch(getProductSuccess(res.data));
    } catch (err) {
        dispatch(getProductFailure());
    }
};

const createProduct = async (dispatch, product) => {
    dispatch(createProductStart());
    try {
        const accessToken = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
        const formData = new FormData()
        formData.append("name", product.name);
        formData.append("desc", product.desc);
        formData.append("image", product.img);
        formData.append("price", product.price);
        formData.append("category", product.category);
        formData.append("color", product.color);
        formData.append("size", JSON.stringify(product.size));
        const res = await axios.post("/products", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Beaer ${accessToken}`
            }
        });

        const resData = res.data
        if(resData.code === 0) {
            dispatch(createProductSuccess(resData.message));
        } else if(resData.code === 2) {
            dispatch(tokenExpires())
        } else {
            dispatch(createProductFailure(resData.message));

        }
    } catch (err) {}
}

const editProduct = async (dispatch, product, id) => {
    dispatch(editProductStart());
    try {
        const accessToken = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
        const formData = new FormData()
        formData.append("name", product.name);
        formData.append("desc", product.desc);
        formData.append("image", product.img);
        formData.append("price", product.price);
        formData.append("category", product.category);
        formData.append("color", product.color);
        formData.append("size", JSON.stringify(product.size));
        formData.append("status", product.status);
        const res = await axios.put(`/products/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Beaer ${accessToken}`
            }
        });

        const resData = res.data
        if(resData.code === 0) {
            dispatch(editProductSuccess(resData.message));
        } else if(resData.code === 2) {
            dispatch(tokenExpires())
        } else {
            dispatch(editProductFailure(resData.message));
        }
    } catch (err) {}
}

const deleteProduct = async (dispatch, id) => {
    dispatch(deleteProductStart());
    try {
        const accessToken = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
        const res = await axios.delete(`/products/${id}`, {
            headers: {
                'Authorization': `Beaer ${accessToken}`
            }
        });

        const resData = res.data
        if(resData.code === 0) {
            dispatch(deleteProductSuccess(resData.message));
        } else if(resData.code === 2) {
            dispatch(tokenExpires())
        } else {
            dispatch(deleteProductFailure(resData.message));
        }
    } catch (err) {}
}

export { login, getProducts, createProduct, editProduct, deleteProduct }