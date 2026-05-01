import { Link } from "react-router-dom";
import { assets } from "../assets/asset";

const Deal = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around  p-4">

      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center gap-3">
        <h1 className="text-4xl font-bold text-gray-900">
          Deal of the Month
        </h1>

        <p className="text-lg text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </p>

        <Link
          to="/shop"
          className="bg-black text-white px-6 py-2 rounded-md"
        >
          View All Products
        </Link>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={assets.slide1}
          alt="deal"
          className="max-w-full h-96 object-contain md:rounded-full md:p-6"
        />
      </div>

    </div>
  );
};

export default Deal;