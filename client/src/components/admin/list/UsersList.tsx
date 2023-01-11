import { useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userDelete, usersFetch } from "../../../redux/slices/UsersSlice";
import EditUser from "../summary-component/EditUsers";

export default function UsersList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users }: any = useSelector((state: any) => state.users);

  const handleDelete = (id: any) => {
    dispatch(userDelete(id));
  };

  const rows: any =
    users &&
    users.map((item: any) => {
      return {
        id: item._id,
        name: item.name,
        email: item.email,
        address: item.address,
        isAdmin: item.isAdmin,
      };
    });

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "Id",
      width: 220,
    },
    {
      field: "name",
      headerName: "Nombre",
      width: 130,
    },
    {
      field: "email",
      headerName: "E-mail",
      width: 200,
    },
    {
      field: "address",
      headerName: "Dirección",
      width: 200,
    },
    {
      field: "isAdmin",
      headerName: "Rol",
      width: 120,
      renderCell: (params: any) => {
        return (
          <div>
            {params.row.isAdmin ? (
              <div className="list-delivered">Administrador</div>
            ) : (
              <div className="list-dispatched">Cliente</div>
            )}
          </div>
        );
      },
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
            <EditUser userId={params.row.id} />
            <button
              className="bg-success text-white"
              onClick={() => navigate(`/admin-user/${params.row.id}`)}
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
