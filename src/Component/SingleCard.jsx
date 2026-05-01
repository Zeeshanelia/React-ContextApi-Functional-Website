import { Link } from "react-router-dom";

const SingleCard = ({ id, name, image, category, oldPrice, offerPrice }) => {
  return (
    <div className="w-full max-w-[220px] bg-white border rounded-xl shadow-sm hover:shadow-md transition duration-300 p-1 flex flex-col">

      {/* Image */}
      <Link to={`/product/${id}`} className="overflow-hidden rounded-lg">
        <img src={image} alt={name} className="w-full h-36 object-contain hover:scale-105 transition duration-300"/>
      </Link>

      {/* Info */}
      <div className="mt-2 flex flex-col gap-1">
        <h2 className="text-sm font-semibold line-clamp-2">{name}</h2>
        <p className="text-xs text-gray-500">{category}</p>
      </div>

      {/* Price */}
      <div className="flex items-center gap-2 mt-2">
        <p className="text-base font-bold text-green-600"> ${offerPrice} </p>
        <p className="text-xs line-through text-gray-400"> ${oldPrice} </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2 mt-3">
        <button className="w-full bg-black text-white py-1.5 rounded-md hover:bg-gray-800 transition">
          Add to Cart
        </button>

        <button className="w-full bg-orange-500 text-white py-1.5 rounded-md hover:bg-orange-600 transition">
          Add to Wish
        </button>
      </div>
    </div>
  );
};

export default SingleCard;