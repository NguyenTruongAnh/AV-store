import './login.css'
import './loginResponsive.css'

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from "../../redux/apiCalls";

export default function Login() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const dispatch = useDispatch()
    const { isFetching, error } = useSelector((state) => state.user);
    const handleSubmit = async (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    }

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return (
        <div className="login">
            <div className="login-wrapper">
                <span className="login-title">Đăng nhập</span>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label>Tên tài khoản:</label>
                    <input
                        type="text"
                        className="login-input"
                        placeholder="Nhập tên tài khoản..."
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label>Mật khẩu:</label>
                    <input
                        type="password"
                        className="login-input"
                        placeholder="Nhập mật khẩu..."
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <div className="text-danger mt-1 ml-2">{error}</div> }
                    <button className="btn login-btn" disabled={isFetching}>Đăng nhập</button>
                </form>
            </div>
            <Link className="link" to="/register">
                <button className="btn login-register-btn">
                    Đăng ký
                </button>
            </Link>
        </div>
    )
}
