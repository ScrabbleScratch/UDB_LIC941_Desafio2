import { createContext, useState } from "react";

import Products from "../assets/products.json";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (itemId) => {
    const cartItems = [...cart];
    let item = cartItems.find((item) => item.id === itemId);
    // let newItem = item ? { ...item } : null;
    if (item) {
      item.quantity++;
    } else {
      const product = Products.find((product) => product.id === itemId);
      if (!product) {
        console.error(`Product with id ${itemId} not found`);
        return;
      }
      item = { id: product.id, title: product.title, price: product.price, quantity: 1 };
      cartItems.push(item);
    }
    setCart(cartItems);
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
