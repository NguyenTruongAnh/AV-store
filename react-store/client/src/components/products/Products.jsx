import './products.css'
import Product from '../product/Product'

export default function Products({ type }) {
    return (
        <div className="products">
            <div className="container-fluid px-0">
                <div className="row mx-0">
                    <div className="col-6 col-lg-4 col-xl-3 mb-3">
                        <Product type={type} />
                    </div>
                    <div className="col-6 col-lg-4 col-xl-3 mb-3">
                        <Product type={type} />
                    </div>
                    <div className="col-6 col-lg-4 col-xl-3 mb-3">
                        <Product type={type} />
                    </div>
                    <div className="col-6 col-lg-4 col-xl-3 mb-3">
                        <Product type={type} />
                    </div>
                    <div className="col-6 col-lg-4 col-xl-3 mb-3">
                        <Product type={type} />
                    </div>
                    <div className="col-6 col-lg-4 col-xl-3 mb-3">
                        <div className="h-100 d-flex align-items-center justify-content-center">
                            <button className="btn btn-outline-primary">Xem thêm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}