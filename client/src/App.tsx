import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { Routes, Route, BrowserRouter, useParams } from "react-router-dom";
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
import { CheckoutSuccess } from "./components/CheckoutSuccess";
import CreateProduct from "./components/admin/CreateProduct";
import Dashboard from "./components/admin/Dashboard";
import Products from "./components/admin/Products";
import Summary from "./components/admin/Summary";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Orders";
import ProductsList from "./components/admin/list/ProductsList";
import OrdersList from "./components/admin/list/OrdersList";
import AdminProduct from "./components/details/Products";
import Order from "./components/details/Order";
import UserProfile from "./components/details/User";
import ProductsByCategory from "./components/ProductsByCategory";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/category/:category" element={<ProductsByCategory />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/como-comprar" element={<Compras />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/preguntas" element={<Preguntas />} />
        <Route path="/politicas" element={<Politicas />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin-product/:id" element={<AdminProduct />} />
        <Route path="/admin-order/:id" element={<Order />} />
        <Route path="/admin-user/:id" element={<UserProfile />} />
        <Route path="/admin" element={<Dashboard />}>
          <Route path="products" element={<Products />}>
            <Route index element={<ProductsList />} />
            <Route path="create-product" element={<CreateProduct />} />
          </Route>
          <Route path="summary" element={<Summary />} />
          <Route path="ordenes" element={<Orders />}>
            <Route index element={<OrdersList />} />
          </Route>
          <Route path="usuarios" element={<Users />} />
        </Route>
        <Route path="/checkout-success" element={<CheckoutSuccess />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
