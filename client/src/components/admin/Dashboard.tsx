import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { FaUser, FaStore, FaClipboard, FaTachometerAlt } from "react-icons/fa";

const Dashboard = () => {
  const auth = useSelector((state: any) => state.auth);

  if (!auth.isAdmin)
    return (
      <div className="not-found">
        <p>Acceso denegado</p>;
      </div>
    );

  return (
    <div className="dashboard">
      <div className="side-nav">
        <h3>Quick Links</h3>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to={"/admin/summary"}
        >
          <FaTachometerAlt /> Summary
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to={"/admin/products"}
        >
          <FaStore /> Products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to={"/admin/ordenes"}
        >
          <FaClipboard /> Ordenes
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to={"/admin/usuarios"}
        >
          <FaUser /> Usuarios
        </NavLink>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
