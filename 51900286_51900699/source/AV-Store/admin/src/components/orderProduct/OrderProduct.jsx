import './orderProduct.css'
import './orderProductResponsive.css'
import { useEffect, useState } from 'react'
import { formatter } from '../../utils/formatMoney'
import axios from "axios"
export default function OrderProduct({ productId, quantity, size }) {
    const [product, setProduct] = useState('')

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get("/products/" + productId)
                setProduct(res.data)
            } catch(err) {}
        }

        getProduct()
    },[])
    return (
        <div className="order-product">
            <div className="order-product__left">
                <img className="order-product__img" src={product.img} alt="" />
                <div className="order-product__info">
                    <h5 className="order-product__name">{product.name}</h5>
                    <span className="order-product__quantity"><b>Số lượng:</b> {quantity}</span>
                    <span className="order-product__size"><b>Kích thước:</b> {size}</span>
                    <span className="order-product__color"><b>Màu sắc:</b> {product.color}</span>
                </div>
            </div>
            <div className="order-product__right">
                {formatter.format(product.price * quantity)}đ
            </div>
        </div>
    )
}
