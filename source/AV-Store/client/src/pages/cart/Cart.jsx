import './cart.css'
import './cartResponsive.css'
import CartProduct from '../../components/cartProduct/CartProduct'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formatter } from '../../utils/formatMoney'
import { Modal, Button } from 'react-bootstrap'
import { tokenExpires } from '../../redux/userRedux'
import { clear } from '../../redux/cartRedux'
import axios from "axios"
export default function Cart() {
    const [payment, setPayment] = useState('')
    const [address, setAddress] = useState('')
    const [note, setNote] = useState('')
    const [mess, setMess] = useState("Something wrong")
    const [showModal, setShowModal] = useState(false)
    const cart = useSelector(state=>state.cart)
    const accessToken = useSelector(state=>state.user.currentUser.accessToken)
    const dispatch = useDispatch()
    const handleCreateOrder = async () => {
        if(address && payment) {
            try {
                let products = [] 
                cart.products.forEach(product => {
                    products.push({
                        productId : product.productId,
                        quantity: product.quantity,
                        size: product.size
                    })
                })
                const order = {
                    products,
                    amount: cart.total,
                    address,
                    note,
                    payment
                }
                const res = await axios.post("/orders/", order, {
                    headers: {
                        'Authorization': `Beaer ${accessToken}`
                    }
                });
                if(res.data.code === 0) {
                    dispatch(clear())
                } else if(res.data.code === 2) {
                    dispatch(tokenExpires())
                } else {
                    setMess(res.data.message)
                    setShowModal(true)
                }
            } catch (err) {}
        } else {
            setMess("Vui lòng nhập địa chỉ giao hàng và chọn hình thức thanh toán!")
            setShowModal(true)
        }
    }

    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return (
        <div className="cart">
            {cart.quantity == 0 ? 
                (<div className="cart-empty">
                    <img src="http://localhost:5000/images/emptyCart.png" alt="Empty Cart" />
                    <h5>Bạn chưa có sản phẩm trong giỏ hàng</h5>
                    <h5>Nhấn vào <Link className="link" to="/collections">đây</Link> để chọn sản phẩm nào</h5>
                </div>)
                :(<>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-xl-6 mb-4">
                                <div className="cart-left">
                                    <h2 className="cart-title">
                                        Giỏ hàng
                                    </h2>
                                    <div className="cart-products">
                                        {cart.products.map(product => <>
                                            <CartProduct productId={product.productId}
                                                        q={product.quantity}
                                                        size={product.size}
                                                        key={product._id}/> 
                                            <span className="cart-product__divide"></span>
                                            </>
                                        )}

                                    </div>
                                    <div className="cart-summary">
                                        <div className="cart-summary__item">
                                            <span className="cart-summary__item-text">Tạm tính</span>
                                            <span className="cart-summary__item-price">{formatter.format(cart.total)}đ</span>
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
                                            <span className="cart-summary__item-price">{formatter.format(cart.total)}đ</span>
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
                                        <div className="form-group">
                                            <input type="text" className="form-control" 
                                                    placeholder="Địa chỉ" 
                                                    value={address}
                                                    onChange={(e) => setAddress(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" 
                                                className="form-control" 
                                                placeholder="Ghi chú thêm (Ví dụ: Giao hàng giờ hành chính)"
                                                value={note}
                                                onChange={(e) => setNote(e.target.value)} 
                                            />
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
                                                <img src="http://localhost:5000/images/COD.jpg" alt="" />
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
                                                <img src="http://localhost:5000/images/Momo.jpg" alt="" />
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
                                                <img src="http://localhost:5000/images/ZaloPay.jpg" alt="" />
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
                                                <img src="http://localhost:5000/images/ShopeePay.jpg" alt="" />
                                            </span>
                                            <span className="cart-payment__name">Ví điện tử ShopeePay</span>
                                        </label>
                                    </div>
                                    <button className="cart-checkout" onClick={handleCreateOrder}>Đặt hàng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal show={showModal} onHide={() => setShowModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Thông báo</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{mess}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={() => setShowModal(false)}>
                                Đóng
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
                )
            }
        </div>
    )
}
