import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setHeaders, url } from "../../../redux/slices/api";

const AllTimeData = () => {
  const { products }: any = useSelector((state: any) => state.products);
  const { users }: any = useSelector((state: any) => state.users);
  const { list }: any = useSelector((state: any) => state.orders);
  const [income, setIncome] = useState<number>(0);

  useEffect(() => {
    axios
      .get(`${url}/orders/total-income`, setHeaders())
      .then((res: any) => {
        var sum = res.data.reduce((total: any, i: any) => {
          return total + i.sales;
        }, 0);
        setIncome(sum);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [income]);

  return (
    <div className="atd-main">
      <h3>Información completa</h3>
      <div className="atd-info-even">
        <div className="atd-title">Usuarios</div>
        <div className="atd-data">{users.length}</div>
      </div>
      <div className="atd-info">
        <div className="atd-title">Productos</div>
        <div className="atd-data">{products.length}</div>
      </div>
      <div className="atd-info-even">
        <div className="atd-title">Ordenes</div>
        <div className="atd-data">{list.length}</div>
      </div>
      <div className="atd-info">
        <div className="atd-title">Ganancias</div>
        <div className="atd-data">${income / 100}</div>
      </div>
    </div>
  );
};

export default AllTimeData;
