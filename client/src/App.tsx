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
import { RegisterUser } from "./components/RegisterUser";
import { Profile } from "./components/Profile";
import { Cart } from "./components/Cart";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <HashRouter>
      <div className="App">
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
            <Route path="/login" element={<RegisterUser />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        {/* TODO */}
        {/* FOOTER */}
      </div>
    </HashRouter>
  );
}

export default App;
