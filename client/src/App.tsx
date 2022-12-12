// import "./App.css";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import {HashRouter, Routes, Route} from "react-router-dom";
import { Product } from "./components/Product";
import {List} from "./components/List";
import {products} from "./data/products";
import {categories} from "./data/categories";

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
