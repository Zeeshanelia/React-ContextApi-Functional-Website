import { useContext } from "react";
import { AppStore } from "../context/AppStore";
import SingleCard from "../Component/SingleCard";

const BestSeller = () => {
  const { products = [] } = useContext(AppStore);

  // safety guard
  if (!products.length) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">

      {/* HEADER */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Best Sellers
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Top trending products just for you
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">

        {products.slice(0, 10).map((product) => {
          if (!product?.id) {
            console.error("❌ Missing ID:", product);
            return null;
          }

          return (
            <SingleCard
              key={product.id}
              id={product.id} //
              name={product.name}
              image={product.image}
              category={product.category}
              oldPrice={product.oldPrice}
              offerPrice={product.offerPrice}
            />
          );
        })}

      </div>
    </section>
  );
};

export default BestSeller;