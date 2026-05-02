import { createContext, useState } from "react";
import { products as initialProducts } from "../assets/asset";
import { toast } from "react-toastify";

export const AppStore = createContext(null);

export const AppsStoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favorite] = useState([]);



  //  CART

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);

      if (existing) {
        toast.info("Quantity increased");
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      toast.success("Product added to cart");

      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
          offerPrice: Number(product.offerPrice) || 0,
        },
      ];
    });
  };

  const removeItem = (productId) => {
    setCart((prev) => {
      const updated = prev.filter((item) => item.id !== productId);
      toast.error("Removed from cart");
      return updated;
    });
  };

  // TOTAL

  const totalPrice = cart.reduce((total, item) => {
    return total + (Number(item.offerPrice) || 0) * (item.quantity || 0);
  }, 0);



  //  PROVIDER

  const val = {
    products: initialProducts || [],
    cart,
    favorite,
    addToCart,
    removeItem,
    totalPrice,
  };

  return (
    <AppStore.Provider value={val}>
      {children}
    </AppStore.Provider>
  );
};