import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { List } from "./List";
import { getPublicPath, products } from "../data/products";
import Footer from "./Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getTotal } from "./redux/CartSlice";

function Product() {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const { id } = useParams();
  // TODO
  const product = products.find((p) => p.id.toString() === id);

  const handleAddCart = (product: any) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  return (
    <>
      {typeof product !== "undefined" && (
        <div className="cart-window">
          <div className="row align-items-center mt-5">
            <div className="col m-0 p-0"></div>
            <div className="col">
              <img
                src={getPublicPath(product.imagen)}
                style={{ height: "500px" }}
                alt="..."
              />
            </div>
            <div className="col w-100 d-grid h-75 gap-3">
              <p className="fs-4">
                <span className="fw-bold">Nombre:</span> {product.nombre}
              </p>
              <p className="fs-4">
                <span className="fw-bold">Precio:</span> ${product.precio}
              </p>
              <p className="fs-4">
                <span className="fw-bold">Detalle del Producto:</span>{" "}
                {product.descripcion}
              </p>
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
            <h2 className="border border-top border-secondary m-5"></h2>
            <h4 className="d-flex p-2 justify-content-center pb-3">
              Productos relacionados ({product.category})
            </h4>
            <List products={products} cat={product.category} />
          </div>
        </div>
      )}

      {typeof product === "undefined" && (
        <h1 className={"text-center mt-3"}>El producto no existe.</h1>
      )}
      <Footer />
    </>
  );
}

export { Product };
