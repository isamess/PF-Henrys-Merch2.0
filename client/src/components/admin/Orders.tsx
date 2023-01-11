import { Outlet } from "react-router-dom";

const Orders = () => {
  return (
    <>
      <div className="admin-header">Ordenes</div>
      <Outlet />
    </>
  );
};

export default Orders;
