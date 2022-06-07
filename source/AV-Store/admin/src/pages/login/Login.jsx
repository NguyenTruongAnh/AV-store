import './login.css'
import './loginResponsive.css'
import { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { login } from '../../redux/apiCalls'

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const { isFetching, error } = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, { username, password })
    }
    return (
        <div className="login">
            <div className="login-wrapper">
                <span className="login-title">Đăng nhập</span>
                <form className="login-form">
                    <label>Tên tài khoản:</label>
                    <input
                        type="text"
                        className="login-input"
                        placeholder="Nhập tên tài khoản..."
                        onChange={e=>setUsername(e.target.value)}
                    />

                    <label>Mật khẩu:</label>
                    <input
                        type="password"
                        className="login-input"
                        placeholder="Nhập mật khẩu..."
                        onChange={e=>setPassword(e.target.value)}
                    />
                    {error && <div className="text-danger mt-1 ml-2">{error}</div> }
                    <button onClick={handleClick} disabled={isFetching}
                        className="btn login-btn">
                        Đăng nhập
                    </button>
                </form>
            </div>
        </div>
    )
}
