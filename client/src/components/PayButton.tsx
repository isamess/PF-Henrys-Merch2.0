import axios from "axios";
import { useSelector } from "react-redux";
// import { Url } from "../slice/api";

const PayButton = () => {
  function handleCheckout() {}

  return <button onClick={() => handleCheckout()}>Check Out</button>;
};

export default PayButton;
