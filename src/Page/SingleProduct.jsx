import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppStore } from "../context/AppStore";
import { assets } from "../assets/asset";
import { GrFavorite } from "react-icons/gr";

const SingleProduct = () => {
  const { products = [], addToCart, addToFavorite, favorites = [] } = useContext(AppStore);
  const { id } = useParams();

  //  Debug logs
  console.log("1. Raw URL id:", id);
  console.log("2. Converted productId:", Number(id));
  console.log("3. All product IDs:", products.map(p => p.id));

  const productId = Number(id);

  //
  if (!productId) {
    return <div className="text-center mt-12">Invalid product ID.</div>;
  }

  if (!products.length) {
    return <div className="text-center mt-12">Loading...</div>;
  }

  const product = products.find((p) => Number(p.id) === productId);

  if (!product) {
    return <div className="text-center mt-12">Product not found...</div>;
  }

  const discount =
    product.oldPrice && product.offerPrice
      ? Math.round(((product.oldPrice - product.offerPrice) / product.oldPrice) * 100)
      : 0;

  //  per-product favorite check
  const isFavorite = favorites.some((item) => item.id === product.id);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">

        {/* IMAGE */}
        <div className="relative bg-gray-100 rounded-xl p-4 flex justify-center">

          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {discount}% OFF
          </span>

          {/*  favorite button */}
          <button
            onClick={() => addToFavorite({
              id: product.id,
              name: product.name,
              image: product.image,
              category: product.category,
              oldPrice: product.oldPrice,
              offerPrice: product.offerPrice,
            })}
            className="absolute top-3 right-3 p-2.5 bg-white rounded-full shadow"
          >
            <GrFavorite
              className={`w-6 h-6 cursor-pointer transition ${
                isFavorite ? "text-red-500" : "text-gray-400"
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
            <img src={assets.stars} alt="rating" className="w-24" />
            <span className="text-sm text-gray-500">(120 reviews)</span>
          </div>

          <p className="text-sm text-gray-500">{product.category}</p>

          <div className="flex gap-4 items-center">
            <p className="text-3xl font-bold text-green-600">
              ${product.offerPrice}
            </p>
            <p className="line-through text-gray-400">
              ${product.oldPrice}
            </p>
          </div>

          <p className="text-gray-700">{product.smallDesc}</p>

          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition active:scale-95"
          >
            Add to Cart
          </button>

        </div>
      </div>

      {/* MOBILE BAR */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t p-3 flex gap-3 md:hidden shadow-md">
        <button
          onClick={() => addToCart(product)}
          className="flex-1 bg-black text-white py-2 rounded-md"
        >
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