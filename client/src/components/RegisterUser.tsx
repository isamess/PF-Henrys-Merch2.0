import React from "react";
import Footer from "./Footer/Footer";

function RegisterUser() {
  return (
    <>
      <form className={"cart-window"}>
        <div className="register-container">
          <label htmlFor="exampleInputEmail1" className="form-label mt-5">
            Nombre completo:
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="register-container">
          <label htmlFor="exampleInputPassword1" className="form-label mb-3">
            Correo:
          </label>
          <input
            type="email"
            className="form-control mb-3"
            id="exampleInputPassword1"
          />
        </div>
        <div className="register-button">
          <button type="submit" className="btn btn-primary mb-5 ">
            Submit
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
}

export { RegisterUser };
