import React from "react";
import { useEffect, useState } from "react";
import  Carousel  from "./Carousel";
import { List } from "./List";
import { products } from "../data/products";
import Footer from "./Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "./redux/Slices/CartSlice";

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
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const [subs, SetSubs] = useState<AppState["subs"]>([]);

  useEffect(() => {
    SetSubs(INITIAL_STATE);
  }, []);

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  return (
    <>
      <div className="container-fluid pb-5">
        <div className="d-flex my-5">
          <Carousel />
        </div>
        <div className="pt-4">
          <h2 className="d-flex p-2 justify-content-center pb-3 border-top border-secondary m-5">
            Home Category
          </h2>
          <List products={subs} cat={"home"} />
        </div>
        <div className="pt-4">
          <h3 className="d-flex p-2 justify-content-center pb-3 border-top border-secondary m-5">
            Bottom Category
          </h3>
          <List products={subs} cat={"bottom"} />
        </div>

        <div className="pt-4">
          <h3 className="d-flex p-2 justify-content-center pb-3 border-top border-secondary m-5">
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
