import './detail.css'
import './detailResponsive.css'

export default function Detail() {
    return (
        <div className="detail">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8 offset-2 offset-md-0 col-md-6 col-lg-4 offset-lg-1">
                        <img className="detail-img" src="/images/products/ao1.jpg" alt="" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="detail-info">
                            <h1 className="detail-title">
                                Áo vest nam xám
                            </h1>
                            <div className="detail-desc">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem doloremque optio iure, facilis esse corrupti numquam natus laborum repellendus vel totam fugit soluta? Officiis autem laborum magni harum modi nam!
                            </div>
                            <div className="detail-price">
                                12.000.000 đ
                            </div>
                            <ul className="detail-filters">
                                <li className="detail-filter">
                                    <div className="detail-filter__title">Màu sắc</div>
                                    <select className="detail-filter__list" name="" id="">
                                        <option value="">Đen</option>
                                        <option value="">Xanh đậm</option>
                                        <option value="">Xám</option>
                                    </select>
                                </li>

                                <li className="detail-filter">
                                    <div className="detail-filter__title">Kích thước</div>
                                    <select className="detail-filter__list" name="" id="">
                                        <option value="">XS</option>
                                        <option value="">S</option>
                                        <option value="">M</option>
                                        <option value="">L</option>
                                        <option value="">XL</option>
                                    </select>
                                </li>
                            </ul>
                            <div className="detail-control">
                                <div className="detail-control__container">
                                    <button className="detail-control__decrease btn">
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    <span className="detail-control__amount">1</span>
                                    <button className="detail-control__increase btn">
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>
                                <button className="btn detail-control__btn">Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}