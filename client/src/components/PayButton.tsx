import axios from "axios";
import { useSelector } from "react-redux";
import { url } from "../redux/slices/api";

const PayButton = (cartItems: any) => {
  const user: any = useSelector((state: any) => state.auth);

  const cart: any = cartItems.cartItems;

  const line_items: any = cart.map((item: any) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: [item.image],
          description: item.desc,
          metadata: {
            id: item._id,
          },
        },
        unit_amount: (item.price * 100).toFixed(0),
      },
      quantity: item.cartQuantity,
    };
  });

  const handleCheckout = () => {
    axios
      .post(`${url}/stripe/create-checkout-session`, {
        line_items,
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
