import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryFetch,
  productsEdit,
} from "../../../redux/slices/ProductsSlice";
import { userEdit } from "../../../redux/slices/UsersSlice";

export default function EditUser(prodId: any) {
  const dispatch = useDispatch();
  const { users }: any = useSelector((state: any) => state.users);

  const [open, setOpen] = useState<boolean>(false);
  const [currentProd, setCurrentProd] = useState<Object>({});
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [admin, setAdmin] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);

    let selectedUser = users.filter((item: any) => item._id === prodId.prodId);

    selectedUser = selectedUser[0];

    setCurrentProd(selectedUser);

    setName(selectedUser.name);
    setEmail(selectedUser.email);
    setAddress(selectedUser.address);
    setAdmin(selectedUser.isAdmin);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleProductEdit = (e: any) => {
    e.preventDefault();

    dispatch(
      userEdit({
        ...currentProd,
        name: name,
        email: email,
        address: address,
        isAdmin: admin,
      })
    );
    setOpen(false);
  };

  return (
    <div>
      <button className="bg-primary" onClick={handleClickOpen}>
        Edit
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
                  admin === false ? setAdmin(true) : setAdmin(false)
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
  );
}
