import Orders from '../orders/Orders'
import './profileOrder.css'
import './profileOrderResponsive.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
export default function ProfileOrder() {
    const [orders, setOrders] = useState([])
    const id = useSelector(state=>state.user.currentUser.others._id)
    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await axios.get(`/orders/find/${id}`);
                setOrders(res.data)
            } catch (err) {}
        }

        getOrders()
    },[])
    return (
        <div className="profile-order">
            { orders.length == 0 ? (<div className="profile-order__empty">
                    <img src="http://localhost:5000/images/emptyOrder.png" alt="Empty Order" />
                    <h5>Bạn chưa có đơn hàng</h5>
                    <h5>Nhấn vào <Link className="link" to="/collections">đây</Link> để chọn sản phẩm nào</h5>
                </div>)
                :   (<>
                    <h2 className="profile-order__title">Đơn hàng của bạn</h2>
                    <div className="profile-order__content">
                        {orders.map(order => <Orders order={order} key={order._id}/>)}
                    </div>
                </>)
            }
            
        </div>
    )
}
