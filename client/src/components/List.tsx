import "./../css/list.css";
import { NavLink, useParams } from "react-router-dom";
import { getPublicPath } from "../data/products";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/CartSlice";

interface Props {
  products: Array<{
    id: number;
    nombre: string;
    precio: number;
    descripcion: string;
    imagen: string;
    category: string;
  }>;
  cat?: string | undefined;
}

//PASO LAS PROPS
const List = ({ products, cat }: Props) => {
  const { category } = useParams();
  const dispatch = useDispatch();

  if (typeof cat === "undefined") {
    cat = category;
  }

  const handleAddCart = (product: any) => {
    dispatch(addToCart(product));
  };

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-2">
      {products.map((product) => {
        if (product.category === cat) {
          return (
            <div className="d-flex justify-content-center">
              <div className="card my-card" key={product.id}>
                <img
                  src={getPublicPath(product.imagen)}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{product.nombre}</h5>
                  <p className="card-text">{product.descripcion}</p>
                  <p className="card-text">${product.precio}</p>
                  <button onClick={() => handleAddCart(product)}>Add+</button>

                  <button
                    className="btn btn-secondry"
                    onClick={() => topFunction()}
                  >
                    <NavLink
                      to={`/product/${product.id}`}
                      className="btn btn-secondary"
                    >
                      Ver Producto
                    </NavLink>
                  </button>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export { List };
