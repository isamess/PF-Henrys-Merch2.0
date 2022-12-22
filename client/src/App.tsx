// import "./App.css";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import {HashRouter, Routes, Route} from "react-router-dom";
import { Product } from "./components/Product";
import {List} from "./components/List";
import {products} from "./data/products";
import {categories} from "./data/categories";
import {RegisterUser} from "./components/RegisterUser";
import {Profile} from "./components/Profile";
import { Compras } from "./components/Footer/Compras";
import { Terminos } from "./components/Footer/Terminos";
import { Preguntas } from "./components/Footer/Preguntas";
import { Politicas } from "./components/Footer/Politicas";
import { Contacto } from "./components/Footer/Contacto";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div>
          <NavBar categories={categories} />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product/:id" element={<Product/>}/>
            <Route path="/category/:category" element={
                <List products={products}/>
            } />
            <Route path="/login" element={<RegisterUser/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/como-comprar" element={<Compras/>}/>
            <Route path="/terminos" element={<Terminos/>}/>
            <Route path="/preguntas" element={<Preguntas/>}/>
            <Route path="/politicas" element={<Politicas/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="*" element={<p>404 Not Found</p>} />
          </Routes>
        </div>
        {/* TODO */}
        {/* FOOTER */}
      </div> 
    </HashRouter>
  );
}

export default App;
