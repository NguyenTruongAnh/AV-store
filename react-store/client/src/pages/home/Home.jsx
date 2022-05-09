import './home.css'
import './homeResponsive.css'

// import { useState, useEffect } from 'react'
// import { useLocation } from 'react-router'
// import axios from 'axios'
import Slider from '../../components/slider/Slider'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Home() {
    return (
        <>
            <Slider />
            <div className="home container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-9">
                        <div className="home-container">
                            <div className="home-title">
                                <span>Danh sách sản phẩm:</span>
                                <a href="#">Xem chi tiết</a>
                            </div>
                            <div className="container-fluid home-list">
                                <div className="row">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="home-item">
                                            <img src="/images/home/home2.jpg" alt="Áo" />
                                            <span>Áo</span>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="home-item">
                                            <img src="/images/home/home3.jpg" alt="Quần" />
                                            <span>Quần</span>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="home-item">
                                            <img src="/images/home/home4.jpg" alt="Giày" />
                                            <span>Giày</span>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="home-item">
                                            <img src="/images/home/home5.jpg" alt="Phụ kiện" />
                                            <span>Phụ kiện</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="home-title">
                                <span>Đánh giá sản phẩm:</span>
                            </div>
                            <div id="carouselExampleIndicators" className="carousel slide mt-4" data-ride="carousel">
                                <ol class="carousel-indicators mb-0">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="home-rating">
                                            <img className="home-rating__avatar" src="https://symbols.vn/wp-content/uploads/2021/12/Dung-bo-lo-hinh-dai-dien-avt-chibi-dang-yeu-de-thuong.jpg" alt="Avatar" />
                                            <div className="home-rating__info">
                                                <h5>Nguyễn Trường Anh</h5>
                                                <div className="home-rating__starts">
                                                    <i class="fa-solid fa-star active"></i>
                                                    <i class="fa-solid fa-star active"></i>
                                                    <i class="fa-solid fa-star active"></i>
                                                    <i class="fa-solid fa-star active"></i>
                                                    <i class="fa-solid fa-star active"></i>
                                                </div>
                                                <p>Sản phẩm có chất lượng rất tốt, mình sẽ tiếp tục ủng hộ Anh Vũ Store trong tương lai</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="home-rating">
                                            <img className="home-rating__avatar" src="https://cdn.chanhtuoi.com/uploads/2022/01/hinh-avatar-nam-deo-kinh.jpg" alt="Avatar" />
                                            <div className="home-rating__info">
                                                <h5>Nguyễn Võ Hoàng Vũ</h5>
                                                <div className="home-rating__starts">
                                                    <i class="fa-solid fa-star active"></i>
                                                    <i class="fa-solid fa-star active"></i>
                                                    <i class="fa-solid fa-star active"></i>
                                                    <i class="fa-solid fa-star active"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                                <p>Giao hàng rất nhanh, chất lượng sản phẩm mình rất ưng ý</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="home-rating">
                                            <img className="home-rating__avatar" src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-bts-chibi-cuc-chat.jpg" alt="Avatar" />
                                            <div className="home-rating__info">
                                                <h5>Tăng Kiến Trung</h5>
                                                <div className="home-rating__starts">
                                                    <i class="fa-solid fa-star active"></i>
                                                    <i class="fa-solid fa-star active"></i>
                                                    <i class="fa-solid fa-star active"></i>
                                                    <i class="fa-solid fa-star active"></i>
                                                    <i class="fa-solid fa-star active"></i>
                                                </div>
                                                <p>Chất liệu vãi rất thoải mái và chất lượng</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-lg-block col-lg-3">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </>
    )
}
