import { useEffect, useState } from "react";
import { setHeaders, url } from "../../../redux/slices/api";
import axios from "axios";
import moment from "moment";

const Transaction = () => {
  const [orders, setOrders] = useState<Array<any>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const res: any = await axios.get(
          `${url}/orders/?new=true`,
          setHeaders()
        );

        setOrders(res.data);
      } catch (err: any) {
        console.log(err);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="transaction-window">
      {isLoading ? (
        <p>Cargando Transacción</p>
      ) : (
        <>
          <h3>Últimas Transacciones</h3>
          {orders?.map((order: any, index: any) =>
            index % 2 === 0 ? (
              <div className="transaction-even" key={index}>
                <p>{order.shipping.name}</p>
                <p>{(order.total / 100).toLocaleString()}</p>
                <p>{moment(order.createdAt).fromNow()}</p>
              </div>
            ) : (
              <div className="transaction" key={index}>
                <p>{order.shipping.name}</p>
                <p>{(order.total / 100).toLocaleString()}</p>
                <p>{moment(order.createdAt).fromNow()}</p>
              </div>
            )
          )}
        </>
      )}
    </div>
  );
};

export default Transaction;
