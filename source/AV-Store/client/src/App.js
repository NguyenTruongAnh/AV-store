import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/base.css'

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Register from "./pages/register/Register"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Contact from './pages/contact/Contact'
import Introduce from './pages/introduce/Introduce'
import Collection from './pages/collection/Collection'
import Detail from './pages/detail/Detail'
import Profile from './pages/profile/Profile'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Cart from './pages/cart/Cart'
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector(state => state.user.currentUser)

  return (
    <Router>
      <Header />
      <Routes >
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/introduce"
          element={<Introduce />}
        />

        <Route
          path="/collections"
          element={<Collection />}
        />

        <Route
          path="/products/:id"
          element={<Detail />}
        />

        <Route
          path="/cart/:id"
          element={<Cart />}
        />

        <Route 
          path="/profile/:id"
          element={<Profile />}
        />

        <Route
          path="/register"
          element= {user ? <Navigate to="/" /> : <Register />}
        />

        <Route
          path="/login"
          element= {user ? <Navigate to="/" /> : <Login />}
        />
      </Routes >
      <Footer />
    </Router>
  );
}

export default App;
