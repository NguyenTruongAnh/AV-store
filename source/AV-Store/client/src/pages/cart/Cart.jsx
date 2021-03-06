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
            setMess("Vui l??ng nh???p ?????a ch??? giao h??ng v?? ch???n h??nh th???c thanh to??n!")
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
                    <h5>B???n ch??a c?? s???n ph???m trong gi??? h??ng</h5>
                    <h5>Nh???n v??o <Link className="link" to="/collections">????y</Link> ????? ch???n s???n ph???m n??o</h5>
                </div>)
                :(<>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-xl-6 mb-4">
                                <div className="cart-left">
                                    <h2 className="cart-title">
                                        Gi??? h??ng
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
                                            <span className="cart-summary__item-text">T???m t??nh</span>
                                            <span className="cart-summary__item-price">{formatter.format(cart.total)}??</span>
                                        </div>
                                        <div className="cart-summary__item">
                                            <span className="cart-summary__item-text">Gi???m gi??</span>
                                            <span className="cart-summary__item-price">0??</span>
                                        </div>
                                        <div className="cart-summary__item">
                                            <span className="cart-summary__item-text">Ph?? giao h??ng</span>
                                            <span className="cart-summary__item-price">Mi???n ph??</span>
                                        </div>
                                        <div className="cart-summary__item cart-summary__item--total">
                                            <span className="cart-summary__item-text">T???ng ti???n</span>
                                            <span className="cart-summary__item-price">{formatter.format(cart.total)}??</span>
                                        </div>
                                    </div>
                                    <Link className="link cart-shopping" to="/collections">
                                        Ti???p t???c mua h??ng
                                    </Link>
                                </div>
                            </div>
                            <div className="col-12 col-xl-6 mb-4">
                                <div className="cart-right">
                                    <h2 className="cart-title">
                                        Th??ng tin v???n chuy???n
                                    </h2>
                                    <div className="cart-form">
                                        <div className="form-group">
                                            <input type="text" className="form-control" 
                                                    placeholder="?????a ch???" 
                                                    value={address}
                                                    onChange={(e) => setAddress(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" 
                                                className="form-control" 
                                                placeholder="Ghi ch?? th??m (V?? d???: Giao h??ng gi??? h??nh ch??nh)"
                                                value={note}
                                                onChange={(e) => setNote(e.target.value)} 
                                            />
                                        </div>
                                    </div>
                                    <h2 className="cart-title">
                                        H??nh th???c thanh to??n
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
                                            <span className="cart-payment__name">Thanh to??n khi nh???n h??ng</span>
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
                                            <span className="cart-payment__name">V?? ??i???n t??? ZaloPay</span>
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
                                            <span className="cart-payment__name">V?? ??i???n t??? ShopeePay</span>
                                        </label>
                                    </div>
                                    <button className="cart-checkout" onClick={handleCreateOrder}>?????t h??ng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal show={showModal} onHide={() => setShowModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Th??ng b??o</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{mess}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={() => setShowModal(false)}>
                                ????ng
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
                )
            }
        </div>
    )
}
