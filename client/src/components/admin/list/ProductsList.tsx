import { useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  productDelete,
  productsFetch,
} from "../../../redux/slices/ProductsSlice";
import EditProduct from "../summary-component/EditProduct";

export default function ProductsList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products }: any = useSelector((state: any) => state.products);

  const handleDelete = (id: any) => {
    dispatch(productDelete(id));
  };

  const rows: any =
    products &&
    products.map((item: any) => {
      return {
        id: item._id,
        imageUrl: item.image,
        pName: item.name,
        pDesc: item.desc ? item.desc : null,
        price: item.price.toFixed(2).toLocaleString(),
        stock: item.stock,
      };
    });

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 220 },
    {
      field: "imageUrl",
      headerName: "Image",
      width: 100,
      renderCell: (params: any) => {
        return (
          <div className="list-image-container">
            <img src={params.row.imageUrl} alt="" />
          </div>
        );
      },
    },
    {
      field: "pName",
      headerName: "Nombre",
      width: 130,
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 80,
    },
    {
      field: "price",
      headerName: "Precio",
      width: 80,
    },
    {
      field: "pdesc",
      headerName: "Descripción",
      width: 220,
    },
    {
      field: "actions",
      headerName: "Acciones",
      sortable: false,
      width: 170,
      renderCell: (params: any) => {
        return (
          <div className="list-actions">
            <button
              className="bg-danger"
              onClick={() => handleDelete(params.row.id)}
            >
              Eliminar
            </button>
            <EditProduct prodId={params.row.id} />
            <button
              className="bg-success text-white"
              onClick={() => navigate(`/admin-product/${params.row.id}`)}
            >
              Ver
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
