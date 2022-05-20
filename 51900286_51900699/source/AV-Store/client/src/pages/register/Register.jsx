import './register.css'
import './registerResponsive.css'

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Register() {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        setSuccess("")
        try {
            const res = await axios.post("/auth/register", {
                name,
                username,
                email,
                phone,
                password,
                confirmPassword,
            })
            if(res.data.code === 0) {
                setSuccess(res.data.message)
            } else {
                setError(res.data.message)
            }
        } catch(err) {
            setError("Something wrong!")
        }
    }

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return (
        <div className="register">
            <div className="register-wrapper">
                <span className="register-title">Đăng ký</span>
                <form className="register-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="register-input"
                        placeholder="Tên của bạn"
                        value={name}
                        onChange={e => setName(e.target.value)}
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
                        type="number"
                        className="register-input"
                        placeholder="SĐT của bạn"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
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
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                    {error && <span style={{ color: 'red', marginTop: "10px" }}>{error}</span>}
                    {success && <span style={{ color: 'green', marginTop: "10px" }}>{success}</span>}
                    <button className="btn register-btn" type="submit">Đăng ký</button>
                </form>
            </div>
            <Link className="link" to="/login">
                <button className="btn register-login-btn">
                    Login
                </button>
            </Link>
        </div>
    )
}
