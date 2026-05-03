import { createContext, useState } from "react";
import { products as initialProducts } from "../assets/asset";
import { toast } from "react-toastify";

export const AppStore = createContext(null);

export const AppsStoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // CART
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
      return [...prevCart, { ...product, quantity: 1, offerPrice: Number(product.offerPrice) || 0 }];
    });
  };

  const removeItem = (productId) => {
    setCart((prev) => {
      toast.error("Removed from cart");
      return prev.filter((item) => item.id !== productId);
    });
  };

  // TOTAL
  const totalPrice = cart.reduce((total, item) => {
    return total + (Number(item.offerPrice) || 0) * (item.quantity || 0);
  }, 0);

  // FAVORITES
  const addToFavorite = (product) => {
    setFavorites((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        toast.error("Removed from favorites", { position: "top-center" });
        return prev.filter((item) => item.id !== product.id);
      } else {
        toast.success("Added to favorites", { position: "top-center" });
        return [...prev, product];
      }
    });
  };

  // PROVIDER
  const val = {
    products: initialProducts || [],
    cart,
    favorites,
    addToCart,
    removeItem,
    totalPrice,
    addToFavorite,
  };

  return (
    <AppStore.Provider value={val}>
      {children}
    </AppStore.Provider>
  );
};