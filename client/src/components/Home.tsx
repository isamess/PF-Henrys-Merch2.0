import React from "react";
import { useEffect, useState } from "react";
import { Carousel } from "./Carousel";
import { List } from "./List";
import { products } from "../data/products";
<<<<<<< HEAD
import Footer from './Footer/Footer'
=======
import Footer from "./Footer/Footer";
>>>>>>> 5927ec9fd23af79454ed8cb26d09bb121bb5deef

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
      <Carousel />
      <div className="d-block flex-row mx-3">
        <div className="pt-4">
          <h3>Home Category</h3>
          <List products={subs} cat={"home"} />
        </div>

<<<<<<< HEAD
    return (
      
        <div className= "container-fluid">
            <Carousel/>
            <div className="pt-4">
              <h2>Home Category</h2>
              <List products={subs} cat={"home"} />
            </div>
=======
        <div className="pt-4">
          <h3>Bottom Category</h3>
          <List products={subs} cat={"bottom"} />
        </div>
>>>>>>> 5927ec9fd23af79454ed8cb26d09bb121bb5deef

        <div className="pt-4">
          <h3>Top Category</h3>
          <List products={subs} cat={"top"} />
        </div>
      </div>

<<<<<<< HEAD
            <div className="pt-4">
              <h2>Top Category</h2>
              <List products={subs} cat={"top"} />
            </div>
            <Footer/>
        </div>

    );
=======
      <Footer />
    </>
  );
>>>>>>> 5927ec9fd23af79454ed8cb26d09bb121bb5deef
}

export { Home };
