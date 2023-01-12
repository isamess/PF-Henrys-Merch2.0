import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { url, setHeaders } from "../../redux/slices/api";
import Footer from "../Footer/Footer";
import { userDelete } from "../../redux/slices/UsersSlice";
import EditUser from "../admin/summary-component/EditUsers";

const UserProfile = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const [user, setUser] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      try {
        const res: any = await axios.get(`${url}/users/list/`, setHeaders());

        setUser(res.data);
      } catch (err: any) {
        console.log(err);
      }
      setLoading(false);
    }

    fetchData();
  }, [params.id]);

  const handleDelete = (id: any) => {
    dispatch(userDelete(id));
  };

  return (
    <>
      <div className="product">
        <div className="product-container">
          {loading ? (
            <p>Cargando ...</p>
          ) : (
            <>
              <div className="product-details">
                <h3>{user.name}</h3>
                <p>
                  <span>E-mail: </span>
                  {user.email}
                </p>
                <p>
                  <span>Dirección: </span>
                  {user.address}
                </p>
              </div>
            </>
          )}

          <div className="order-view-container">
            <button
              className="o-button"
              onClick={() => handleDelete(params.id)}
            >
              Eliminar
            </button>
            <EditUser prodId={params.id} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default UserProfile;
