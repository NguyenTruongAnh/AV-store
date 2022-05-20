import './product.css'
import './productResponsive.css'

import { Link } from 'react-router-dom'
import { formatter } from '../../utils/formatMoney'
export default function Product({ product }) {
    return (
        <div className="product">
            <Link className="link" to={`/products/${product._id}`}>
                <div className="d-flex justify-content-center">
                    <img src={product.img} alt="Image" className="product-img" />
                </div>
                <div className="product-info">
                    <div className="product-name">
                        {product.name}
                    </div>
                    <p className="product-price">
                        {formatter.format(product.price)}đ
                    </p>
                </div>
            </Link>
        </div>
    )
}