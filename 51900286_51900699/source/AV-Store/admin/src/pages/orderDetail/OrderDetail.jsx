import './orderDetail.css'
import './orderDetailResponsive.css'

import OrderProduct from '../../components/orderProduct/OrderProduct'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { formatter } from '../../utils/formatMoney'
import axios from "axios"
import { Modal, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
export default function OrderDetail() {
    const location = useLocation()
    const id = location.pathname.split("/")[3]
    const [order, setOrder] = useState('')
    const [user, setUser] = useState('')
    const [products, setProducts] = useState([])
    const [date, setDate] = useState(new Date())
    const [status, setStatus] = useState('')
    const [showModalCancel, setShowModalCancel] = useState(false)
    const [showModalConfirm, setShowModalConfirm] = useState(false)
    const accessToken = useSelector(state => state.user.currentUser.accessToken)
    const handleConfirm = async () => {
        try {
            const res = await axios.put(`/orders/${id}`, {status: 'Xác nhận'}, {
                headers: {
                    'Authorization': `Beaer ${accessToken}`
                }
            })
            if(res.data.code == 0) {
                setStatus('Xác nhận')
                setShowModalConfirm(false)
            }
        } catch(err) {}
    }

    const handleCancel = async () => {
        try {
            const res = await axios.put(`/orders/${id}`, {status: 'Hủy'}, {
                headers: {
                    'Authorization': `Beaer ${accessToken}`
                }
            })
            if(res.data.code == 0) {
                setStatus('Hủy')
                setShowModalCancel(false)
            }
        } catch(err) {}
    }

    useEffect(() => {
        const getInfo= async () => {
            try {
                const res1 = await axios.get(`/orders/${id}`)
                const res2 = await axios.get(`/users/${res1.data.userId}`)
                setOrder(res1.data)
                setUser(res2.data)
                setProducts(res1.data.products)
                setDate(new Date(res1.data.createdAt))
                setStatus(res1.data.status)
            } catch(err) {}
        }

        getInfo()
    },[])
    return (
        <>
            <div className="order-detail">
                <h1 className="order-detail__title">Chi tiết đơn hàng: #{order._id}</h1>
                <Link className="link order-detail__back" to="/orders">
                    Quay lại
                </Link>
                <div className="order-detail__content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-xl-7">
                                <h4 className="order-detail__sub-title">Danh sách sản phẩm</h4>
                                <div className="order-detail__products">
                                    {products.map(product => 
                                        <OrderProduct productId={product.productId}
                                                    quantity={product.quantity}
                                                    size={product.size} key={product._id}/>)}
                                </div>
                                <div className="order-detail__summary">
                                    Tổng tiền: {formatter.format(order.amount)}đ
                                </div>
                            </div>
                            <div className="col-12 col-xl-5">
                                <h4 className="order-detail__sub-title">Thông tin khách hàng</h4>
                                <ul className="order-detail__infos">
                                    <li className="order-detail__info">
                                        <label>Họ và tên:</label>
                                        <p>{user.name}</p>
                                    </li>
                                    <li className="order-detail__info">
                                        <label>Số điện thoại:</label>
                                        <p>{user.phone}</p>
                                    </li>
                                    <li className="order-detail__info">
                                        <label>Email:</label>
                                        <p>{user.email}</p>
                                    </li>
                                    <li className="order-detail__info">
                                        <label>Địa chỉ:</label>
                                        <p>{order.address}</p>
                                    </li>
                                    <li className="order-detail__info">
                                        <label>Ghi chú:</label>
                                        <p>{order.note}</p>
                                    </li>
                                    <li className="order-detail__info">
                                        <label>Ngày đặt:</label>
                                        <p>{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</p>
                                    </li>
                                    <li className="order-detail__info">
                                        <label>Hình thức thanh toán:</label>
                                        <p>{order.payment}</p>
                                    </li>
                                </ul>
                                {
                                    {
                                        'Chờ xác nhận': <div className="order-detail__status waiting">Tình trạng: <span>{status}</span></div>,
                                        'Xác nhận': <div className="order-detail__status confirm">Tình trạng: <span>{status}</span></div>,
                                        'Hủy': <div className="order-detail__status cancel">Tình trạng: <span>{status}</span></div>
                                    }[status]
                                }
                                
                                {status == 'Chờ xác nhận' && <div className="order-detail__control">
                                    <button onClick={() => setShowModalConfirm(true)}>
                                        <i className="fa-solid fa-circle-check"></i>
                                        Xác nhận
                                    </button>
                                    <button onClick={() => setShowModalCancel(true)}>
                                        <i className="fa-solid fa-ban"></i>
                                        Hủy
                                    </button>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={showModalCancel} onHide={() => setShowModalCancel(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Hủy đơn hàng</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có chắc chắn muốn hủy đơn hàng này không ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleCancel}>
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModalConfirm} onHide={() => setShowModalConfirm(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận đơn hàng</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn muốn xác nhận đơn hàng này không ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleConfirm}>
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
