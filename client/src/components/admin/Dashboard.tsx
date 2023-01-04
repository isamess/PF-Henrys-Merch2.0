import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="d-flex h-5">
      <div className="side-nav">
        <h3>Quick Links</h3>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to={"/admin/summary"}
        >
          Summary
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to={"/admin/products"}
        >
          Products
        </NavLink>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
