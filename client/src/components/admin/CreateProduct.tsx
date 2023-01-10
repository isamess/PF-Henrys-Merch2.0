import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryCreate,
  categoryFetch,
  productsCreate,
} from "../../redux/slices/ProductsSlice";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const { categories }: any = useSelector((state: any) => state.products);

  useEffect(() => {
    dispatch(categoryFetch());
  }, [dispatch]);

  const [productImg, setProductImg] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  // const [color, setColor] = useState("");
  const [createCategory, setCreateCategory] = useState("");

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

  const handleProductSubmit = (e: any) => {
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

  const handleCategorySubmit = (e: any) => {
    e.preventDefault();

    dispatch(
      categoryCreate({
        createCategory,
      })
    );
  };

  return (
    <div>
      <div className="create-product">
        <form className="form" onSubmit={handleProductSubmit}>
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
              <option value={category.category} key={category.category}>
                {category.category}
              </option>
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
      <div className="d-flex p-2 justify-content-left pb-3 border-top border-secondary m-5">
        <form className="form" onClick={handleCategorySubmit}>
          <h3>Crear Categoría</h3>
          <input
            type="text"
            required
            placeholder="categoria"
            onChange={(e) => setCreateCategory(e.target.value)}
          />
          <button className="p-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
