import Orders from '../orders/Orders'
import './profileOrder.css'
import './profileOrderResponsive.css'

export default function ProfileOrder() {
    return (
        <div className="profile-order">
            <h2 className="profile-order__title">Đơn hàng của bạn</h2>
            <div className="profile-order__content">
                <Orders />
                <Orders />
            </div>
        </div>
    )
}
