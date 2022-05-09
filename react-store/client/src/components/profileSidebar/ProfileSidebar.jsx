import './profileSidebar.css'
import './profileSidebarResponsive.css'

import { Link } from 'react-router-dom'

export default function ProfileSidebar({ infoView, setInfoView }) {

    return (
        <div className="profile-sidebar">
            <div className="container">
                <div className="row">
                    <div className="col-12 px-0 px-md-3">
                        <div 
                            className={infoView === 0 ? "profile-sidebar__item active" : "profile-sidebar__item"}
                            onClick={() => {
                                if (infoView !== 0) {
                                    setInfoView(0)
                                }
                            }}
                        >
                            <i className="hide-on-mobile fas fa-user-circle"></i>
                            Thông tin cá nhân
                        </div>
                    </div>

                    <div className="col-12 px-0 px-md-3">
                        <div 
                            className={infoView === 1 ? "profile-sidebar__item active" : "profile-sidebar__item"}
                            onClick={() => {
                                if (infoView !== 1) {
                                    setInfoView(1)
                                }
                            }}
                        >
                            <i className="fa-solid fa-list-check"></i>
                            Danh sách đơn hàng
                        </div>
                    </div>

                    <div className="col-12 px-0 px-md-3">
                        <div 
                            className={infoView === 2 ? "profile-sidebar__item active" : "profile-sidebar__item"}
                            onClick={() => {
                                if (infoView !== 2) {
                                    setInfoView(2)
                                }
                            }}
                        >
                            <i className="hide-on-mobile fas fa-lock"></i>
                            Đổi mật khẩu
                        </div>
                    </div>

                    <div className="col-12 px-0 px-md-3">
                        <Link className="link" to="/login">
                            <div className="profile-sidebar__item">
                                <i className="hide-on-mobile fas fa-sign-out-alt"></i>
                                Đăng xuất
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
