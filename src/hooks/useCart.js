import { useContext } from 'react';
import { CartContext } from '../contexts/CartProvider';

// Hook para acceder al contexto del carrito
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
