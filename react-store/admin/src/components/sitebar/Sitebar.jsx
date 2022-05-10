import './sitebar.css'
import './sitebarResponsive.css'

import { Link } from 'react-router-dom'

export default function Sitebar({viewInfo, setViewInfo}) {

    return (
        <div className="sitebar">
            <h5 className="sitebar-title">Bảng điều khiển</h5>
            <ul className="sitebar-list">
                <li
                    className={viewInfo === '/' ? "sitebar-item active" : "sitebar-item"}
                    onClick={() => {
                        if (viewInfo !== 0) {
                            setViewInfo(0)
                        }
                    }}
                >
                    <Link className="link" to="/">
                        <i className="fa-solid fa-table-list"></i>
                        Trang chủ
                    </Link>
                </li>
            </ul>
            <h5 className="sitebar-title">Quản lý</h5>
            <ul className="sitebar-list">
                <li
                    className={viewInfo === '/products' ? "sitebar-item active" : "sitebar-item"}
                    onClick={() => {
                        if (viewInfo !== 1) {
                            setViewInfo(1)
                        }
                    }}
                >
                    <Link className="link" to="/products">
                        <i className="fa-solid fa-store"></i>
                        Sản phẩm
                    </Link>
                </li>
                <li
                    className={viewInfo === '/orders' ? "sitebar-item active" : "sitebar-item"}
                    onClick={() => {
                        if (viewInfo !== 2) {
                            setViewInfo(2)
                        }
                    }}
                >
                    <Link className="link" to="/orders">
                        <i className="fa-solid fa-file-invoice-dollar"></i>
                        Đơn hàng
                    </Link>
                </li>
            </ul>
            <h5 className="sitebar-title">Khác</h5>
            <ul className="sitebar-list">
                <li className="sitebar-item">
                    <Link className="link" to="/login">
                        <i className="fa-solid fa-right-from-bracket"></i>
                        Đăng xuất
                    </Link>
                </li>
            </ul>
        </div>
    )
}