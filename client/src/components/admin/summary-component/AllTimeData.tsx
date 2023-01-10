import { iteratorSymbol } from "immer/dist/internal";
import { useSelector } from "react-redux";

const AllTimeData = () => {
  const { items }: any = useSelector((state: any) => state.products);

  return (
    <div className="atd-main">
      <h3>Información completa</h3>
      <div className="atd-info-even">
        <div className="atd-title">Usuarios</div>
        <div className="atd-data">200</div>
      </div>
      <div className="atd-info">
        <div className="atd-title">Productos</div>
        <div className="atd-data">{items.length}</div>
      </div>
      <div className="atd-info-even">
        <div className="atd-title">Ordenes</div>
        <div className="atd-data">200</div>
      </div>
      <div className="atd-info">
        <div className="atd-title">Ganancias</div>
        <div className="atd-data">$20,000</div>
      </div>
    </div>
  );
};

export default AllTimeData;
