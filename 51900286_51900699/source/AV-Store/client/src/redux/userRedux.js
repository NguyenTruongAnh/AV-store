import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching:false,
    error:false,
    success: false,
  },
  reducers: {
        loginStart: (state) => {
            state.isFetching=true
            state.error = false
        },
        loginSuccess: (state, action) => {
            state.isFetching= false
            state.currentUser = action.payload
            state.error = false
        },
        loginFailure: (state, action) => {
            state.isFetching= false
            state.error = action.payload
        },

        logout: (state) => {
            state.currentUser = null
            state.error = false
            state.success = false
            state.isFetching = false
        },

        updateStart: (state) => {
            state.isFetching=true
            state.error = false
        },
        updateSuccess: (state, action) => {
            state.isFetching= false
            state.currentUser.others.name = action.payload.info.name
            state.currentUser.others.phone = action.payload.info.phone
            state.currentUser.others.birthday = action.payload.info.birthday
            state.currentUser.others.gender = action.payload.info.gender
            state.currentUser.others.avatar = action.payload.avatar
            state.error = false
            state.success = action.payload.mess
        },
        updateFailure: (state, action) => {
            state.isFetching= false
            state.error = action.payload
        },

        tokenExpires: (state) => {
            state.currentUser = null
            state.error = 'Phiên đăng nhập đã hết hạn sử dụng!'
        },
    },
});

export const { 
    loginStart, loginSuccess, loginFailure, 
    updateStart, updateSuccess, updateFailure, 
    logout, tokenExpires
} = userSlice.actions;
export default userSlice.reducer;