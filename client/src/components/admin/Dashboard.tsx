import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="d-flex h-5">
      <div className="side-nav">
        <h3>Quick Links</h3>
        <NavLink to={"/admin/summary"}>Summary</NavLink>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
