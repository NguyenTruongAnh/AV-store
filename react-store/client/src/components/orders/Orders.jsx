import './orders.css'
import './orders.css'
import './ordersResponsive.css'
import Order from '../order/Order'

export default function Orders() {
    return (
        <div className="orders">
            <div className="orders-header">
                <div className="orders-header__left">
                    <p>#123456</p>
                    <span>19/01/2022</span>
                </div>
                <div className="orders-header__right">
                    <span>Đã xác nhận</span>
                </div>
            </div>
            <div className="orders-body">
                <Order />
                <span className="orders-body__divide"></span>
                <Order />
            </div>
            <div className="orders-footer">
                <span>Tổng tiền: <b>22.000.000đ</b></span>
            </div>
        </div>
    )
}
