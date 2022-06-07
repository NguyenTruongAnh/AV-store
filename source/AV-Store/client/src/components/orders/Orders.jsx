import './orders.css'
import './orders.css'
import './ordersResponsive.css'
import Order from '../order/Order'
import { formatter } from '../../utils/formatMoney'
export default function Orders({ order }) {
    const date = new Date(order.createdAt)
    return (
        <div className="orders">
            <div className="orders-header">
                <div className="orders-header__left">
                    <p>{`#${order._id}`}</p>
                    <span>{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</span>
                </div>
                <div className="orders-header__right">
                    <span>{order.status}</span>
                </div>
            </div>
            <div className="orders-body">
                {order.products.map(product => <>
                    <Order productId= {product.productId} 
                            quantity = {product.quantity}
                            size = {product.size}
                            key={product._id}/>
                    <span className="orders-body__divide"></span>
                </>)}
            </div>
            <div className="orders-footer">
                <span>Tổng tiền: <b>{formatter.format(order.amount)}đ</b></span>
            </div>
        </div>
    )
}
