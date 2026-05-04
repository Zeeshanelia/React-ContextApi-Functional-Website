import { useContext } from "react";
import { AppStore } from "../context/AppStore";
import SingleCard from "../Component/SingleCard";

const WishList = () => {
  const { favorites } = useContext(AppStore);

  return (
    <div>
      <h1 className="text-4xl font-semibold text-center text-gray-900">
        My WishList
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {favorites.map((product) => (
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
    </div>
  );
};

export default WishList;