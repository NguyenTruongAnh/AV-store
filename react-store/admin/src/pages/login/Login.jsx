import './login.css'
import './loginResponsive.css'

export default function Login() {
    return (
        <div className="login">
            <div className="login-wrapper">
                <span className="login-title">Đăng nhập</span>
                <form className="login-form">
                    <label>Tên đăng nhập:</label>
                    <input
                        type="text"
                        className="login-input"
                        placeholder="Nhập tên đăng nhập..."
                    />

                    <label>Mật khẩu:</label>
                    <input
                        type="password"
                        className="login-input"
                        placeholder="Nhập mật khẩu..."
                    />

                    <button className="btn login-btn">Đăng nhập</button>
                </form>
            </div>
        </div>
    )
}
