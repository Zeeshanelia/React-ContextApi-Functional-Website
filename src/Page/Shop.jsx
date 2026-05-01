import { useContext } from "react";
import { AppStore } from "../context/AppStore ";
import SingleCard from "../Component/SingleCard";

const Shop = () => {
  const { products } = useContext(AppStore);

  return (
    <div className="my-12">
      <h1 className="text-4xl font-semibold text-gray-900">All Products</h1>
      <p className="text-gray-900">
        Below are the products available in our store
      </p>

      {/* Display the products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
         {
                products?.length === 0 ? (
                    <p className="text-center mt-6">No products found</p>
                ) : (

                    products.slice(0, 10).map((product) => (
                        <SingleCard

                            id={product.id}
                            name={product.name}
                            image={product.image}
                            category={product.category}
                            oldPrice={product.oldPrice}
                            offerPrice={product.offerPrice}
                        />

                    )))}
      </div>
    </div>
  );
};

export default Shop;