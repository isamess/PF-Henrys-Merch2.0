import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart, getTotal } from "../redux/slices/CartSlice";
import Footer from "./Footer/Footer";

const CheckoutSuccess = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
    dispatch(getTotal());
  });

  return (
    <div className="cart-window">
      <h2 className="not-found">El pago fue exitoso</h2>;
      <Footer />
    </div>
  );
};

export { CheckoutSuccess };
