import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { userDelete, userEdit } from "../../redux/slices/UsersSlice";

const UserProfile = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const auth: any = useSelector((state: any) => state.auth);
  const { users }: any = useSelector((state: any) => state.users);

  const [atLoad, setAtLoad] = useState<boolean>(true);

  const [open, setOpen] = useState<boolean>(false);
  const [currentUser, setCurrentOrder] = useState<Object>({});
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [admin, setAdmin] = useState<boolean>(false);

  const fetchUser = () => {
    let selectedUser = users.filter((item: any) => item._id === params.id);

    selectedUser = selectedUser[0];

    setCurrentOrder(selectedUser);

    setName(selectedUser.name);
    setEmail(selectedUser.email);
    setAddress(selectedUser.address);
    setAdmin(selectedUser.isAdmin);
  };

  if (users.length > 0) {
    if (atLoad) {
      fetchUser();

      setAtLoad(false);
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleProductEdit = (e: any) => {
    e.preventDefault();

    dispatch(
      userEdit({
        ...currentUser,
        name: name,
        email: email,
        address: address,
        isAdmin: admin,
      })
    );
    setOpen(false);
  };

  const handleDelete = (id: any) => {
    dispatch(userDelete(id));
  };
  return (
    <>
      {atLoad ? (
        <h3 className="not-found">Cargando ...</h3>
      ) : (
        <div className="product">
          <div className="product-container">
            <>
              <div className="product-details">
                <h3>{name}</h3>
                <p>
                  <span>E-mail: </span>
                  {email}
                </p>

                <p>
                  <span>Dirección: </span> {address}
                </p>

                {auth.isAdmin ? (
                  <>
                    <div className="d-flex">
                      <span>Rol: </span>
                      <div className="d-flex w-5 mx-5">
                        {admin ? (
                          <div className="list-delivered">Administrador</div>
                        ) : (
                          <div className="list-dispatched">Cliente</div>
                        )}
                      </div>
                    </div>
                    <div className="order-view-container">
                      {/* <button
                        className="o-button"
                        onClick={() => handleDelete(params.id)}
                      >
                        Eliminar
                      </button> */}
                      <button className="o-button" onClick={handleClickOpen}>
                        Editar
                      </button>
                      <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Editar</DialogTitle>
                        <DialogContent>
                          <div className="create-product">
                            <form className="form" onSubmit={handleProductEdit}>
                              <h3>Editar Usuario</h3>

                              <input
                                required
                                type="text"
                                placeholder="nombre"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              />
                              <input
                                required
                                type="text"
                                placeholder="e-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                              <input
                                type="text"
                                required
                                placeholder="dirección"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                              />
                              <input
                                type="checkbox"
                                placeholder="admin"
                                checked={admin}
                                onChange={() =>
                                  admin === false
                                    ? setAdmin(true)
                                    : setAdmin(false)
                                }
                              />
                              <button className="p-button" type="submit">
                                Submit
                              </button>
                            </form>
                          </div>
                        </DialogContent>
                        <DialogActions className="mx-3">
                          <Button onClick={handleClose}>Cancel</Button>
                        </DialogActions>
                      </Dialog>
                    </div>
                  </>
                ) : null}
              </div>
            </>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};
export default UserProfile;
