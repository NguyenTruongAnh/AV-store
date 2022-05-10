import './orderProduct.css'
import './orderProductResponsive.css'

export default function OrderProduct() {
    return (
        <div className="order-product">
            <div className="order-product__left">
                <img className="order-product__img" src="/images/products/ao1.jpg" alt="" />
                <div className="order-product__info">
                    <h5 className="order-product__name">Áo vest K98</h5>
                    <span className="order-product__quantity"><b>Số lượng:</b> 1</span>
                    <span className="order-product__size"><b>Kích thước:</b> XL</span>
                    <span className="order-product__color"><b>Màu sắc:</b> Đen</span>
                </div>
            </div>
            <div className="order-product__right">
                12.000.000đ
            </div>
        </div>
    )
}
