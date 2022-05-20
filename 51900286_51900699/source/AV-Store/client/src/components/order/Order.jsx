import './order.css'
import './orderResponsive.css'

import { useEffect, useState } from 'react'
import { formatter } from '../../utils/formatMoney'
import axios from 'axios'

export default function Order({ productId, quantity, size}) {
    const [product, setProduct] = useState('')

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
        <div className="order">
            <div className="order-detail">
                <img className="order-img" src={product.img} alt="" />
                <div className="order-info">
                    <h5 className="order-name">{product.name}</h5>
                    <span className="order-quantity"><b>Số lượng:</b> {quantity}</span>
                    <span className="order-size"><b>Kích thước:</b> {size}</span>
                    <span className="order-color"><b>Màu sắc:</b> {product.color}</span>
                </div>
            </div>
            <div className="order-price">
                {formatter.format(product.price * quantity)}đ
            </div>
        </div>
    )
}
