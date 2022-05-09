import './product.css'
import './productResponsive.css'

import { Link } from 'react-router-dom'

export default function Product({ type }) {
    return (
        <div className="product">
            <Link className="link" to="/products/1">
                <div className="d-flex justify-content-center">
                    <img src={`/images/products/${type}`} alt="Image" className="product-img" />
                </div>
                <div className="product-info">
                    <div className="product-name">
                        Áo vest nam xanh dương thanh lịch
                    </div>
                    <p className="product-price">
                        12.000.000đ
                    </p>
                </div>
            </Link>
        </div>
    )
}