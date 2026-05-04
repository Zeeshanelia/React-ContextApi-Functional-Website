import { useState } from "react";

const CheckOut = ({ cartItems = [] }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
  });

  const [payment, setPayment] = useState("cod");

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const deliveryFee = subtotal > 2000 ? 0 : 150;
  const total = subtotal + deliveryFee;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-100 min-h-screen pb-24">
      <div className="max-w-6xl mx-auto p-4 md:p-6 grid lg:grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">

          {/* Delivery Info */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">
              Delivery Information
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="border p-2 rounded-lg w-full focus:ring-2 focus:ring-orange-400 outline-none"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="border p-2 rounded-lg w-full focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>

            <textarea
              name="address"
              placeholder="Full Address"
              value={form.address}
              onChange={handleChange}
              className="border p-2 rounded-lg w-full mt-4 focus:ring-2 focus:ring-orange-400 outline-none"
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className="border p-2 rounded-lg w-full mt-4 focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          {/* Payment Method */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">
              Payment Method
            </h2>

            <div className="space-y-3">

              <label className="flex items-center justify-between border p-3 rounded-lg cursor-pointer">
                <div>
                  <p className="font-medium">Cash on Delivery</p>
                  <p className="text-xs text-gray-500">
                    Pay when you receive your order
                  </p>
                </div>
                <input
                  type="radio"
                  checked={payment === "cod"}
                  onChange={() => setPayment("cod")}
                />
              </label>

              <label className="flex items-center justify-between border p-3 rounded-lg cursor-pointer opacity-60">
                <div>
                  <p className="font-medium">Card Payment</p>
                  <p className="text-xs text-gray-500">
                    Coming soon
                  </p>
                </div>
                <input type="radio" disabled />
              </label>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE (Sticky Summary) */}
        <div className="bg-white p-5 rounded-xl shadow h-fit sticky top-6">
          <h2 className="text-lg font-semibold mb-4">
            Order Summary
          </h2>

          <div className="space-y-3 max-h-60 overflow-y-auto">
            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-sm">
                Your cart is empty
              </p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-sm"
                >
                  <span>
                    {item.name} × {item.qty}
                  </span>
                  <span>Rs {item.price * item.qty}</span>
                </div>
              ))
            )}
          </div>

          <div className="border-t my-4"></div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>Rs {subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery</span>
              <span>
                {deliveryFee === 0 ? "Free" : `Rs ${deliveryFee}`}
              </span>
            </div>
          </div>

          <div className="flex justify-between font-semibold text-lg mt-4">
            <span>Total</span>
            <span>Rs {total}</span>
          </div>

          {/* CTA */}
          <button className="w-full mt-6 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition font-medium">
            Place Order
          </button>
        </div>
      </div>

      {/* MOBILE STICKY BAR */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t p-4 flex justify-between items-center lg:hidden">
        <div>
          <p className="text-sm text-gray-500">Total</p>
          <p className="font-semibold">Rs {total}</p>
        </div>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg">
          Order
        </button>
      </div>
    </div>
  );
};

export default CheckOut;