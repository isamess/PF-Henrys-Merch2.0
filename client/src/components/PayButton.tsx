import axios from "axios";
import { useSelector } from "react-redux";
import { url } from "../redux/slices/api";

const PayButton = (cartItems: any) => {
  const user: any = useSelector((state: any) => state.auth);

  const cart: any = cartItems.cartItems;

  const handleCheckout = () => {
    axios
      .post(`${url}/stripe/create-checkout-session`, {
        cart,
        userId: user._id,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <button onClick={() => handleCheckout()}>Pagar</button>
    </>
  );
};

export default PayButton;
