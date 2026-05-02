import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppStore } from "../context/AppStore";
import { assets } from "../assets/asset";
import { GrFavorite } from "react-icons/gr";

const SingleProduct = () => {
  const {
    products = [],
    wishlist = [],
    addToWishlist,
    removeFromWishlist,
  } = useContext(AppStore);

  const { id } = useParams();

  console.log("URL ID:", id);

  // 🔥 SAFE CONVERSION
  const productId = Number(id);

  if (!products.length) {
    return <div className="text-center mt-12">Loading...</div>;
  }

  // 🔥 SAFE MATCHING
  const product = products.find((p) => Number(p.id) === productId);

  if (!product) {
    return <div className="text-center mt-12">Product not found...</div>;
  }

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const discount =
    product.oldPrice && product.offerPrice
      ? Math.round(
          ((product.oldPrice - product.offerPrice) / product.oldPrice) * 100
        )
      : 0;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      <div className="grid md:grid-cols-2 gap-10">

        {/* IMAGE */}
        <div className="relative bg-gray-100 rounded-xl p-4 flex justify-center">

          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {discount}% OFF
          </span>

          <button
            onClick={() =>
              isWishlisted
                ? removeFromWishlist(product.id)
                : addToWishlist(product)
            }
            className="absolute top-3 right-3 p-2.5 bg-white rounded-full shadow"
          >
            <GrFavorite
              className={`text-xl ${
                isWishlisted ? "text-red-500" : "text-gray-600"
              }`}
            />
          </button>

          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-sm h-[320px] object-contain"
          />
        </div>

        {/* DETAILS */}
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-semibold">{product.name}</h1>

          <div className="flex items-center gap-2">
            <img src={assets.stars} className="w-24" />
            <span className="text-sm text-gray-500">(120 reviews)</span>
          </div>

          <p className="text-sm text-gray-500">{product.category}</p>

          <div className="flex gap-4">
            <p className="text-3xl font-bold text-green-600">
              ${product.offerPrice}
            </p>
            <p className="line-through text-gray-400">
              ${product.oldPrice}
            </p>
          </div>

          <p className="text-gray-700">{product.smallDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;