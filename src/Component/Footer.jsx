import { Link } from "react-router-dom";
import logo from "/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Column 1 - Brand */}
        <div>
          <img src={logo} alt="Logo" className="w-32 mb-4" />
          <p className="text-sm mb-2">
            Your trusted delivery platform. Fast, and reliable.
          </p>
          <p className="text-sm">📍 Islamabad, Pakistan</p>
          <p className="text-sm">📧 support@yourapp.com</p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-4">Quick Links</h2>
          <div className="flex flex-col gap-2">
            <Link to="/" className="hover:text-green-400">Home</Link>
            <Link to="/about" className="hover:text-green-400">About</Link>
            <Link to="/contact" className="hover:text-green-400">Contact</Link>
            <Link to="/cart" className="hover:text-green-400">Cart</Link>
          </div>
        </div>

        {/* Column 3 - Help / Policies */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-4">Support</h2>
          <div className="flex flex-col gap-2">
            <p className="hover:text-green-400 cursor-pointer">FAQ</p>
            <p className="hover:text-green-400 cursor-pointer">Privacy Policy</p>
            <p className="hover:text-green-400 cursor-pointer">Terms & Conditions</p>
            <p className="hover:text-green-400 cursor-pointer">Help Center</p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} YourApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;