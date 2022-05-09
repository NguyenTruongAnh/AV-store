import './order.css'
import './orderResponsive.css'

export default function Order() {
    return (
        <div className="order">
            <div className="order-detail">
                <img className="order-img" src="/images/products/ao1.jpg" alt="" />
                <div className="order-info">
                    <h5 className="order-name">Áo vest K98</h5>
                    <span className="order-quantity"><b>Số lượng:</b> 1</span>
                    <span className="order-size"><b>Kích thước:</b> XL</span>
                    <span className="order-color"><b>Màu sắc:</b> Đen</span>
                </div>
            </div>
            <div className="order-price">
                12.000.000đ
            </div>
        </div>
    )
}
