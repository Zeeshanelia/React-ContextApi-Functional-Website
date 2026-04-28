import { Link } from "react-router-dom";
import heroImg from "/images/hero.png";

const Header = () => {
  return (
    <section className="bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">

        <div className="flex flex-col-reverse md:ml-28 md:flex-row items-center justify-evenly gap-4">

          {/* Left Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 max-w-lg">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Classic Exclusive
            </h3>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Men Collections
            </h1>

            <p className="text-sm sm:text-base text-gray-600">
              Upto 40% OFF
            </p>

            <Link
              to="/shop"
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition mb-1"
            >
              Shop Now
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full flex justify-center">
            <img src={heroImg} alt="Men Collection"
              className="w-[250px] sm:w-[450px] md:w-[450px] lg:w-[250px] object-contain"/>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Header;