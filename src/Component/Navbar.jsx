import { Link, useLocation } from "react-router-dom";
import image from "/images/logo.png";
import { FaHome, FaShopify, FaPhoneAlt, FaHistory } from "react-icons/fa";
import { GrFavorite, GrLogin } from "react-icons/gr";
import { BsCart } from "react-icons/bs";


const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Shop", path: "/shop", icon: <FaShopify /> },
    { name: "Contact", path: "/contact", icon: <FaPhoneAlt /> },
    { name: "Story", path: "/story", icon: <FaHistory /> },
  ];

  return (
    <nav className="mx-auto px-4 py-1 bg-[#FF8282] fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between shadow-lg">

      {/* Logo */}
      <div>
        <Link to="/">
          <img src={image} className="w-10 " alt="Company Logo" />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center justify-center gap-5">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link to={link.path} className={`flex items-center gap-1 font-medium text-gray-900  transition-all duration-200

            ${currentPath === link.path ? "border-b-2 border-red-500" : "hover:border-b-2 hover:border-gray-400"} `}>

              {/* Icon */}
              <span className="text-lg">{link.icon}</span>

              {/* Text */}
              {link.name}
            </Link>
          </li>
        ))}

      </ul>

      <div className="flex items-center justify-between gap-3">
        <Link to="/wishlist">
          <GrFavorite className="text-xl " />
        </Link>


        <Link to="/cart" className="relative inline-block">

      {/* Cart Icon */}
      <BsCart className="text-2xl" />

      {/* Badge */}
      <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full">
        0
      </span>

    </Link>


        <Link to="/login">
          <button className="flex gap-1 items-center p-1 rounded text-lg text-yellow-100 font-semibold bg-slate-600 hover:bg-slate-500">
            Login  <GrLogin className="text-xl" />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;