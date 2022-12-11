// import "./App.css";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import {HashRouter, Routes, Route} from "react-router-dom";
import { Product } from "./components/Product";
import {List} from "./components/List";

const categories = [
  {
      name: 'home',
  },
  {
      name: 'top',
  },
  {
      name: 'bottom',
  },
  {
    name: 'tools',
},
];
const products = [
    {
        id: 1,
        nombre: "Franela",
        precio: 5.38,
        descripcion: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        imagen: "https://fakeimg.pl/200x150/?text=Product",
        category: "home",
    },
    {
        id: 2,
        nombre: "Taza",
        precio: 0.96,
        descripcion: "porcelana",
        imagen: "https://fakeimg.pl/200x150/?text=Product",
        category: "home",
    },
    {
        id: 3,
        nombre: "Agenda",
        precio: 5.34,
        descripcion: "Agenda de hojas cocidas",
        imagen: "https://fakeimg.pl/200x150/?text=Product",
        category: "top",
    },
    {
        id: 4,
        nombre: "Termo",
        precio: 4.85,
        descripcion: "Acero inoxidable",
        imagen: "https://fakeimg.pl/200x150/?text=Product",
        category: "top",
    },
    {
        id: 5,
        nombre: "Taza de mate",
        precio: 4.53,
        descripcion: "Taza de mate enacero inoxidable",
        imagen: "https://fakeimg.pl/200x150/?text=Product",
        category: "bottom",
    },
    {
        id: 6,
        nombre: "Taza de mate",
        precio: 4.53,
        descripcion: "Taza de mate enacero inoxidable",
        imagen: "https://fakeimg.pl/200x150/?text=Product",
        category: "bottom",
    },
    {
        id: 7,
        nombre: "Taza de mate",
        precio: 4.53,
        descripcion: "Taza de mate enacero inoxidable",
        imagen: "https://fakeimg.pl/200x150/?text=Product",
        category: "bottom",
    },
    {
        id: 8,
        nombre: "Taza de mate",
        precio: 4.53,
        descripcion: "Taza de mate enacero inoxidable",
        imagen: "https://fakeimg.pl/200x150/?text=Product",
        category: "bottom",
    },
    {
        id: 9,
        nombre: "Taza de mate",
        precio: 4.53,
        descripcion: "Taza de mate enacero inoxidable",
        imagen: "https://fakeimg.pl/200x150/?text=Product",
        category: "bottom",
    },
    {
        id: 10,
        nombre: "Taza de mate",
        precio: 4.53,
        descripcion: "Taza de mate enacero inoxidable",
        imagen: "https://fakeimg.pl/200x150/?text=Product",
        category: "bottom",
    },
    {
        id: 11,
        nombre: "Taza de mate",
        precio: 4.53,
        descripcion: "Taza de mate enacero inoxidable",
        imagen: "https://fakeimg.pl/200x150/?text=Product",
        category: "bottom",
    },
    {
        id: 12,
        nombre: "Taza de mate",
        precio: 4.53,
        descripcion: "Taza de mate enacero inoxidable",
        imagen: "https://fakeimg.pl/200x150/?text=Product",
        category: "bottom",
    },
];

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
