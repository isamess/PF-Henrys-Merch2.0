import React from "react";
import { useEffect, useState } from "react";
import { Carousel } from "./Carousel";
import { List } from "./List";
import { products } from "../data/products";

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

const INITIAL_STATE = products;

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