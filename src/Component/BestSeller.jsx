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
  console.log("Products:", products);
  const productId = Number(id);

  if (!products.length) {
    return <div className="text-center mt-12">Loading...</div>;
  }

  const product = products.find((p) => Number(p.id) === productId);

  if (!product) {
    return <div className="text-center mt-12">Product not found !</div>;
  }

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const discount = product.oldPrice && product.offerPrice
    ? Math.round(((product.oldPrice - product.offerPrice) / product.oldPrice) * 100)
    : 0;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* IMAGE SECTION */}
        <div className="relative bg-gray-100 rounded-xl p-4 flex justify-center">

          {/* Discount Badge */}
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded shadow">
            {discount}% OFF
          </span>

          {/* Wishlist */}
          <button
            onClick={() =>
              isWishlisted
                ? removeFromWishlist(product.id)
                : addToWishlist(product)
            }
            className="absolute top-3 right-3 p-2.5 rounded-full bg-white/90 shadow-md hover:scale-105 active:scale-95 transition"
            title="Wishlist"
          >
            <GrFavorite
              className={`text-xl transition ${isWishlisted ? "text-red-500" : "text-gray-600"
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

          <h1 className="text-3xl font-semibold text-gray-900">
            {product.name}
          </h1>

          <div className="flex items-center gap-2">
            <img src={assets.stars} alt="rating" className="w-24" />
            <span className="text-sm text-gray-500">(120 reviews)</span>
          </div>

          <p className="text-sm text-gray-500">{product.category}</p>

          <div className="flex items-center gap-4">
            <p className="text-3xl font-bold text-green-600">
              ${product.offerPrice}
            </p>
            <p className="text-lg line-through text-gray-400">
              ${product.oldPrice}
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed">
            {product.smallDesc}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">

            <button className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition active:scale-95">
              Add to Cart
            </button>

            <button className="flex-1 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition active:scale-95">
              Buy Now
            </button>

          </div>

        </div>
      </div>

      {/* MOBILE BAR */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t p-3 flex gap-3 md:hidden shadow-md">

        <button className="flex-1 bg-black text-white py-2 rounded-md">
          Add to Cart
        </button>

        <button className="flex-1 bg-orange-500 text-white py-2 rounded-md">
          Buy
        </button>

      </div>

    </div>
  );
};

export default SingleProduct;