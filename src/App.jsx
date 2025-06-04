import Navbar from "./components/Navbar";
import Catalog from "./components/Catalog";
import CartProvider from "./contexts/CartProvider";

function App() {
  return (
    // Agregar proveedor de contexto para el carrito para que esté disponible en toda la aplicación
    <CartProvider>
      <Navbar />
      <Catalog />
    </CartProvider>
  );
}

export default App;
