import { Link, useLocation } from "react-router-dom";
// import { assets } from "../assets/assets";
import { FaHome, FaUtensils, FaPhoneAlt } from "react-icons/fa";



const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;


  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Menu", path: "/menu", icon: <FaUtensils /> },
    { name: "Contact", path: "/contact", icon: <FaPhoneAlt /> },
  ];

  return (
    <nav className="container bg-[#FF8282] fixed top-0 left-0 right-0 z-50 w-full mx-auto px-5 py-3 flex items-center justify-between shadow-md">

      {/* Logo */}
      <div>
        <Link to="/">
          {/* <img
            src={assets.logo}
            className="w-24 md:w-32"
            alt="Company Logo"
          /> */}
        </Link>
      </div>



      {/* Navigation Links */}
      <ul className="flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`flex items-center gap-2 font-medium text-gray-900 pb-1 transition-all duration-200 ${
                currentPath === link.path
                  ? "border-b-2 border-red-500"
                  : "hover:border-b-2 hover:border-gray-400"
              }`}>

              {/* Icon */}
              <span className="text-lg">{link.icon}</span>

              {/* Text */}
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;