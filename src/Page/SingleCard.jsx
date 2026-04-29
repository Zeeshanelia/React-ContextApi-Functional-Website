

export const SingleCard = () => {


  return (
    <div className="product-cart p-4 bg-white rounded-xl shadow hover:shadow-lg transition-all">


      <h3 className="text-lg font-semibold mb-2"></h3>

      <div className="flex items-center justify-between">
        <p className="text-gray-600 mb-3">$ </p>

        <button
          className="px-3 py-1 bg-black text-white rounded-md text-sm hover:bg-gray-800">  Add to Cart
        </button>
      </div>
    </div>
  );
};
