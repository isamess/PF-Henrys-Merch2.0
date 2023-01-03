import axios from "axios";
import { useSelector } from "react-redux";

const PayButton = ({ cartItems }: any) => {
  const user: any = useSelector((state: any) => state.auth);

  const handleCheckout = () => {
    const url: string =
      "http://localhost:3001/api/stripe/create-checkout-session";
    axios
      .post(url, {
        cartItems,
        userId: user,
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
