import './register.css'
import './registerResponsive.css'

import { Link } from 'react-router-dom'
import { useState } from 'react'
// import axios from 'axios'

export default function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        // e.preventDefault();
        // setError(false)
        // try {
        //     const res = await axios.post("/auth/register", {
        //         username,
        //         email,
        //         password,
        //     })

        //     res.data && window.location.replace("/login")
        // } catch(err) {
        //     setError(true)
        // }
    }

    return (
        <div className="register">
            <div className="register-wrapper">
                <span className="register-title">Đăng ký</span>
                <form className="register-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="register-input"
                        placeholder="Tên của bạn"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />

                    <input
                        type="text"
                        className="register-input"
                        placeholder="Tên tài khoản"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />

                    <input
                        type="email"
                        className="register-input"
                        placeholder="Email của bạn"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input
                        type="email"
                        className="register-input"
                        placeholder="SĐT của bạn"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        className="register-input"
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <input
                        type="password"
                        className="register-input"
                        placeholder="Nhập lại mật khẩu"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button className="btn register-btn" type="submit">Đăng ký</button>
                </form>
            </div>
            <button className="btn register-login-btn">
                <Link className="link" to="/login">Login</Link>
            </button>
            {error && <span style={{ color: 'red', marginTop: "10px" }}>Something went wrong!</span>}
        </div>
    )
}
