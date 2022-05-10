import './cartProduct.css'
import './cartProductResponsive.css'

export default function CartProduct() {
    return (
        <div className="cart-product">
            <div className="cart-product__info">
                <img className="cart-product__img" src="/images/products/ao1.jpg" alt="" />
                <div className="cart-product__detail">
                    <span className="cart-product__name"><b>Sản phẩm:</b> Áo Vest K98</span>
                    <span className="cart-product__id"><b>ID:</b> 099</span>
                    <span className="cart-product__color"><b>Màu sắc:</b> Xám</span>
                    <span className="cart-product__size"><b>Kích cỡ: </b> XL</span>
                </div>
            </div>
            <div className="cart-product__price">
                <div className="cart-product__control">
                    <button className="cart-product__decrease btn">
                        <i className="fas fa-minus"></i>
                    </button>
                    <span className="cart-product__amount">1</span>
                    <button className="cart-product__increase btn">
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
                <div className="cart-product__payment">
                    12.000.000đ
                </div>
            </div>
            <button className="cart-product__delete">
                <i className="fa-solid fa-xmark"></i>
            </button>
        </div>
    )
}
