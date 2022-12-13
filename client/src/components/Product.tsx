import React from "react";
import {useParams} from "react-router-dom";
import {List} from "./List";
import {getPublicPath, products} from "../data/products";
import Footer from "./Footer/Footer";

function Product() {
    const {id} = useParams();
    // TODO
    const product = products.find((p) => p.id.toString() === id);

    return (
        <>
            {(typeof product !== "undefined") &&
                <>
                    <div className="row pt-4">
                        <div className="col">
                            <img src={getPublicPath(product.imagen)} className="card-img" alt="..."/>
                        </div>
                        <div className="col">
                            <h1>Price: ${product.precio}</h1>
                            <h2>Nombre: {product.nombre}</h2>
                            <p>Detalle: {product.descripcion}</p>
                            <span className="badge text-bg-warning">{product.category}</span>
                            <br/>
                            <div className="p-2">
                                <button className="btn btn-success">Agregar +</button>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <h2>Productos relacionados ({product.category})</h2>
                        <List products={products} cat={product.category}/>
                    </div>
                </>
            }

            {(typeof product === "undefined") &&
                <>
                    <h1 className={"text-center mt-3"}>El producto no existe.</h1>
                </>
            }
            <Footer/>
        </>
    );
}

export {Product};
