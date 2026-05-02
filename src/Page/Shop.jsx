import { useContext } from "react";
import { AppStore } from "../context/AppStore";
import SingleCard from "../Component/SingleCard";

const Shop = () => {
  const { products = [] } = useContext(AppStore);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">
          All Products
        </h1>
        <p className="text-gray-500 mt-2">
          Discover premium products curated for you
        </p>
      </div>

      {/* EMPTY STATE */}
      {products.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">
          No products found
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">

          {products
            .filter((p) => p && p.id !== undefined)
            .map((product) => (
              <SingleCard
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                category={product.category}
                oldPrice={product.oldPrice}
                offerPrice={product.offerPrice}
              />
            ))}

        </div>
      )}

    </div>
  );
};

export default Shop;