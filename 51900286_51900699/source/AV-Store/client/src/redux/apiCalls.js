import { 
    loginFailure, loginStart, loginSuccess, 
    updateFailure, updateStart, updateSuccess,
    tokenExpires
} from "./userRedux";
import { loginCart } from "./cartRedux";
import axios from "axios";

const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("/auth/login", user);
        const resData = res.data
        if(resData.code === 0) {
            const { cart, ...account } = resData.data
            dispatch(loginCart(cart))
            dispatch(loginSuccess(account));
        } else {
            dispatch(loginFailure(resData.message));
        }
    } catch (err) {}
};

const update = async (dispatch, info, id) => {
    dispatch(updateStart());
    try {
        const accessToken = JSON.parse(JSON.parse(localStorage.getItem("persist:root-client")).user).currentUser.accessToken
        const formData = new FormData()
        formData.append("name", info.name);
        formData.append("phone", info.phone);
        formData.append("birthday", info.birthday);
        formData.append("gender", info.gender);
        formData.append("avatar", info.avatar);
        const res = await axios.put(`/users/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Beaer ${accessToken}`
            }
        });
        const resData = res.data
        if(resData.code === 0) {
            delete info.avatar
            dispatch(updateSuccess( { mess:resData.message, info, avatar:resData.data }));
        } else if(resData.code === 2) {
            dispatch(tokenExpires())
        } else {
            dispatch(updateFailure(resData.message));
        }
    } catch (err) {}
};


export { login, update }