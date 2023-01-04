import { useState } from "react";
import { categories } from "../../data/categories";
import { useDispatch } from "react-redux";
import { productsCreate } from "../../redux/slices/ProductsSlice";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const [productImg, setProductImg] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");

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
      };
    } else {
      setProductImg("");
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    dispatch(
      productsCreate({
        name,
        category,
        price,
        desc,
        image: productImg,
      })
    );
  };

  return (
    <div className="create-product">
      <form className="form" onSubmit={handleSubmit}>
        <h3>Crear un Producto</h3>
        <input
          type="file"
          accept="image/"
          onChange={handleProductImageUpload}
        />
        <input
          type="text"
          required
          placeholder="nombre"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder="descripción"
          onChange={(e) => setDesc(e.target.value)}
        />
        <select required onChange={(e) => setCategory(e.target.value)}>
          <option value="">Ingrese Categoría</option>
          {categories?.map((category: any) => (
            <option value={category.name}>{category.name}</option>
          ))}
        </select>
        <input
          type="text"
          required
          placeholder="precio"
          onChange={(e) => setPrice(e.target.value)}
        />
        <button className="p-button" type="submit">
          Submit
        </button>
      </form>
      <div className="image-preview">
        {productImg ? (
          <>
            <img src={productImg} alt="product" />
          </>
        ) : (
          <p>Preview de la imagen aparecera acá</p>
        )}
      </div>
    </div>
  );
};

export default CreateProduct;
