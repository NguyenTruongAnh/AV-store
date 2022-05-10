import './login.css'
import './loginResponsive.css'

import { Link } from 'react-router-dom'
import { useContext, useRef } from 'react'
import { Context } from '../../context/Context'
// import axios from 'axios'

export default function Login() {
    const userRef = useRef()
    const passwordRef = useRef()
    const { dispatch, isFetching } = useContext(Context)

    const handleSubmit = async (e) => {
        // e.preventDefault();
        // dispatch({type:"LOGIN_START"})
        // try {
        //     const res = await axios.post("/auth/login", {
        //         username: userRef.current.value,
        //         password: passwordRef.current.value,
        //     })
        //     dispatch({type:"LOGIN_SUCCESS", payload: res.data})
        // } catch(err) {
        //     dispatch({type:"LOGIN_FAILURE"})
        // }
    }

    return (
        <div className="login">
            <div className="login-wrapper">
                <span className="login-title">Đăng nhập</span>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label>Tên đăng nhập:</label>
                    <input
                        type="text"
                        className="login-input"
                        placeholder="Nhập tên đăng nhập..."
                        ref={userRef}
                    />

                    <label>Mật khẩu:</label>
                    <input
                        type="password"
                        className="login-input"
                        placeholder="Nhập mật khẩu..."
                        ref={passwordRef}
                    />

                    <button className="btn login-btn" disabled={isFetching}>Đăng nhập</button>
                </form>
            </div>
            <button className="btn login-register-btn">
                <Link className="link" to="/register">Đăng ký</Link>
            </button>
        </div>
    )
}
