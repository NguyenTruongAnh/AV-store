import './profilePassword.css'
import './profilePasswordResponsive.css'

export default function ProfilePassword() {

    return (
        <div className="profile-password">
            <h2 className="profile-password__title">Đổi mật khẩu</h2>
            <ul className="profile-password__list">
                <li className="profile-password__item">
                    <span className="profile-password__item-title">Mật khẩu cũ</span>
                    <input type="password" className="profile-password__item-input" placeholder="Mật khẩu cũ" />
                </li>
                <li className="profile-password__item">
                    <span className="profile-password__item-title">Mật khẩu mới</span>
                    <input type="password" className="profile-password__item-input" placeholder="Mật khẩu mới" />
                </li>
                <li className="profile-password__item">
                    <span className="profile-password__item-title">Xác nhận mật khẩu mới</span>
                    <input type="password" className="profile-password__item-input" placeholder="Xác thực mật khẩu mới" />
                </li>
            </ul>
            <div className="d-flex justify-content-center">
                <button className="profile-password__confirm btn btn-success">
                    Xác nhận
                </button>
            </div>
        </div>
    )
}
