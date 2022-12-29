import axios from "axios";
import { useSelector } from "react-redux";

const PayButton = (cartItems: any) => {
  const user = useSelector((state: any) => state.auth);

  const handleCheckout = () => {
    axios
      .post("http://localhost:3001/api/stripe/create-checkout-session", {
        cartItems,
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
