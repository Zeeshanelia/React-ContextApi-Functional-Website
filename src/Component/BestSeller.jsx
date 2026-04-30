import { useContext } from "react";
import { AppStore } from "../context/AppStore ";
import SingleCard from "../Page/SingleCard";


const BestSeller = () => {
    const { products } = useContext(AppStore);

    return (<>

        <h1 className="text-xl md:text-3xl font-bold text-center">
            Our Best Sellers </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-8 px-4 md:px-8">

            {
                products?.length === 0 ? (
                    <p className="text-center mt-6">No products found</p>
                ) : (

                    products.slice(0, 8).map((product) => (
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
    </>
    );
};

export default BestSeller;