import { useContext } from "react";
import { AppStore } from "../context/AppStore";

const Category = () => {
    const {products} = useContext(AppStore)

    return (
        <section className="bg-gray-100 p-4 md:p-8">
            <h1 className="text-xl md:text-3xl font-bold text-center">Shop By Category</h1>


            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-4 gap-6 mt-8">

                {products.slice(0, 4).map((product) => (

                    <div
                        key={product.id}
                        className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 cursor-pointer overflow-hidden group">

                        {/* Image wrapper */}
                        <div className="relative overflow-hidden">
                            <img src={product.image} alt={product.name}
                                className="w-full h-36 sm:h-44 md:h-52 object-cover group-hover:scale-105 transition duration-300" />

                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition">
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-3 text-center">
                            <p className="text-sm md:text-base font-semibold text-gray-800 line-clamp-2"> {product.name} </p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default Category;