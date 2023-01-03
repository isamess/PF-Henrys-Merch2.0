import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getPublicPath } from "../data/products";
import Footer from "./Footer/Footer";
import PayButton from "./PayButton";
import {
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  clearCart,
  getTotal,
} from "../redux/slices/CartSlice";

function Cart() {
  const cart = useSelector((state: any) => state.cart);
  const auth = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  function handleRemoveFromCart(cartItem: any) {
    dispatch(removeFromCart(cartItem));
  }

  function handleDecreaseQuantity(cartItem: any) {
    dispatch(decreaseQuantity(cartItem));
  }

  function handleIncreaseQuantity(cartItem: any) {
    dispatch(increaseQuantity(cartItem));
  }

  function handleClearCart() {
    dispatch(clearCart());
  }

  return (
    <div className="cart-window">
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cart.cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Tu carro está vacio</p>
            <div className="start-shopping">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-left-circle mx-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                  />
                </svg>
                Empezar a comprar
              </Link>
            </div>
          </div>
        ) : (
          <div className="cart-container-size">
            <div className="cart-size">
              <div className="titles">
                <h3 className="product-title">Productos</h3>
                <h3 className="price">Precio</h3>
                <h3 className="quantity">Cantidad</h3>
                <h3 className="total">Total</h3>
              </div>
              <div className="cart-items">
                {cart.cartItems?.map((cartItem: any) => (
                  <div className="cart-item" key={cartItem.id}>
                    <div className="cart-product">
                      <img
                        src={getPublicPath(cartItem.imagen)}
                        alt={cartItem.nombre}
                      />
                      <div>
                        <h3>{cartItem.nombre}</h3>
                        <p>{cartItem.descripcion}</p>
                        <button onClick={() => handleRemoveFromCart(cartItem)}>
                          Eliminar
                        </button>
                      </div>
                    </div>
                    <div className="cart-product-price">${cartItem.precio}</div>
                    <div className="cart-product-quantity">
                      <button onClick={() => handleDecreaseQuantity(cartItem)}>
                        -
                      </button>
                      <div className="count">{cartItem.cartQuantity}</div>
                      <button onClick={() => handleIncreaseQuantity(cartItem)}>
                        +
                      </button>
                    </div>
                    <div className="cart-product-total-price">
                      $
                      {Math.round(
                        (cartItem.precio * cartItem.cartQuantity +
                          Number.EPSILON) *
                          100
                      ) / 100}
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-summary">
                <button
                  className="clear-cart"
                  onClick={() => handleClearCart()}
                >
                  Limpiar Carro
                </button>
                <div className="cart-checkout">
                  <div className="subtotal">
                    <span>Subtotal</span>
                    <span className="amount">
                      $
                      {Math.round(
                        (cart.cartTotalAmount + Number.EPSILON) * 100
                      ) / 100}
                    </span>
                  </div>
                  <p>Los impuestos se calculan en el checkout</p>
                  {auth._id ? (
                    <PayButton cartItems={cart.cartItems} />
                  ) : (
                    <button onClick={() => navigate("/login")}>
                      Login para pagar
                    </button>
                  )}

                  <div className="continue-shopping">
                    <Link to="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-arrow-left-circle mx-3"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                        />
                      </svg>
                      Continuar Comprando
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export { Cart };
