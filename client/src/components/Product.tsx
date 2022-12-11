import React from "react";
import { useParams } from "react-router-dom";
import { List } from "./List";

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

function Product() {
  const { id } = useParams();
  // TODO
  const product = products.find((p) => p.id.toString() === id);

  return (
    <>
        <div className="row pt-4">
            <div className="col">
                <img src={product?.imagen} className="card-img" alt="..."/>
            </div>
            <div className="col">
                <h1>Price: ${product?.precio}</h1>
                <h2>Nombre: { product?.nombre }</h2>
                <p>Detalle: { product?.descripcion }</p>
                <span className="badge text-bg-warning">{product?.category}</span>
                <br />
                <div className="p-2">
                    <button className="btn btn-success">Agregar +</button>
                </div>
            </div>
        </div>

        <div className="pt-4">
            <h2>Productos relacionados ({product?.category})</h2>
            <List products={products} cat={product?.category} />
        </div>
    </>
  );
}

export { Product };
