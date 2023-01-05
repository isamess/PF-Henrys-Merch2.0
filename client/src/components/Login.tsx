import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/hooks";
import { loginUser } from "../redux/slices/AuthSlice";
import Footer from "./Footer/Footer";
import { toast } from "react-toastify";

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (auth._id) {
      navigate("/");
    }
  }, [auth._id, navigate]);

  const [user, setUser] = useState<any>({
    email: "",
    password: "",
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch(loginUser(user));
  }

  return (
    <>
      <form className={"cart-window"} onSubmit={handleSubmit}>
        <div>
          <h2 className="text-center font-weight-400 font-size-20 mt-5">
            Ingresa a tu cuenta
          </h2>

          <div className="register-container">
            <label htmlFor="exampleInputPassword1" className="form-label mt-3">
              Correo:
            </label>
            <input
              type="email"
              className="form-control"
              id="e-mail"
              placeholder="correo"
              onChange={(e: any) => setUser({ ...user, email: e.target.value })}
            />
          </div>

          <div className="register-container">
            <label htmlFor="exampleInputPassword1" className="form-label mt-3">
              Clave:
            </label>
            <input
              type="Password"
              className="form-control mb-3"
              id="password"
              placeholder="clave"
              onChange={(e: any) =>
                setUser({ ...user, password: e.target.value })
              }
            />
          </div>
          <div className="d-flex justify-content-center font-italic text-danger ">
            {auth.loginStatus === "rejected" ? <p>{auth.loginError}</p> : null}
          </div>
          <div className="register-button">
            <button type="submit" className="btn btn-primary my-5">
              {auth.registerStatus === "pending" ? "submiting" : "Login"}
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
}

export { Login };
