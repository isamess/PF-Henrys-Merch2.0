import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { url, setHeaders } from "../../redux/slices/api";
import Footer from "../Footer/Footer";

const AdminProduct = () => {
  const params: any = useParams();

  const [product, setProduct] = useState<any>({});
  const [loading, seteLoading] = useState<boolean>(false);

  useEffect(() => {
    seteLoading(true);

    async function fetchData() {
      try {
        const res: any = await axios.get(
          `${url}/products/find/${params.id}`,
          setHeaders()
        );

        setProduct(res.data);
      } catch (err: any) {
        console.log(err);
      }
      seteLoading(false);
    }

    fetchData();
  }, [params.id]);

  return (
    <>
      <div className="product">
        <div className="product-container">
          {loading ? (
            <p>Cargando ...</p>
          ) : (
            <>
              <div className="product-image-container">
                <img src={product.image} alt="product" />
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>
                  <span>Descripción: </span>Desc
                </p>
                <div className="product price">
                  ${product.price?.toFixed(2).toLocaleString()}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminProduct;
