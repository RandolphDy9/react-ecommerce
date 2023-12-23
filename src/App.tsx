import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Success from "./pages/Success";
import Clothes from "./pages/Clothes";

function App() {
  return (
    <ShoppingCartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Details />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;
