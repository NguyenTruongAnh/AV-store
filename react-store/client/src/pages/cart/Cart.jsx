import './cart.css'
import './cartResponsive.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import CartProduct from '../../components/cartProduct/CartProduct'

export default function Cart() {
    const [payment, setPayment] = useState('')

    return (
        <div className="cart">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-xl-6 mb-4">
                        <div className="cart-left">
                            <h2 className="cart-title">
                                Giỏ hàng
                            </h2>
                            <div className="cart-products">
                                <CartProduct />
                                <span className="cart-product__divide"></span>
                                <CartProduct />
                            </div>
                            <div className="cart-summary">
                                <div className="cart-summary__item">
                                    <span className="cart-summary__item-text">Tạm tính</span>
                                    <span className="cart-summary__item-price">22.000.000đ</span>
                                </div>
                                <div className="cart-summary__item">
                                    <span className="cart-summary__item-text">Giảm giá</span>
                                    <span className="cart-summary__item-price">0đ</span>
                                </div>
                                <div className="cart-summary__item">
                                    <span className="cart-summary__item-text">Phí giao hàng</span>
                                    <span className="cart-summary__item-price">Miễn phí</span>
                                </div>
                                <div className="cart-summary__item cart-summary__item--total">
                                    <span className="cart-summary__item-text">Tổng tiền</span>
                                    <span className="cart-summary__item-price">22.000.000đ</span>
                                </div>
                            </div>
                            <Link className="link cart-shopping" to="/collections">
                                Tiếp tục mua hàng
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-xl-6 mb-4">
                        <div className="cart-right">
                            <h2 className="cart-title">
                                Thông tin vận chuyển
                            </h2>
                            <div className="cart-form">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control" placeholder="Họ tên" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="number" className="form-control" placeholder="Số điện thoại" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Địa chỉ" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Ghi chú thêm (Ví dụ: Giao hàng giờ hành chính)" />
                                </div>
                            </div>
                            <h2 className="cart-title">
                                Hình thức thanh toán
                            </h2>
                            <div className="cart-payments">
                                <label
                                    htmlFor="cart-payment__cod"
                                    className={payment === 'COD' ? "cart-payment active" : "cart-payment"}
                                    onClick={() => setPayment('COD')}
                                >
                                    <input className="cart-payment__radio" id="cart-payment__cod"
                                        type="radio" name="payments" value="COD"
                                    />
                                    <span className="cart-payment__img">
                                        <img src="/images/payments/COD.jpg" alt="" />
                                    </span>
                                    <span className="cart-payment__name">Thanh toán khi nhận hàng</span>
                                </label>

                                <label
                                    htmlFor="cart-payment__momo"
                                    className={payment === 'MoMo' ? "cart-payment active" : "cart-payment"}
                                    onClick={() => setPayment('MoMo')}
                                >
                                    <input className="cart-payment__radio" id="cart-payment__momo"
                                        type="radio" name="payments" value="MoMo"
                                    />
                                    <span className="cart-payment__img">
                                        <img src="/images/payments/MoMo.jpg" alt="" />
                                    </span>
                                    <span className="cart-payment__name">MOMO</span>
                                </label>

                                <label
                                    htmlFor="cart-payment__zalopay"
                                    className={payment === 'ZaloPay' ? "cart-payment active" : "cart-payment"}
                                    onClick={() => setPayment('ZaloPay')}
                                >
                                    <input className="cart-payment__radio" id="cart-payment__zalopay"
                                        type="radio" name="payments" value="ZaloPay"
                                    />
                                    <span className="cart-payment__img">
                                        <img src="/images/payments/ZaloPay.jpg" alt="" />
                                    </span>
                                    <span className="cart-payment__name">Ví điện tử ZaloPay</span>
                                </label>

                                <label
                                    htmlFor="cart-payment__shopeepay"
                                    className={payment === 'ShopeePay' ? "cart-payment active" : "cart-payment"}
                                    onClick={() => setPayment('ShopeePay')}
                                >
                                    <input className="cart-payment__radio" id="cart-payment__shopeepay"
                                        type="radio" name="payments" value="ShopeePay"
                                    />
                                    <span className="cart-payment__img">
                                        <img src="/images/payments/ShopeePay.jpg" alt="" />
                                    </span>
                                    <span className="cart-payment__name">Ví điện tử ShopeePay</span>
                                </label>
                            </div>

                            <button className="cart-checkout">Thanh toán</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
