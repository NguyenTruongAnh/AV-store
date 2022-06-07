import 'bootstrap/dist/css/bootstrap.min.css'
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
import OrderDetail from './pages/orderDetail/OrderDetail'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
function App() {
  const [viewInfo, setViewInfo] = useState('')
  const user = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    setViewInfo(`/${window.location.href.split("/")[3]}`)
  }, [viewInfo])

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/login"
            element= {user ? <Navigate to="/" /> : <Login />}
          />

          <Route
            path="/"
            element={!user ? <Navigate to="/login" /> : 
                <>
                <Header />
                <div className="content">
                    <Sitebar viewInfo={viewInfo} setViewInfo={setViewInfo} />
                    <Home />
                </div>
                </>}
          />

          <Route
            path="/products"
            element={!user ? <Navigate to="/login" /> :  <>
              <Header />
              <div className="content">
                <Sitebar viewInfo={viewInfo} setViewInfo={setViewInfo} />
                <Product />
              </div>
            </>}
          />

          <Route
            path="/products/create"
            element={!user ? <Navigate to="/login" /> : <>
              <Header />
              <div className="content">
                <Sitebar viewInfo={viewInfo} setViewInfo={setViewInfo} />
                <CreateProduct />
              </div>
            </>}
          />

          <Route
            path="/products/edit/:id"
            element={!user ? <Navigate to="/login" /> :  <>
              <Header />
              <div className="content">
                <Sitebar viewInfo={viewInfo} setViewInfo={setViewInfo} />
                <EditProduct />
              </div>
            </>}
          />

          <Route
            path="/orders"
            element={!user ? <Navigate to="/login" /> : <>
              <Header />
              <div className="content">
                <Sitebar viewInfo={viewInfo} setViewInfo={setViewInfo} />
                <Order />
              </div>
            </>}
          />

          <Route
            path="/orders/detail/:id"
            element={!user ? <Navigate to="/login" /> :  <>
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
