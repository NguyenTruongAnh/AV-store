import './editProduct.css'
import './editProductResponsive.css'

import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editProduct } from "../../redux/apiCalls";
import { clear } from '../../redux/productRedux'

export default function EditProduct() {
    const location = useLocation();
    const productId = location.pathname.split("/")[3];
    const product = useSelector((state) =>
        state.product.products.find(product => product._id === productId)
    );
    const [image, setImage] = useState(product.img)
    const [file, setFile] = useState(null)
    const [name, setName] = useState(product.name)
    const [desc, setDesc] = useState(product.desc)
    const [price, setPrice] = useState(product.price)
    const [color, setColor] = useState(product.color)
    const [category, setCategory] = useState(product.category)
    const [status, setStatus] = useState(product.status)
    const [size, setSize] = useState('')
    const [sizes, setSizes] = useState(product.size)
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
                setSizes([])
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

    const handleEditProduct = () => {
        if(file && name && desc && price && color && sizes && status) {
            const p = { 
                name,
                desc, 
                img: file,
                price,
                category,
                color,
                size: sizes,
                status
            };
            editProduct(dispatch, p, productId);
        } else {
            setMess('Vui l??ng nh???p ?????y ????? th??ng tin v?? ch???n h??nh ???nh cho s???n ph???m!')
        }
    }

    const handleBack = () => {
        dispatch(clear())
    }

    return (
        <div className="edit-product">
            <h1 className="edit-product__title">Ch???nh s???a s???n ph???m</h1>
            <Link className="link edit-product__back" onClick={handleBack} to="/products">
                Quay l???i
            </Link>
            <div className="edit-product__content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 offset-xl-1 col-xl-4">
                            <div className="edit-product__img">
                                <img
                                    className="edit-product__img-view"
                                    src= {image}
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
                                    onChange={handleChangeImage}
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-5">
                            <div className="edit-product__form">
                                <ul className="edit-product__list">
                                    {/* T??n s???n ph???m */}
                                    <li className="edit-product__item">
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
                                    <li className="edit-product__item">
                                        <span>Gi?? b??n</span>
                                        <input type="number" placeholder="Nh???p gi?? b??n" 
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                        />
                                    </li>

                                    {/* Ph??n lo???i s???n ph???m */}
                                    <li className="edit-product__item">
                                        <span>Ph??n lo???i</span>
                                        <select name="" id="" className="" 
                                            onChange={(e) => handleSelectCategory(e.target.value)}
                                            value={category}>
                                            <option value="vest">??o Vest</option>
                                            <option value="pant">Qu???n</option>
                                            <option value="shoe">Gi??y</option>
                                            <option value="accessory">Ph??? ki???n</option>
                                        </select>
                                    </li>

                                    {/* T??nh tr???ng s???n ph???m */}
                                    <li className="edit-product__item">
                                        <span>T??nh tr???ng</span>
                                        <select name="" id="" className="" value={status}
                                            onChange={(e) => setStatus(e.target.value)}>
                                            <option value="C??n h??ng">C??n h??ng</option>
                                            <option value="H???t h??ng">H???t h??ng</option>
                                        </select>
                                    </li>

                                    {/* M??u s???c s???n ph???m */}
                                    <li className="edit-product__item">
                                        <span>M??u s???c</span>
                                        <input
                                            type="text"
                                            placeholder="Nh???p m??u s???c"
                                            value={color}
                                            onChange={(e) => setColor(e.target.value)}
                                        />
                                    </li>

                                    {/* K??ch th?????c s???n ph???m */}
                                    <li className="edit-product__item">
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
                                    <button className="edit-product__confirm btn btn-success"
                                        onClick={handleEditProduct}
                                        disabled={isFetching}>
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
