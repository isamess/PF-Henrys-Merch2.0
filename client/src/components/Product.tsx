import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { List } from "./List";
import Footer from "./Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getTotal } from "../redux/slices/CartSlice";
import axios from "axios";
import { url, setHeaders } from "../redux/slices/api";

function Product() {
  const dispatch = useDispatch();
  const params = useParams();

  const cart = useSelector((state: any) => state.cart);

  const [product, setProduct] = useState<any>([]);
  const [loading, seteLoading] = useState<boolean>(false);

  useEffect(() => {
    seteLoading(true);

    async function fetchData() {
      try {
        const res: any = await axios.get(
          `${url}/products/find/${params.id}`,
          setHeaders()
        );

        setProduct([res.data]);
      } catch (err: any) {
        console.log(err);
      }
      seteLoading(false);
    }

    fetchData();
  }, [params.id]);

  const handleAddCart = (product: any) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  return (
    <>
      {loading ? (
        <div className="not-found">
          <h2>Cargando ...</h2>
        </div>
      ) : product[0] ? (
        <div className="cart-window">
          <div className="row align-items-center mt-5">
            <div className="col m-0 p-0"></div>
            <div className="col">
              <img
                src={product[0].image}
                style={{ height: "500px" }}
                alt="..."
              />
            </div>
            <div className="col w-100 d-grid h-75 gap-3">
              <p className="fs-4">
                <span className="fw-bold">Nombre:</span> {product[0].name}
              </p>
              <p className="fs-4">
                <span className="fw-bold">Precio:</span> $
                {product[0].price?.toFixed(2).toLocaleString()}
              </p>
              {/* <p className="fs-4">
                <span className="fw-bold">Detalle del Producto:</span>{" "}
                {product.des}
              </p> */}
              <div className="d-flex">
                <button
                  className="btn btn-primary me-2"
                  onClick={() => handleAddCart(product)}
                >
                  Agregar al Carrito
                </button>
                <button type="button" className="btn btn-outline-dark">
                  Personalizar
                </button>
              </div>
            </div>
          </div>

          <div className="mt-5 mb-5">
            <h4 className="d-flex p-2 justify-content-center pb-3 border-top border-secondary m-5">
              Productos relacionados {product[0].category[0]}
            </h4>
            <List category={product[0].category[0]} />
          </div>
        </div>
      ) : (
        <h3 className={"not-found"}>El producto no existe.</h3>
      )}
      <Footer />
    </>
  );
}

export { Product };
