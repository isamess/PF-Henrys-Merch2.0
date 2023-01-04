import { Outlet, useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="admin-header">
        Productos
        <button
          className="p-button"
          onClick={() => navigate("/admin/products/create-product")}
        >
          Crear
        </button>
      </div>
      <Outlet />
    </>
  );
};

export default Products;
