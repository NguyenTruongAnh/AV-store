import './order.css'
import './orderResponsive.css'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { formatter } from '../../utils/formatMoney'
import axios from "axios"

export default function Order() {
    const [orders, setOrders] = useState([])
    const [status, setStatus] = useState("")

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await axios.get(`/orders?status=${status}`)
                setOrders(res.data)
            } catch(err) {}
        }

        getOrders()
    },[status])
    return (
        <div className="order">
            <h1 className="order-title">Danh sách đơn hàng</h1>
            <select name="" id="" className="order-status" onChange={(e) => setStatus(e.target.value)}>
                <option value="">Tất cả</option>
                <option value="Chờ xác nhận">Chờ xác nhận</option>
                <option value="Xác nhận">Xác nhận</option>
                <option value="Hủy">Hủy</option>
            </select>
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
                        {orders.length > 0 ?  orders.map(order => {
                            let date = new Date(order.createdAt)
                            return <tr className="order-table__item">
                                <td className="order-table__item-id align-middle">
                                    <Link className="link" to={`/orders/detail/${order._id}`}>
                                        {`#${order._id}`}
                                    </Link>
                                </td>
                                <td className="order-table__item-date align-middle">{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</td>
                                {
                                    {
                                        'Chờ xác nhận': <td className="order-table__item-status align-middle waiting">Chờ xác nhận</td>,
                                        'Xác nhận': <td className="order-table__item-status align-middle confirm">Xác nhận</td>,
                                        'Hủy': <td className="order-table__item-status align-middle cancel">Hủy</td>
                                    }[order.status]
                                }
                                <td className="order-table__item-price align-middle">{formatter.format(order.amount)}đ</td>
                                <td className="order-table__item-control align-middle">
                                    {order.status == 'Chờ xác nhận' ?
                                        <Link className="link" to={`/orders/detail/${order._id}`}>
                                            Duyệt
                                        </Link>
                                        : "Đã duyệt"
                                    }
                                </td>
                            </tr>
                        })
                        : <>
                            <tr className="order-table__item">
                                <td rowSpan={5} className="order-table__item-date align-middle">
                                    Không có đơn hàng nào!
                                </td>
                            </tr>
                        </>}
                    </tbody>
                </table>
            </div>
        </div>
    )
}