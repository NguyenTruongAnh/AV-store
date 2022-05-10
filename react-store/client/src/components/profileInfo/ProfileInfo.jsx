import './profileInfo.css'
import './profileInfoResponsive.css'


export default function ProfileInfo() {
    return (
        <div className="profile-info">
            <h2 className="profile-info__title">Thông tin tài khoản</h2>
            <div className="profile-info__avatar">
                <img
                    className="profile-info__avatar-view"
                    src="https://cdn.chanhtuoi.com/uploads/2022/01/hinh-avatar-nam-deo-kinh.jpg"
                    alt="Avatar"
                />
                <label htmlFor="profile-info__avatar-file" className="profile-info__avatar-icon">
                    <i className="fas fa-camera"></i>
                </label>
                <input
                    type="file"
                    id="profile-info__avatar-file"
                    className="profile-info__avatar-file"
                    accept="image/*"
                />
            </div>
            <ul className="profile-info__list">
                <li className="profile-info__item">
                    <span className="profile-info__item-title">Họ và tên</span>
                    <input type="text" className="profile-info__item-input" placeholder="Họ và tên của bạn" value="Nguyễn Trường Anh" />
                </li>
                <li className="profile-info__item">
                    <span className="profile-info__item-title">Email</span>
                    <input type="email" className="profile-info__item-input" placeholder="Email của bạn" disabled value="truonganh@gmail.com" />
                </li>
                <li className="profile-info__item">
                    <span className="profile-info__item-title">Số điện thoại</span>
                    <input type="number" className="profile-info__item-input" placeholder="Số điện thoại của bạn" value="0344881939" />
                </li>
                <li className="profile-info__item">
                    <span className="profile-info__item-title">Địa chỉ</span>
                    <input type="text" className="profile-info__item-input" placeholder="Địa chỉ của bạn" value="Quận 7, Hồ Chí Minh" />
                </li>
                <li className="profile-info__item">
                    <span className="profile-info__item-title">Ngày sinh</span>
                    <input type="date" className="profile-info__item-input" />
                </li>
                <li className="profile-info__item">
                    <span className="profile-info__item-title">Giới tính</span>
                    <div className="profile-info__item-radio">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="Male" />
                            <label className="form-check-label" htmlFor="inlineRadio1">Nam</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="Female" />
                            <label className="form-check-label" htmlFor="inlineRadio2">Nữ</label>
                        </div>
                    </div>
                </li>
            </ul>
            <button className="profile-info__update btn btn-success">Cập nhật tài khoản</button>
        </div>
    )
}
