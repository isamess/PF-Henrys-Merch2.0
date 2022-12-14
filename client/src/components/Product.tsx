import React from "react";
import { useParams } from "react-router-dom";
import { List } from "./List";
import { getPublicPath, products } from "../data/products";

function Product() {
  const { id } = useParams();
  // TODO
  const product = products.find((p) => p.id.toString() === id);

  return (
    <>
      {typeof product !== "undefined" && (
        <div className="container my-5">
          <div className="row align-items-center">
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
                <button className="btn btn-primary me-2">
                  Agregar al Carrito
                </button>
                <button type="button" className="btn btn-outline-dark">
                  Personalizar
                </button>
              </div>
            </div>
          </div>

          <div className="mt-5 mb-2">
            <h4 className="mb-2">
              Productos relacionados ({product.category})
            </h4>
            <List products={products} cat={product.category} />
          </div>
        </div>
      )}

      {typeof product === "undefined" && (
        <h1 className={"text-center mt-3"}>El producto no existe.</h1>
      )}
    </>
  );
}

export { Product };
