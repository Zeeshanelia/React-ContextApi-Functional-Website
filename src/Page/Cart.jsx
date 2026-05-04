import { useContext } from "react";
import { AppStore } from "../context/AppStore";
import { Link } from "react-router-dom";
import { CarTaxiFrontIcon } from "lucide-react";
import { MdAddToQueue } from "react-icons/md";

const Cart = () => {
  const { cart, removeItem, totalPrice } = useContext(AppStore);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="text-6xl mb-4">   <MdAddToQueue/> </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty!</h2>
        <p className="text-gray-500 mb-6">Looks like you haven't added anything yet.</p>
        <Link to="/shop">
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* HEADER */}
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
         My Cart
      </h1>



      <div className="flex flex-col lg:flex-row gap-8">

        {/* LEFT — CART ITEMS */}
        <div className="flex-1 flex flex-col gap-4">
          {cart.map((cartItem) => (
            <div
              key={cartItem.id}
              className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition" >
              {/* IMAGE */}
              <Link to={`/product/${cartItem.id}`}>
                <img
                  src={cartItem.image}  alt={cartItem.name}
                  className="w-20 h-20 object-cover rounded-lg border"
                />
              </Link>

              {/* INFO */}
              <div className="flex-1">
                <h2 className="text-sm font-semibold text-gray-800 line-clamp-2">
                  {cartItem.name}
                </h2>
                <p className="text-xs text-gray-400 mt-1">{cartItem.category}</p>

                <div className="flex items-center gap-2 mt-2">
                  <p className="text-green-600 font-bold">${cartItem.offerPrice}</p>
                  <p className="text-xs line-through text-gray-400">${cartItem.oldPrice}</p>
                </div>
              </div>

              {/* QUANTITY */}
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs text-gray-500">Qty</span>
                <span className="w-8 h-8 flex items-center justify-center border rounded-md font-semibold text-gray-700">
                  {cartItem.quantity}
                </span>
              </div>

              {/* TOTAL */}
              <div className="flex flex-col items-center gap-1 min-w-[60px]">
                <span className="text-xs text-gray-500">Total</span>
                <span className="font-bold text-gray-800">
                  ${(cartItem.offerPrice * cartItem.quantity).toFixed(2)}
                </span>
              </div>

              {/* REMOVE */}
              <button
                onClick={() => removeItem(cartItem.id)}
                className="text-red-400 hover:text-red-600 text-xl font-bold transition" title="Remove">
                ✕
              </button>

            </div>
          ))}
        </div>

        {/* RIGHT — ORDER SUMMARY */}
        <div className="w-full lg:w-80 bg-white border border-gray-200 rounded-xl p-6 shadow-sm h-fit sticky top-20">

          <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>

          <div className="flex flex-col gap-3 text-sm text-gray-600">

            <div className="flex justify-between">
              <span>Items ({cart.length})</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-500 font-medium">Free</span>
            </div>

            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-red-400">-$0.00</span>
            </div>

            <div className="border-t pt-3 flex justify-between font-bold text-gray-900 text-base">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

          </div>

          <Link to={'/checkout'} >
          <button className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition active:scale-95 font-medium">
            Proceed to Checkout
          </button>
          </Link>

          <Link to="/shop">
            <button className="w-full mt-3 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition text-sm">
              Continue Shopping
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Cart;