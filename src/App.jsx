import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Component/Navbar"
import CartPage from './Page/CartPage'
import Home from './Page/Home'


export default function App() {
  return (

      <Router>
        <div className="min-h-screen bg-gray-50">

          <Navbar />

          <main className="container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/about" element={ <div className="p-8 text-center">About Page - Coming Soon</div>} />
            </Routes>
          </main>
        </div>
      </Router>

  );
}
