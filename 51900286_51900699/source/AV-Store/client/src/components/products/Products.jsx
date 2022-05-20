import './products.css'
import Product from '../product/Product'
import { useEffect, useState } from 'react'
import axios from "axios";
export default function Products({ cat }) {
    const [products, setProducts] = useState([])
    const [showBtn, setShowBtn] = useState(true)
    const handleSeeMore = () => {
        const getProductsMore = async () => {
            try {
                const res = await axios.get( `/products?category=${cat}&start=${products.length}`);
                if(res.data.length < 8) {
                    setShowBtn(false)
                }
                setProducts(prevProducts => [...prevProducts, ...res.data])
                
            } catch (err) {}
        }

        getProductsMore()
    }
    
    useEffect(()=> {
        const getProducts = async () => {
            try {
                const res = await axios.get( `/products?category=${cat}`);
                setProducts(res.data)
            } catch (err) {}
        }

        getProducts()
    }, [])
    return (
        <div className="products">
            <div className="container-fluid px-0">
                <div className="row mx-0">
                    { products.map((product) =>
                        <div className="col-6 col-lg-4 col-xl-3 mb-3"
                            key={product._id}>
                            <Product product={product} />
                        </div>)
                    }
                    <div className="col-6 col-lg-4 col-xl-3 mb-3">
                        <div className="h-100 d-flex align-items-center justify-content-center">
                            {showBtn && 
                                <button className="btn btn-outline-primary" 
                                    onClick={handleSeeMore}>
                                        Xem thêm
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}