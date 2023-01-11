import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import { ordersEdit } from "../../redux/slices/OrdersSlice";

const Order = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { list }: any = useSelector((state: any) => state.orders);

  console.log(list);

  const [atLoad, setAtLoad] = useState<Object>({});

  const [currentOrder, setCurrentOrder] = useState<Object>({});
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [address2, setAddress2] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const fetchOrder = () => {
    let selectedOrder = list.filter((item: any) => item._id === params.id);

    selectedOrder = selectedOrder[0];

    setCurrentOrder(selectedOrder);

    setId(selectedOrder._id);
    setName(selectedOrder.shipping.name);
    setEmail(selectedOrder.shipping.email);
    setCity(selectedOrder.shipping.address.city);
    setCountry(selectedOrder.shipping.address.country);
    setRegion(selectedOrder.shipping.address.state);
    setAddress(selectedOrder.shipping.address.line1);
    setAddress2(selectedOrder.shipping.address.line2);
    setPostalCode(selectedOrder.shipping.address.postal_code);
    setStatus(selectedOrder.delivery_status);
    setPhone(selectedOrder.shipping.phone);
  };

  if (list.length > 0) {
    if (atLoad) {
      fetchOrder();

      setAtLoad(false);
    }
  }

  const handleDispatch = (id: any) => {
    dispatch(
      ordersEdit({
        id,
        delivery_status: "dispatched",
      })
    );
  };

  const handleDelivery = (id: any) => {
    dispatch(
      ordersEdit({
        id,
        delivery_status: "delivered",
      })
    );
  };

  return (
    <>
      <div className="product">
        <div className="product-container">
          {atLoad ? (
            <h3 className="not-found">Cargando ...</h3>
          ) : (
            <>
              <div className="product-details">
                <h3>{name}</h3>
                <p>
                  <span>E-mail: </span>
                  {email}
                </p>
                <p>
                  <span>Numero telefono movil: </span>
                  {phone}
                </p>
                <p>
                  <span>Dirección del envío: </span>
                </p>
                <p className="align-item-right">
                  <span>Pais: </span>
                  {country}
                </p>
                <p className="align-item-right">
                  <span>Región: </span>
                  {region}
                </p>
                <p className="align-item-right">
                  <span>Ciudad: </span>
                  {city}
                </p>
                <p className="align-item-right">
                  <span>Dirección: </span>
                  {address}
                </p>
                {address2 ? (
                  <p className="align-item-right">
                    <span>Dirección de emergencia: </span>
                    {address2}
                  </p>
                ) : null}
                <p className="align-item-right">
                  <span>Codigo postal: </span>
                  {postalCode}
                </p>
                <p>
                  <span>Estado del envío: </span>
                  {status}
                </p>
                <p>
                  <span>Número de orden: </span>
                  {id}
                </p>
                <div className="order-view-container">
                  <button
                    className="o-button"
                    onClick={() => handleDispatch(params.id)}
                  >
                    Despachada
                  </button>
                  <button
                    className="o-button"
                    onClick={() => handleDelivery(params.id)}
                  >
                    Entregada
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Order;
