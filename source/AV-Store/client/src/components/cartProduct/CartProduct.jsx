import './cartProduct.css'
import './cartProductResponsive.css'
import { formatter } from '../../utils/formatMoney'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateQuantity, deleteProduct } from '../../redux/cartRedux'
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios'

export default function CartProduct({ productId, q, size }) {
    const [quantity, setQuantity] = useState(q)
    const [product, setProduct] = useState('')
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    const handleQuantity = (type) => {
        if(type === "desc") {
            setQuantity(quantity - 1)
        }
        else {
            setQuantity(quantity + 1)
        }
        dispatch(updateQuantity({productId, size, type}))
        
    }

    const handleDelete = () => {
        dispatch(deleteProduct({...product, quantity }))
    }

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get(`/products/${productId}`);
                setProduct(res.data)
            } catch (err) {}
        }

        getProduct()
    },[])

    return (
        <>
            <div className="cart-product">
                <div className="cart-product__info">
                    <img className="cart-product__img" src={product.img} alt="" />
                    <div className="cart-product__detail">
                        <span className="cart-product__name"><b>Sản phẩm:</b> {product.name}</span>
                        <span className="cart-product__id"><b>ID:</b> {product._id}</span>
                        <span className="cart-product__color"><b>Màu sắc:</b> {product.color}</span>
                        <span className="cart-product__size"><b>Kích cỡ: </b> {size}</span>
                    </div>
                </div>
                <div className="cart-product__price">
                    <div className="cart-product__control">
                        <button className="cart-product__decrease btn" 
                            onClick={() => handleQuantity("desc")} disabled={quantity == 1}>
                            <i className="fas fa-minus"></i>
                        </button>
                        <span className="cart-product__amount">{quantity}</span>
                        <button className="cart-product__increase btn" onClick={()=>handleQuantity("asc")}>
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                    <div className="cart-product__payment">
                        {formatter.format(product.price*quantity)}đ
                    </div>
                </div>
                <button className="cart-product__delete" onClick={() => setShowModal(true)}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Xóa sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có muốn xóa sản phẩm <strong>{product.name}</strong> không ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleDelete}>
                        Xác nhận
                    </Button>
                    <Button variant="primary" onClick={() => setShowModal(false)}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
