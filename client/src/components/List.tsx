import "./../css/list.css";
import { NavLink } from "react-router-dom";
import { getPublicPath } from "../data/products";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

//PASO LAS PROPS
const List = (products: any, category: any) => {
  const dispatch = useDispatch();
  const categoryName: any = category;

  console.log(categoryName);

  const handleAddCart = (product: any) => {
    dispatch(addToCart(product));
  };

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-2">
      {products.map((product: any) => {
        if (product.category === categoryName) {
          return (
            <div className="d-flex justify-content-center">
              <div className="card my-card" key={product._id}>
                <img
                  src={getPublicPath(product.imgUrl)}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  {/* <p className="card-text">{product.desc}</p> */}
                  <p className="card-text">desc</p>
                  <p className="card-text">
                    ${product.price.toFixed(2).toLocaleString()}
                  </p>
                  <button
                    className="mx-3 btn btn-secondary text-white"
                    onClick={() => handleAddCart(product)}
                  >
                    Add+
                  </button>

                  <button
                    className="btn btn-secondry"
                    onClick={() => topFunction()}
                  >
                    <NavLink
                      to={`/product/${product._id}`}
                      className="btn btn-secondary"
                    >
                      Ver Producto
                    </NavLink>
                  </button>
                </div>
              </div>
            </div>
          );
        } else return <></>;
      })}
    </div>
  );
};

export { List };
