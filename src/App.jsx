import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Component/Navbar"
import Cart from './Page/Cart'
import Home from './Page/Home'
import CheckOut from './Page/CheckOut'
import Login from './Page/Login'
import SignUp from './Page/SignUp'
import WishList from './Page/WishList'
import Shop from './Page/Shop'
import Story from './Page/Story'
import { ProductList } from "./Component/ProductList";


export default function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen py-14 w-full">
        <Navbar />

        <main className=" ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/story" element={<Story />} />
            <Route path="/Product/:id" element={<ProductList />} />
            <Route path="*" element={<div className="p-8 text-center">Not Exist Page - 404 </div>} />
          </Routes>
        </main>
      </div>
    </Router>

  );
}
