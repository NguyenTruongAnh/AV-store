import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './detail.css'
import './detailResponsive.css'
import axios from "axios";
import { addProduct } from '../../redux/cartRedux';
import { useDispatch, useSelector } from 'react-redux';
import { formatter } from '../../utils/formatMoney'
import { Modal, Button } from 'react-bootstrap'

export default function Detail() {
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [size, setSize] = useState("")
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.currentUser)
    
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get("/products/" + id)
                setProduct(res.data)
                setSize(res.data.size[0])
            } catch(err) {}
        }

        getProduct()
    }, [id])

    const handleQuantity = (type) => {
        if(type === 'desc') {
            quantity > 1 && setQuantity(quantity - 1)
        }
        else 
            setQuantity(quantity + 1)
    }

    const handleAddToCart = () => {
        if(user) {
            dispatch(addProduct({ ...product, quantity, size}))
        } else {
            setShowModal(true)
        }
    }

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return (
        <>
            <div className="detail">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8 offset-2 offset-md-0 col-md-6 col-lg-4 offset-lg-1">
                            <img className="detail-img" src={product.img} alt="Ảnh" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="detail-info">
                                <h1 className="detail-title">
                                    {product.name}
                                </h1>
                                <div className="detail-desc">
                                    {product.desc}
                                </div>
                                <div className="detail-price">
                                    {formatter.format(product.price)}đ
                                </div>
                                <ul className="detail-filters">
                                    <li className="detail-filter">
                                        <div className="detail-filter__title">Màu sắc: {product.color}</div>
                                    </li>

                                    <li className="detail-filter">
                                        <div className="detail-filter__title">Kích thước</div>
                                        <select className="detail-filter__list" name="" id="" onChange={(e) => setSize(e.target.value)}>
                                            {product.size?.map((s) => <option value={`${s}`} key={s}>{s}</option>)}
                                        </select>
                                    </li>
                                </ul>
                                <div className="detail-control">
                                    <div className="detail-control__container">
                                        <button className="detail-control__decrease btn" onClick={()=>handleQuantity("desc")}>
                                            <i className="fas fa-minus"></i>
                                        </button>
                                        <span className="detail-control__amount">{quantity}</span>
                                        <button className="detail-control__increase btn" onClick={()=>handleQuantity("asc")}>
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                    <button className="btn detail-control__btn" onClick={handleAddToCart} 
                                    >Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Thông báo</Modal.Title>
                </Modal.Header>
                <Modal.Body>Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => setShowModal(false)}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}