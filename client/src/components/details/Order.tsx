import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { url, setHeaders } from "../../redux/slices/api";
import Footer from "../Footer/Footer";
import { ordersEdit } from "../../redux/slices/OrdersSlice";

const Order = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const [order, setOrder] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      try {
        const res: any = await axios.get(
          `${url}/orders/list/${params.id}`,
          setHeaders()
        );
        console.log(res.data);
        setOrder(res.data);
      } catch (err: any) {
        console.log(err);
      }
      setLoading(false);
    }

    fetchData();
  }, [params.id]);

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
          {loading ? (
            <p>Cargando ...</p>
          ) : (
            <>
              <div className="product-details">
                <h3>{order.shipping.name}</h3>
                <p>
                  <span>E-mail: </span>
                  {order.shipping.email}
                </p>
                <p>
                  <span>Numero telefono movil: </span>
                  {order.shipping.phone}
                </p>
                <p>
                  <span>Dirección del envío: </span>
                </p>
                <p className="align-item-right">
                  <span>Pais: </span>
                  {order.shipping.address.country}
                </p>
                <p className="align-item-right">
                  <span>Región: </span>
                  {order.shipping.address.state}
                </p>
                <p className="align-item-right">
                  <span>Ciudad: </span>
                  {order.shipping.address.city}
                </p>
                <p className="align-item-right">
                  <span>Dirección: </span>
                  {order.shipping.address.line1}
                </p>
                {order.shipping.address.line2 ? (
                  <p className="align-item-right">
                    <span>Dirección de emergencia: </span>
                    {order.shipping.address.line2}
                  </p>
                ) : null}
                <p className="align-item-right">
                  <span>Codigo postal: </span>
                  {order.shipping.address.postal_code}
                </p>
                <p>
                  <span>Estado del envío: </span>
                  {order.delivery_status}
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
