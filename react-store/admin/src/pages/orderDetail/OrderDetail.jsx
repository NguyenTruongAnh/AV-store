import './orderDetail.css'
import './orderDetailResponsive.css'

import { Link } from 'react-router-dom'
import OrderProduct from '../../components/orderProduct/OrderProduct'

export default function OrderDetail() {
    return (
        <div className="order-detail">
            <h1 className="order-detail__title">Chi tiết đơn hàng: #00123</h1>
            <Link className="link order-detail__back" to="/orders">
                Quay lại
            </Link>
            <div className="order-detail__content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-xl-7">
                            <h4 className="order-detail__sub-title">Danh sách sản phẩm</h4>
                            <div className="order-detail__products">
                                <OrderProduct />
                                <OrderProduct />
                                <OrderProduct />
                            </div>
                            <div className="order-detail__summary">
                                Tổng tiền: 36.000.000đ
                            </div>
                        </div>
                        <div className="col-12 col-xl-5">
                            <h4 className="order-detail__sub-title">Thông tin khách hàng</h4>
                            <ul className="order-detail__infos">
                                <li className="order-detail__info">
                                    <label>Họ và tên:</label>
                                    <p>Nguyễn Trường Anh</p>
                                </li>
                                <li className="order-detail__info">
                                    <label>Số điện thoại:</label>
                                    <p>03883999</p>
                                </li>
                                <li className="order-detail__info">
                                    <label>Email:</label>
                                    <p>truonganh@gmail.com</p>
                                </li>
                                <li className="order-detail__info">
                                    <label>Địa chỉ:</label>
                                    <p>Khu phố Hòa Lân 2, Thuận Giao, Thuận An, Bình Dương</p>
                                </li>
                                <li className="order-detail__info">
                                    <label>Ghi chú:</label>
                                    <p>Giao trong khung giờ từ 9h-16h</p>
                                </li>
                                <li className="order-detail__info">
                                    <label>Ngày đặt:</label>
                                    <p>09/05/2022</p>
                                </li>
                                <li className="order-detail__info">
                                    <label>Hình thức thanh toán:</label>
                                    <p>Thu tiền trực tiếp</p>
                                </li>
                            </ul>
                            <div className="order-detail__status waiting">Tình trạng: <span>Chờ xác nhận</span></div>
                            <div className="order-detail__control">
                                <button>
                                    <i className="fa-solid fa-circle-check"></i>
                                    Xác nhận
                                </button>
                                <button>
                                    <i className="fa-solid fa-ban"></i>
                                    Hủy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
