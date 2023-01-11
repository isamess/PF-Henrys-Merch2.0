import { DataGrid, GridColDef } from "@mui/x-data-grid";
import moment from "moment";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ordersEdit, ordersFetch } from "../../../redux/slices/OrdersSlice";

export default function OrdersList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { list }: any = useSelector((state: any) => state.orders);

  useEffect(() => {
    dispatch(ordersFetch());
  }, [list, dispatch]);

  const handleDispatch = (id: any) => {
    dispatch(
      ordersEdit({
        id,
        delivery_status: "dispatched",
      })
    );
  };

  const handleDelivery = (id: any) => {
    dispatch(
      ordersEdit({
        id,
        delivery_status: "delivered",
      })
    );
  };

  const rows: any =
    list &&
    list.map((order: any) => {
      return {
        id: order._id,
        cName: order.shipping.name,
        amount: (order.total / 100).toLocaleString(),
        dStatus: order.delivery_status,
        date: moment(order.createdAt).fromNow(),
      };
    });

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 220 },
    {
      field: "cName",
      headerName: "Nombre",
      width: 120,
    },
    {
      field: "amount",
      headerName: "Total($)",
      width: 100,
    },
    {
      field: "dStatus",
      headerName: "Estado",
      width: 160,
      renderCell: (params: any) => {
        return (
          <div>
            {params.row.dStatus === "pending" ? (
              <div className="list-pending">Pending</div>
            ) : params.row.dStatus === "dispatched" ? (
              <div className="list-dispatched">Dispatched</div>
            ) : params.row.dStatus === "delivered" ? (
              <div className="list-delivered">Delivered</div>
            ) : (
              "Error"
            )}
          </div>
        );
      },
    },
    {
      field: "date",
      headerName: "Fecha",
      width: 120,
    },
    {
      field: "actions",
      headerName: "Acciones",
      sortable: false,
      width: 220,
      renderCell: (params: any) => {
        return (
          <div className="list-actions">
            <button
              className="bg-info text-white"
              onClick={() => handleDispatch(params.row.id)}
            >
              Dispatch
            </button>
            <button
              className="bg-primary text-white"
              onClick={() => handleDelivery(params.row.id)}
            >
              Delivey
            </button>
            <button
              className="bg-success text-white"
              onClick={() => navigate(`/admin-order/${params.row.id}`)}
            >
              Ver
            </button>
          </div>
        );
      },
    },
  ];

  console.log(list[0]);

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
