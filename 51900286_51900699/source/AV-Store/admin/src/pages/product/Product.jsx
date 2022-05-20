import './product.css'
import './productResponsive.css'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, deleteProduct } from '../../redux/apiCalls'
import { formatter } from '../../utils/formatMoney'
import { Modal, Button } from 'react-bootstrap'
import { clear } from '../../redux/productRedux'
export default function Product() {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.product.products)
    const [cat, setCat] = useState('')
    const [filterProducts, setFilterProducts] = useState([])
    const [deleteProductId, setDeleteProductId] = useState('')
    const [deleteProductName, setDeleteProductName] = useState('')
    const [showModalDelete, setShowModalDelete] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const { error, success } = useSelector((state) => state.product)

    const handleCloseModalDelete = () => { 
        setDeleteProductId('')
        setDeleteProductName('')
        setShowModalDelete(false)
    }

    const handleShowModalDelete = (productId, productName) => {
        setDeleteProductId(productId)
        setDeleteProductName(productName)
        setShowModalDelete(true)
    }

    const handleConfirmModal = () => {
        deleteProduct(dispatch,deleteProductId)
        setShowModalDelete(false)
        setShowModal(true)
    }

    const handleClear = () => {
        dispatch(clear())
    }

    useEffect(() => {
        getProducts(dispatch)
    }, [dispatch])

    useEffect(() => {
        getProducts(dispatch)
        setFilterProducts(products.filter(product => product.category === cat))
    }, [showModal])

    useEffect(() => {
        setFilterProducts(products.filter(product => product.category === cat))
    }, [cat])

    return (
        <>
            <div className="product">
                <h1 className="product-title">Danh sách sản phẩm</h1>
                <div className="d-flex justify-content-between">
                    <Link className="link product-create" onClick={handleClear} to="/products/create">
                        Thêm sản phẩm
                    </Link>
                    <select name="" id="" className="product-category" onChange={(e) => setCat(e.target.value)}>
                        <option value="">Tất cả</option>
                        <option value="vest">Áo Vest</option>
                        <option value="pant">Quần</option>
                        <option value="shoe">Giày</option>
                        <option value="accessory">Phụ kiện</option>
                    </select>
                </div>
                <div className="table-responsive">
                    <table className="table product-table">
                        <thead>
                            <tr>
                                <th scope="col" >ID</th>
                                <th scope="col" style={{minWidth: "200px"}}>Sản phẩm</th>
                                <th scope="col" style={{minWidth: "120px"}}>Tình trạng</th>
                                <th scope="col" >Giá bán</th>
                                <th scope="col" style={{minWidth: "100px"}}>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cat ? filterProducts.map((product) => <tr className="product-table__item" key={product._id}>
                                <td className="product-table__item-id align-middle">{product._id}</td>
                                <td className="product-table__item-view align-middle">
                                    <img src={product.img} alt="Product" />
                                    <span>{product.name}</span>
                                </td>
                                <td className="product-table__item-status align-middle in-stock">{product.status}</td>
                                <td className="product-table__item-price align-middle">{formatter.format(product.price)}đ</td>
                                <td className="product-table__item-control align-middle">
                                    <Link className="link" to={`/products/edit/${product._id}`}>
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </Link>
                                    <i className="fa-solid fa-trash-can" onClick={() => handleShowModalDelete(product._id,product.name)}></i>
                                </td>
                            </tr>) : products.map((product) => <tr className="product-table__item" key={product._id}>
                                <td className="product-table__item-id align-middle">{product._id}</td>
                                <td className="product-table__item-view align-middle">
                                    <img src={product.img} alt="Product" />
                                    <span>{product.name}</span>
                                </td>
                                <td className= {product.status === "Còn hàng" ? 
                                        `product-table__item-status align-middle in-stock` : 
                                        `product-table__item-status align-middle out-stock`}>
                                        {product.status}
                                </td>
                                <td className="product-table__item-price align-middle">{formatter.format(product.price)}đ</td>
                                <td className="product-table__item-control align-middle">
                                    <Link className="link" to={`/products/edit/${product._id}`}>
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </Link>
                                    <i className="fa-solid fa-trash-can" onClick={() => handleShowModalDelete(product._id,product.name)}></i>
                                </td>
                            </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal show={showModalDelete} onHide={handleCloseModalDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>Xóa sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có thật sự muốn xóa sản phẩm: <strong>{deleteProductName}</strong> không?</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleConfirmModal}>
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Xóa sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body>{error ? error : success}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => setShowModal(false)}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
