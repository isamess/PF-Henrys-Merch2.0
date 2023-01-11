import { Outlet } from "react-router-dom";

const Users = () => {
  return (
    <>
      <div className="admin-header">Usuarios</div>
      <Outlet />
    </>
  );
};

export default Users;
