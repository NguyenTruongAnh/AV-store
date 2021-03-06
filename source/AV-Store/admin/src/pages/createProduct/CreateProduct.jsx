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
            setMess('Vui l??ng nh???p ?????y ????? th??ng tin v?? ch???n h??nh ???nh cho s???n ph???m!')
        }
    }

    const handleBack = () => {
        dispatch(clear())
    }
    return (
        <div className="create-product">
            <h1 className="create-product__title">Th??m s???n ph???m</h1>
            <Link className="link create-product__back" onClick={handleBack} to="/products">
                Quay l???i
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
                                    {/* T??n s???n ph???m */}
                                    <li className="create-product__item">
                                        <span>T??n s???n ph???m</span>
                                        <input type="text" placeholder="Nh???p t??n s???n ph???m" 
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </li>

                                    {/* M?? t??? s???n ph???m */}
                                    <li className="create-product__item">
                                        <span>M?? t??? s???n ph???m</span>
                                        <textarea type="text" placeholder="Nh???p m?? t??? s???n ph???m" rows="3" 
                                            value={desc}
                                            onChange={(e) => setDesc(e.target.value)}
                                        />
                                    </li>

                                    {/* Gi?? s???n ph???m */}
                                    <li className="create-product__item">
                                        <span>Gi?? b??n</span>
                                        <input type="number" placeholder="Nh???p gi?? b??n"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                        />
                                    </li>

                                    {/* Ph??n lo???i s???n ph???m */}
                                    <li className="create-product__item">
                                        <span>Ph??n lo???i</span>
                                        <select name="" id="" className="" onChange={(e) => handleSelectCategory(e.target.value)}>
                                            <option value="vest">??o Vest</option>
                                            <option value="pant">Qu???n</option>
                                            <option value="shoe">Gi??y</option>
                                            <option value="accessory">Ph??? ki???n</option>
                                        </select>
                                    </li>

                                    {/* M??u s???c s???n ph???m */}
                                    <li className="create-product__item">
                                        <span>M??u s???c</span>
                                        <input
                                            type="text"
                                            placeholder="Nh???p m??u s???c"
                                            value={color}
                                            onChange={(e) => setColor(e.target.value)}
                                        />
                                    </li>

                                    {/* K??ch th?????c s???n ph???m */}
                                    <li className="create-product__item">
                                        <span>K??ch th?????c</span>
                                        <input
                                            type="text"
                                            placeholder="Nh???p k??ch th?????c"
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
                                        X??c nh???n
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
