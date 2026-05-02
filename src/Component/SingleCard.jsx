import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppStore } from "../context/AppStore";

const SingleCard = ({id, name, image, category, oldPrice, offerPrice,}) => {
  const { addToCart } = useContext(AppStore);


  const handleAddToCart = () => {
    addToCart({
      id: Number(id),
      name,
      image,
      category,
      oldPrice,
      offerPrice,
    });
  };

  return (
    <div className="w-full max-w-[220px] bg-white border rounded-xl shadow-sm hover:shadow-md transition p-2 flex flex-col">

      {/* IMAGE */}
      <Link to={`/product/${Number(id)}`}>
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover rounded-md"
        />
      </Link>

      {/* INFO */}
      <div className="mt-2">
        <h2 className="text-sm font-semibold line-clamp-2">{name}</h2>
        <p className="text-xs text-gray-500">{category}</p>
      </div>

      {/* PRICE */}
      <div className="flex items-center gap-2 mt-2">
        <p className="text-base font-bold text-green-600">${offerPrice}</p>
        <p className="text-xs line-through text-gray-400">${oldPrice}</p>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-col gap-2 mt-3">
        <button
          onClick={handleAddToCart}
          className="w-full bg-black text-white py-1.5 rounded-md hover:bg-gray-800"
        >
          Add to Cart
        </button>

        <button className="w-full bg-orange-500 text-white py-1.5 rounded-md hover:bg-orange-600">
          Add to Wish
        </button>
      </div>
    </div>
  );
};

export default SingleCard;