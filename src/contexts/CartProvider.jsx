import { createContext, useState } from "react";

import Products from "../assets/products.json";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (itemId) => {
    const item = cart.find((item) => item.id === itemId);
    let newItem = item ? { ...item } : null;
    if (newItem) {
      newItem.quantity++;
    } else {
      const product = Products.find((product) => product.id === itemId);
      if (!product) {
        console.error(`Product with id ${itemId} not found`);
        return;
      }
      newItem = { id: product.id, title: product.title, price: product.price, quantity: 1 };
    }
    setCart([...cart, newItem]);
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
