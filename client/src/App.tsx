import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { HashRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Product } from "./components/Product";
import { List } from "./components/List";
import { products } from "./data/products";
import { categories } from "./data/categories";
import { Profile } from "./components/Profile";
import { Compras } from "./components/Footer/Compras";
import { Terminos } from "./components/Footer/Terminos";
import { Preguntas } from "./components/Footer/Preguntas";
import { Politicas } from "./components/Footer/Politicas";
import { Contacto } from "./components/Footer/Contacto";
import { Cart } from "./components/Cart";
import { NotFound } from "./components/NotFound";
import { Login } from "./components/Login";
import { RegisterUser } from "./components/RegisterUser";

function App() {
  return (
    <HashRouter>
      <div>
        <ToastContainer />
        <NavBar categories={categories} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route
            path="/category/:category"
            element={<List products={products} />}
          />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/como-comprar" element={<Compras />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/preguntas" element={<Preguntas />} />
          <Route path="/politicas" element={<Politicas />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
