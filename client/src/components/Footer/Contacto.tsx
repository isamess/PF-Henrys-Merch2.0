import React from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { validate } from "./Validaciones";

export const Contacto = () => {
  const [errors, setErrors] = useState<any>({});
  const [input, setInput] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

    setErrors(
      validate({
        ...input,
        [e.currentTarget.name]: e.currentTarget.value,
      })
    );
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iptjdll",
        "template_opk1ecv",
        e.currentTarget,
        "DRImx5IvdrqGW5yoj"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    e.currentTarget.reset();
  };

  return (
    <div className="div-form">
      <h1 className="title-form">Contáctanos!</h1>
      <form className="" onSubmit={sendEmail}>
       

        {errors.user_name ? (
          <div className="col-md-6">
            <label htmlFor="validationServer03" className="form-label">
              Nombre y Apellido
            </label>
            <input
              type="text"
              name="user_name"
              className="form-control is-invalid"
              value={input.user_name}
              onChange={handleChange}
              id="validationServer03"
              aria-describedby="validationServer03Feedback"
              required
            />
            <div id="validationServer03Feedback" className="invalid-feedback">
              {errors.user_name}
            </div>
          </div>
        ) : ( <div className="col-md-4">
        <label htmlFor="validationServer01" className="form-label">
          Nombre y Apellido
        </label>
        <input
          type="text"
          name="user_name"
          className={input.user_name.length !== 0 ? "form-control is-valid" : ""}
          id="validationServer01"
          value={input.user_name}
          onChange={handleChange}
          required
        />
        <div className="valid-feedback">Campos completados correctamente!</div>
      </div>)}

        <hr />

        <label>Email</label>
        <input type="email" name="user_email" />
        <hr />
        <select className="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <hr />

        <label></label>
        <textarea name="user_message" id="" cols={30} rows={10}></textarea>
        <hr />
        <button>Send</button>
      </form>
    </div>
  );
};
