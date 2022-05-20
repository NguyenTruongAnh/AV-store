import './createProduct.css'
import './createProductResponsive.css'

import { useState } from 'react'
import { createProduct } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { clear } from '../../redux/productRedux'
import { Link } from 'react-router-dom'

export default function CreateProduct() {
    const [image, setImage] = useState(null)
    const [file, setFile] = useState(null)
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('vest')
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')
    const [sizes, setSizes] = useState(['S', 'M', 'L', 'XL', '2XL', '3XL'])
    const [mess, setMess] = useState('')
    const dispatch = useDispatch();
    const { isFetching, error, success } = useSelector((state) => state.product);

    const handleChangeImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0])
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    }

    const handleSelectCategory = (type) => {
        switch (type) {
            case 'vest':
                setSizes(['S', 'M', 'L', 'XL', '2XL', '3XL'])
                break;
            case 'pant':
                setSizes(['29', '30', '31', '32', '33'])
                break;
            case 'shoe':
                setSizes(['39', '40', '41', '42', '43'])
                break;
            default:
                setSizes('')
        }

        setCategory(type)
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

    const handleCreateProduct = () => {
        if(file && name && desc && price && color && sizes) {
            const product = { 
                name,
                desc, 
                img: file,
                price,
                category,
                color,
                size: sizes
            };
            createProduct(dispatch, product);
            setName('')
            setDesc('')
            setPrice('')
            setColor('')
            setImage(null)
        } else {
            setMess('Vui lòng nhập đầy đủ thông tin và chọn hình ảnh cho sản phẩm!')
        }
    }

    const handleBack = () => {
        dispatch(clear())
    }
    return (
        <div className="create-product">
            <h1 className="create-product__title">Thêm sản phẩm</h1>
            <Link className="link create-product__back" onClick={handleBack} to="/products">
                Quay lại
            </Link>
            <div className="create-product__content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 offset-xl-1 col-xl-4">
                            <div className="create-product__img">
                                <img
                                    className="create-product__img-view"
                                    src={image ? image : "http://localhost:5000/images/ao1.jpg"}
                                    alt="Product"
                                />
                                <label htmlFor="create-product__img-file" className="create-product__img-icon">
                                    <i className="fas fa-camera"></i>
                                </label>
                                <input
                                    type="file"
                                    id="create-product__img-file"
                                    className="create-product__img-file"
                                    accept="image/*"
                                    onChange={handleChangeImage}
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-5">
                            <div className="create-product__form">
                                <ul className="create-product__list">
                                    {/* Tên sản phẩm */}
                                    <li className="create-product__item">
                                        <span>Tên sản phẩm</span>
                                        <input type="text" placeholder="Nhập tên sản phẩm" 
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </li>

                                    {/* Mô tả sản phẩm */}
                                    <li className="create-product__item">
                                        <span>Mô tả sản phẩm</span>
                                        <textarea type="text" placeholder="Nhập mô tả sản phẩm" rows="3" 
                                            value={desc}
                                            onChange={(e) => setDesc(e.target.value)}
                                        />
                                    </li>

                                    {/* Giá sản phẩm */}
                                    <li className="create-product__item">
                                        <span>Giá bán</span>
                                        <input type="number" placeholder="Nhập giá bán"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                        />
                                    </li>

                                    {/* Phân loại sản phẩm */}
                                    <li className="create-product__item">
                                        <span>Phân loại</span>
                                        <select name="" id="" className="" onChange={(e) => handleSelectCategory(e.target.value)}>
                                            <option value="vest">Áo Vest</option>
                                            <option value="pant">Quần</option>
                                            <option value="shoe">Giày</option>
                                            <option value="accessory">Phụ kiện</option>
                                        </select>
                                    </li>

                                    {/* Màu sắc sản phẩm */}
                                    <li className="create-product__item">
                                        <span>Màu sắc</span>
                                        <input
                                            type="text"
                                            placeholder="Nhập màu sắc"
                                            value={color}
                                            onChange={(e) => setColor(e.target.value)}
                                        />
                                    </li>

                                    {/* Kích thước sản phẩm */}
                                    <li className="create-product__item">
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
                                {error && (<div className="d-flex justify-content-center text-danger">
                                    {error}
                                </div>)}
                                {mess && (<div className="d-flex justify-content-center text-danger">
                                    {mess}
                                </div>)}
                                {success && (<div className="d-flex justify-content-center text-success">
                                    {success}
                                </div>)}
                                <div className="d-flex justify-content-center">
                                    <button className="create-product__confirm btn btn-success"
                                            onClick={handleCreateProduct} disabled={isFetching}>
                                        Xác nhận
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
