import React from "react";
import { useEffect, useState } from "react";
import { Carousel } from "./Carousel";
import { List } from "./List";
import { products } from "../data/products";
import Footer from "./Footer/Footer";

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
      <div className="container-fluid pb-5">
        <div className="d-flex my-5">
          <Carousel />
        </div>
        <div className="pt-4">
          <h2 className="border border-top border-secondary mx-5 mb-5"></h2>
          <h2 className="d-flex p-2 justify-content-center pb-3">
            Home Category
          </h2>
          <List products={subs} cat={"home"} />
        </div>
        <div className="pt-4">
          <h2 className="border border-top border-secondary m-5"></h2>
          <h3 className="d-flex p-2 justify-content-center pb-3">
            Bottom Category
          </h3>
          <List products={subs} cat={"bottom"} />
        </div>

        <div className="pt-4">
          <h2 className="border border-top border-secondary m-5"></h2>
          <h3 className="d-flex p-2 justify-content-center pb-3">
            Top Category
          </h3>
          <List products={subs} cat={"top"} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export { Home };
