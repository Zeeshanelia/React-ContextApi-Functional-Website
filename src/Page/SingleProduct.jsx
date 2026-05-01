import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppStore } from "../context/AppStore";
import { assets } from "../assets/asset";

const SingleProduct = () => {
  const { products } = useContext(AppStore);
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div className="text-center mt-12">Product not found.</div>;
  }

  return (
    <div className="my-12">
      <div className="flex flex-col items-center justify-center gap-4 mt-8">
        <div>
          <img src={product.image} alt={product.name} className="max-w-full h-auto" />
        </div>
        <div className="flex flex-col gap-3 text-center">
          <h4 className="text-2xl text-gray-900 font-semibold">
            {product.name}
          </h4>
          <p className="text-base text-gray-700 font-medium">
            {product.category}
          </p>
          <img src={assets.stars} className="w-16" alt="rating" />
          <div className="flex items-center justify-center gap-4">
            <p className="text-xl font-bold text-red-600">${product.offerPrice}</p>
            <p className="text-lg line-through text-gray-500">${product.oldPrice}</p>
          </div>
        </div>
      </div>
      <p className="text-center mt-6 text-gray-700 max-w-2xl mx-auto">
        {product.smallDesc}
      </p>
    </div>
  );
};

export default SingleProduct;