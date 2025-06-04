import { createContext, useState } from "react";

import Products from "../assets/products.json"; // Importa el JSON de productos

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Funcion para agregar un item al carrito
  // Si el item ya existe, incrementa su cantidad
  const addItem = (itemId) => {
    const cartItems = [...cart];
    let item = cartItems.find((item) => item.id === itemId);
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

  // Funcion para eliminar un item del carrito
  const removeItem = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  // Funcion para limpiar el carrito
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
