import './editProduct.css'
import './editProductResponsive.css'

import { Link } from 'react-router-dom'

import { useState } from 'react'

export default function EditProduct() {
    const [productType, setProductType] = useState('shirt')
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')
    const [colors, setColors] = useState([])
    const [sizes, setSizes] = useState(['S', 'M', 'L', 'XL', '2XL', '3XL'])

    const handleSelectProductType = (type) => {
        switch (type) {
            case 'shirt':
                setSizes(['S', 'M', 'L', 'XL', '2XL', '3XL'])
                break;
            case 'pant':
                setSizes(['29', '30', '31', '32', '33'])
                break;
            case 'shoe':
                setSizes(['39', '40', '41', '42', '43'])
                break;
            default:
                setSizes([])
        }

        setProductType(type)
    }

    const handleAddColor = (e) => {
        const keyCode = e.keyCode

        if (keyCode == 13) {
            if (color.trim()) {
                setColors((prev) => {
                    const newColors = [...prev]
                    newColors.push(color.trim())

                    return newColors
                })
            }

            setColor("")
        }
    }

    const handleDeleteColor = (index) => {
        setColors((prev) => {
            const newColors = [...prev]
            newColors.splice(index, 1)

            return newColors
        })
    }

    const handleAddSize = (e) => {
        const keyCode = e.keyCode

        if (keyCode == 13) {
            if (size.trim()) {
                setSizes((prev) => {
                    const newSizes = [...prev]
                    newSizes.push(size.trim())

                    return newSizes
                })
            }

            setSize("")
        }
    }

    const handleDeleteSize = (index) => {
        setSizes((prev) => {
            const newSizes = [...prev]
            newSizes.splice(index, 1)

            return newSizes
        })
    }

    return (
        <div className="edit-product">
            <h1 className="edit-product__title">Chỉnh sửa sản phẩm</h1>
            <Link className="link edit-product__back" to="/products">
                Quay lại
            </Link>
            <div className="edit-product__content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 offset-xl-1 col-xl-4">
                            <div className="edit-product__img">
                                <img
                                    className="edit-product__img-view"
                                    src="/images/products/ao1.jpg"
                                    alt="Product"
                                />
                                <label htmlFor="edit-product__img-file" className="edit-product__img-icon">
                                    <i className="fas fa-camera"></i>
                                </label>
                                <input
                                    type="file"
                                    id="edit-product__img-file"
                                    className="edit-product__img-file"
                                    accept="image/*"
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-5">
                            <div className="edit-product__form">
                                <ul className="edit-product__list">
                                    {/* Tên sản phẩm */}
                                    <li className="edit-product__item">
                                        <span>Tên sản phẩm</span>
                                        <input type="text" placeholder="Nhập tên sản phẩm" />
                                    </li>

                                    {/* Giá sản phẩm */}
                                    <li className="edit-product__item">
                                        <span>Giá bán</span>
                                        <input type="number" placeholder="Nhập giá bán" />
                                    </li>

                                    {/* Phân loại sản phẩm */}
                                    <li className="edit-product__item">
                                        <span>Phân loại</span>
                                        <select name="" id="" className="" onChange={(e) => handleSelectProductType(e.target.value)}>
                                            <option value="shirt">Áo</option>
                                            <option value="pant">Quần</option>
                                            <option value="shoe">Giày</option>
                                            <option value="accessory">Phụ kiện</option>
                                        </select>
                                    </li>

                                    {/* Tình trạng sản phẩm */}
                                    <li className="edit-product__item">
                                        <span>Tình trạng</span>
                                        <select name="" id="" className="">
                                            <option value="in-stock">Còn hàng</option>
                                            <option value="out-stock">Hết hàng</option>
                                        </select>
                                    </li>

                                    {/* Màu sắc sản phẩm */}
                                    <li className="edit-product__item">
                                        <span>Màu sắc</span>
                                        <input
                                            type="text"
                                            placeholder="Nhập màu sắc"
                                            value={color}
                                            onChange={(e) => setColor(e.target.value)}
                                            onKeyUp={(e) => handleAddColor(e)}
                                        />
                                        {colors && (
                                            <ul>
                                                {colors.map((color, index) => (
                                                    <li key={index}>
                                                        {color}
                                                        <span
                                                            onClick={() => handleDeleteColor(index)}
                                                        >
                                                            <i className="fa-solid fa-xmark"></i>
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>

                                    {/* Kích thước sản phẩm */}
                                    <li className="edit-product__item">
                                        <span>Kích thước</span>
                                        <input
                                            type="text"
                                            placeholder="Nhập kích thước"
                                            value={size}
                                            onChange={(e) => setSize(e.target.value)}
                                            onKeyUp={(e) => handleAddSize(e)}
                                        />
                                        {sizes && (
                                            <ul>
                                                {sizes.map((size, index) => (
                                                    <li key={index}>
                                                        {size}
                                                        <span
                                                            onClick={() => handleDeleteSize(index)}
                                                        >
                                                            <i className="fa-solid fa-xmark"></i>
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-center">
                                    <button className="edit-product__confirm btn btn-success">Xác nhận</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
