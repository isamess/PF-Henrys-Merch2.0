import React from "react";
import { useEffect, useState } from "react";
import { Carousel } from "./Carousel";
import { List } from "./List";

interface Sub {
    id: number;
    nombre: string;
    precio: number;
    descripcion: string;
    imagen: string;
    category: string;
  }
  
  //COLOCO MIS ESTADOS
  interface AppState {
    subs: Array<Sub>;
  }
  
  const INITIAL_STATE = [
    {
      id: 1,
      nombre: "Franela",
      precio: 5.38,
      descripcion: "Tela algodon",
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

function Home() {

    const [subs, SetSubs] = useState<AppState["subs"]>([]);

    useEffect(() => {
      SetSubs(INITIAL_STATE);
    }, []);

    return (
        <>
            <Carousel/>
            <div className="pt-4">
              <h2>Home Category</h2> (see all)
              <List products={subs} cat={"home"} />
            </div>

            <div className="pt-4">
              <h2>Bottom Category</h2> (see all)
              <List products={subs} cat={"bottom"} />
            </div>

            <div className="pt-4">
              <h2>Top Category</h2> (see all)
              <List products={subs} cat={"top"} />
            </div>
        </>
    );
}

export { Home };