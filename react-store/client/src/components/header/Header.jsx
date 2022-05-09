// import { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { Context } from '../../context/Context';
import { useState } from 'react';
import './header.css'
import './headerResponsive.css'

export default function Header() {
    const [isOpenMenu, handleOpenMenu] = useState(false)
    const [isLogin, hanleLogin] = useState(true)

    return (
        <div className="header">
            <div className="container-fluid h-100">
                <div className="row h-100">
                    {/* Header Mobile */}
                    <div className="col-4 col-lg-0 d-block d-lg-none">
                        <div className="header-mobile">
                            <i
                                className="header-icon fa-solid fa-bars"
                                onClick={() => handleOpenMenu(!isOpenMenu)}
                            >
                            </i>
                            <div
                                className={isOpenMenu ? "header-mobile__content active" : "header-mobile__content"}
                            >
                                <div className="header-mobile__nav">
                                    <div className="header-mobile__nav-heading">
                                        <div className="header-logo">
                                            <div className="header-logo__img"></div>
                                        </div>
                                        <i
                                            className="fa-solid fa-xmark"
                                            onClick={() => handleOpenMenu(false)}
                                        ></i>
                                    </div>
                                    <ul className="header-mobile__nav-list">
                                        <li
                                            className="header-mobile__nav-item"
                                            onClick={() => handleOpenMenu(false)}
                                        >
                                            <Link className="link" to="/">Trang chủ</Link>
                                        </li>
                                        <li
                                            className="header-mobile__nav-item"
                                            onClick={() => handleOpenMenu(false)}
                                        >
                                            <Link className="link" to="/introduce">Giới thiệu</Link>
                                        </li>
                                        <li
                                            className="header-mobile__nav-item"
                                            onClick={() => handleOpenMenu(false)}
                                        >
                                            <Link className="link" to="/collections">Sản phẩm</Link>
                                        </li>
                                        <li
                                            className="header-mobile__nav-item"
                                            onClick={() => handleOpenMenu(false)}
                                        >
                                            <Link className="link" to="/contact">Liên hệ</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="header-mobile__overlay"
                                    onClick={() => handleOpenMenu(false)}
                                >
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Header Left */}
                    <div className="col-4 col-lg-3 px-0">
                        <div className="header-left">
                            <Link className="link" to="/">
                                <div className="header-logo">
                                    <div className="header-logo__img"></div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Header Center */}
                    <div className="col-0 col-lg-6 d-none d-lg-block">
                        <div className="header-center">
                            <ul className="header-list">
                                <li className="header-list__item">
                                    <Link className="link" to="/">Trang chủ</Link>
                                </li>
                                <li className="header-list__item">
                                    <Link className="link" to="/introduce">Giới thiệu</Link>
                                </li>
                                <li className="header-list__item">
                                    <Link className="link" to="/collections">Sản phẩm</Link>
                                </li>
                                <li className="header-list__item">
                                    <Link className="link" to="/contact">Liên hệ</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Header Right */}
                    <div className="col-4 col-lg-3">
                        <div className="header-right">
                            <ul className="header-list">
                                {isLogin ? (
                                    <>
                                        <Link className="link" to="/cart/1"><i className="header-icon fa-solid fa-cart-shopping"></i></Link>
                                        <Link className="link" to="/profile/1">
                                            <img className="header-img" src="https://cdn.chanhtuoi.com/uploads/2022/01/hinh-avatar-nam-deo-kinh.jpg" alt="Avatar" />
                                        </Link>
                                    </>
                                ) : (
                                    <li className="header-list__item">
                                        <Link className="link" to="/login">Đăng nhập</Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
