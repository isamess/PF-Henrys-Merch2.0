import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer/Footer";
import { registerUser } from "./redux/Slices/AuthSlice";
import { useAppDispatch } from "../hooks/hooks";
import { useNavigate } from "react-router-dom";

function RegisterUser() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (auth._id) {
      navigate("/cart");
    }
  }, [auth._id, navigate]);

  const [user, setUser] = useState<any>({
    name: "",
    email: "",
    password: "",
    adress: "",
    repassword: "",
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    if (user.password === user.repassword) {
      dispatch(registerUser(user));
    } else {
      alert("La claves no coinciden");
    }
  }

  console.log(user);

  return (
    <>
      <form className={"cart-window"} onSubmit={handleSubmit}>
        <div>
          <h2 className="text-center font-weight-400 font-size-20 mt-5">
            Crea tu cuenta
          </h2>
          <div className="register-container">
            <label htmlFor="exampleInputEmail1" className="form-label mt-5">
              Nombre completo:
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              placeholder="nombre"
              onChange={(e: any) => setUser({ ...user, name: e.target.value })}
            />
          </div>
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
              Dirección:
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="adress"
              placeholder="dirección"
              onChange={(e: any) =>
                setUser({ ...user, adress: e.target.value })
              }
            />
          </div>
          <div className="register-password">
            <div className="mx-5">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label mt-3"
              >
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
            <div className="mx-5">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label mt-3"
                onChange={(e: any) =>
                  setUser({ ...user, password: e.target.value })
                }
              >
                Repita la clave:
              </label>
              <input
                type="password"
                className="form-control mb-3"
                id="v-password"
                placeholder="repita clave"
                onChange={(e: any) =>
                  setUser({ ...user, repassword: e.target.value })
                }
              />
            </div>
          </div>
          <div className="d-flex justify-content-center font-italic text-danger ">
            {auth.registerStatus === "rejected" ? (
              <p>{auth.registerError}</p>
            ) : null}
          </div>
          <div className="register-button">
            <button type="submit" className="btn btn-primary mb-5 ">
              {auth.registerStatus === "pending" ? "submiting" : "Submit"}
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
}

export { RegisterUser };
