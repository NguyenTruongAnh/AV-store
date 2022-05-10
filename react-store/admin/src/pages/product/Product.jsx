import './product.css'
import './productResponsive.css'

import { Link } from 'react-router-dom'

export default function Product() {
    return (
        <div className="product">
            <h1 className="product-title">Danh sách sản phẩm</h1>
            <Link className="link product-create" to="/products/create">
                Thêm sản phẩm
            </Link>
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
                        <tr className="product-table__item">
                            <td className="product-table__item-id align-middle">00123</td>
                            <td className="product-table__item-view align-middle">
                                <img src="/images/products/ao1.jpg" alt="Product" />
                                <span>Áo Vest nam sieu dad sdqf qsa afsf q wq asfa sfqwf af asfqw fasfa</span>
                            </td>
                            <td className="product-table__item-status align-middle in-stock">Còn hàng</td>
                            <td className="product-table__item-price align-middle">12.000.000đ</td>
                            <td className="product-table__item-control align-middle">
                                <Link className="link" to="/products/edit/1">
                                    <i className="fa-solid fa-pen-to-square"></i>
                                </Link>
                                <i className="fa-solid fa-trash-can"></i>
                            </td>
                        </tr>
                        <tr className="product-table__item">
                            <td className="product-table__item-id align-middle">00123</td>
                            <td className="product-table__item-view align-middle">
                                <img src="/images/products/ao1.jpg" alt="Product" />
                                <span>Áo Vest nam sieu dad sdqf qsa afsf q wq asfa sfqwf af asfqw fasfa</span>
                            </td>
                            <td className="product-table__item-status align-middle out-stock">Hết hàng</td>
                            <td className="product-table__item-price align-middle">12.000.000đ</td>
                            <td className="product-table__item-control align-middle">
                                <Link className="link" to="/products/edit/1">
                                    <i className="fa-solid fa-pen-to-square"></i>
                                </Link>
                                <i className="fa-solid fa-trash-can"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
