import './App.css'
import './AppResponsive.css'

import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Product from "./pages/product/Product"
import CreateProduct from "./pages/createProduct/CreateProduct"
import EditProduct from "./pages/editProduct/EditProduct"
import Order from "./pages/order/Order"
import Header from "./components/header/Header";
import Sitebar from "./components/sitebar/Sitebar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import { useState, useEffect } from 'react'
import OrderDetail from './pages/orderDetail/OrderDetail'

function App() {
  const [viewInfo, setViewInfo] = useState('')
  const admin = true

  useEffect(() => {
    setViewInfo(`/${window.location.href.split("/")[3]}`)
  }, [viewInfo])

  return (
    <>
      <Router>
        <Routes >
          <Route
            path="/login"
            // element={user ? <Home /> : <Login />}
            element={<Login />}
          />

          <Route
            path="/"
            element={<>
              <Header />
              <div className="content">
                <Sitebar viewInfo={viewInfo} setViewInfo={setViewInfo} />
                <Home />
              </div>
            </>}
          />

          <Route
            path="/products"
            element={<>
              <Header />
              <div className="content">
                <Sitebar viewInfo={viewInfo} setViewInfo={setViewInfo} />
                <Product />
              </div>
            </>}
          />

          <Route
            path="/products/create"
            element={<>
              <Header />
              <div className="content">
                <Sitebar viewInfo={viewInfo} setViewInfo={setViewInfo} />
                <CreateProduct />
              </div>
            </>}
          />

          <Route
            path="/products/edit/:id"
            element={<>
              <Header />
              <div className="content">
                <Sitebar viewInfo={viewInfo} setViewInfo={setViewInfo} />
                <EditProduct />
              </div>
            </>}
          />

          <Route
            path="/orders"
            element={<>
              <Header />
              <div className="content">
                <Sitebar viewInfo={viewInfo} setViewInfo={setViewInfo} />
                <Order />
              </div>
            </>}
          />

          <Route
            path="/orders/detail/:id"
            element={<>
              <Header />
              <div className="content">
                <Sitebar viewInfo={viewInfo} setViewInfo={setViewInfo} />
                <OrderDetail />
              </div>
            </>}
          />

        </Routes >
      </Router>
    </>
  );
}

export default App;
