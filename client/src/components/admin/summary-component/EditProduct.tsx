import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { productsEdit } from "../../../redux/slices/ProductsSlice";

export default function EditProduct(prodId: any) {
  const dispatch = useDispatch();
  const { categories, products }: any = useSelector(
    (state: any) => state.products
  );

  const [open, setOpen] = useState<boolean>(false);
  const [currentProd, setCurrentProd] = useState<Object>({});
  const [previewImg, setPreviewImg] = useState<string>("");
  const [productImg, setProductImg] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [stock, setStock] = useState<string>("");

  const handleClickOpen = () => {
    setOpen(true);

    let selectedProd = products.filter(
      (item: any) => item._id === prodId.prodId
    );

    selectedProd = selectedProd[0];
    setCurrentProd(selectedProd);

    if (selectedProd.image.url) setPreviewImg(selectedProd.image.image);
    if (selectedProd.image) setPreviewImg(selectedProd.image);
    setName(selectedProd.name);
    setCategory(selectedProd.category[0]);
    setDesc(selectedProd.desc);
    setPrice(selectedProd.price);
    setStock(selectedProd.stock);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleProductImageUpload = (e: any) => {
    const file: any = e.target.files[0];

    TransformFile(file);
  };

  const TransformFile = (file: any) => {
    const reader: any = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImg(reader.result);
        setPreviewImg(reader.result);
      };
    } else {
      setProductImg("");
    }
  };

  const handleProductEdit = (e: any) => {
    e.preventDefault();

    dispatch(
      productsEdit({
        productImg: productImg !== "" ? productImg : null,
        product: {
          ...currentProd,
          name: name,
          category: category,
          price: price,
          desc: desc,
          stock: stock,
        },
      })
    );
    setOpen(false);
  };

  return (
    <div>
      <button className="bg-primary" onClick={handleClickOpen}>
        Edit
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"md"}
      >
        <DialogTitle>Editar</DialogTitle>
        <DialogContent>
          <div className="create-product">
            <form className="form" onSubmit={handleProductEdit}>
              <h3>Editar Producto</h3>
              <input
                type="file"
                accept="image/"
                onChange={handleProductImageUpload}
              />
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
                placeholder="descripción"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
              <select
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                required
              >
                <option value="">Ingrese Categoría</option>
                {categories?.map((category: any) => (
                  <option value={category.category} key={category.category}>
                    {category.category}
                  </option>
                ))}
              </select>
              <input
                type="number"
                required
                placeholder="precio"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <input
                type="number"
                required
                placeholder="stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
              <button className="p-button" type="submit">
                Submit
              </button>
            </form>
            <div className="image-preview">
              {previewImg ? (
                <>
                  <img src={previewImg} alt="product" />
                </>
              ) : (
                <p>Preview de la imagen aparecera acá</p>
              )}
            </div>
          </div>
        </DialogContent>
        <DialogActions className="mx-3">
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
