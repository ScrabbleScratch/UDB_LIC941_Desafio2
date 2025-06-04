import Navbar from "./components/Navbar";
import Catalog from "./components/Catalog";
import CartProvider from "./contexts/CartProvider";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Catalog />
    </CartProvider>
  );
}

export default App;
