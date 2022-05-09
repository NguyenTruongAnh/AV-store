import './order.css'
import './orderResponsive.css'

import { Link } from 'react-router-dom'

export default function Order() {
    return (
        <div className="order">
            <h1 className="order-title">Danh sách đơn hàng</h1>
            <div className="table-responsive">
                <table className="table order-table">
                    <thead>
                        <tr>
                            <th scope="col" >ID</th>
                            <th scope="col" >Ngày đặt</th>
                            <th scope="col" style={{minWidth: "110px"}}>Tình trạng</th>
                            <th scope="col" >Tổng tiền</th>
                            <th scope="col" >Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="order-table__item">
                            <td className="order-table__item-id align-middle">
                                <Link className="link" to="/orders/detail/1">
                                    00123
                                </Link>
                            </td>
                            <td className="order-table__item-date align-middle"> 09/05/2022 </td>
                            <td className="order-table__item-status align-middle waiting">Chờ duyệt</td>
                            <td className="order-table__item-price align-middle">12.000.000đ</td>
                            <td className="order-table__item-control align-middle">
                                <Link className="link" to="/orders/detail/1">
                                    Duyệt
                                </Link>
                            </td>
                        </tr>
                        <tr className="order-table__item">
                            <td className="order-table__item-id align-middle">
                                <Link className="link" to="/orders/detail/1">
                                    00123
                                </Link>
                            </td>
                            <td className="order-table__item-date align-middle"> 09/05/2022 </td>
                            <td className="order-table__item-status align-middle confirm">Xác nhận</td>
                            <td className="order-table__item-price align-middle">12.000.000đ</td>
                            <td className="order-table__item-control align-middle">
                                <Link className="link" to="/orders/detail/1">
                                    Duyệt
                                </Link>
                            </td>
                        </tr>
                        <tr className="order-table__item">
                            <td className="order-table__item-id align-middle">
                                <Link className="link" to="/orders/detail/1">
                                    00123
                                </Link>
                            </td>
                            <td className="order-table__item-date align-middle"> 09/05/2022 </td>
                            <td className="order-table__item-status align-middle cancel">Hủy</td>
                            <td className="order-table__item-price align-middle">12.000.000đ</td>
                            <td className="order-table__item-control align-middle">
                                <Link className="link" to="/orders/detail/1">
                                    Duyệt
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}