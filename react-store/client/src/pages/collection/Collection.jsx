import './collection.css'
import './collectionResponsive.css'
import Products from '../../components/products/Products'

export default function Collection() {
    return (
        <div className="collection">
            <div className="collection-titles">
                <span className="collection-title collection-title--sm">Danh mục sản phẩm</span>
                <span className="collection-title collection-title--lg">Anh Vũ Store</span>
            </div>
            <ul className="collection-list">
                {/* Bộ sưu tập áo */}
                <li className="collection-item">
                    <h2 className="collection-item__title">Áo Vest:</h2>
                    <div className="collection-item__content">
                        <div className="container-fluid px-0">
                            <div className="row">
                                <div className="col-0 d-none col-md-4 col-xl-3 d-md-flex justify-content-center">
                                    <img className="collection-item__img" src="/images/products/ao0.jpg" alt="" />
                                </div>
                                <div className="col-12 col-md-8 col-xl-9 px-0">
                                    <Products type={"ao1.jpg"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                {/* Bộ sưu tập quần */}
                <li className="collection-item">
                    <h2 className="collection-item__title">Quần Tây:</h2>
                    <div className="collection-item__content">
                        <div className="container-fluid px-0">
                            <div className="row">
                                <div className="col-0 d-none col-md-4 col-xl-3 d-md-flex justify-content-center">
                                    <img className="collection-item__img" src="/images/products/quan0.jpg" alt="" />
                                </div>
                                <div className="col-12 col-md-8 col-xl-9 px-0">
                                    <Products type={"quan1.jpg"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                {/* Bộ sưu tập giày */}
                <li className="collection-item">
                    <h2 className="collection-item__title">Giày Tây:</h2>
                    <div className="collection-item__content">
                        <div className="container-fluid px-0">
                            <div className="row">
                                <div className="col-0 d-none col-md-4 col-xl-3 d-md-flex justify-content-center">
                                    <img className="collection-item__img" src="/images/products/giay0.jpg" alt="" />
                                </div>
                                <div className="col-12 col-md-8 col-xl-9 px-0">
                                    <Products type={"giay1.jpg"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                {/* Bộ sưu tập phụ kiện */}
                <li className="collection-item">
                    <h2 className="collection-item__title">Phụ kiện:</h2>
                    <div className="collection-item__content">
                        <div className="container-fluid px-0">
                            <div className="row">
                                <div className="col-0 d-none col-md-4 col-xl-3 d-md-flex justify-content-center">
                                    <img className="collection-item__img" src="/images/products/phukien0.jpg" alt="" />
                                </div>
                                <div className="col-12 col-md-8 col-xl-9 px-0">
                                    <Products type={"phukien1.jpg"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
