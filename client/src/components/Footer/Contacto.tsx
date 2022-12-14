import React, { useState } from "react";

const useForm = (inputs: any) => {
  //Hook personalizado para el form
  const [input, setInput] = useState(inputs);

  const handlerInputChange = ({ target }: any) => {
    setInput({ ...input, [target.name]: target.value });
  };

  return [input, handlerInputChange, setInput];
};

export const Contacto = () => {
  const [lista, setLista] = useState<any[]>([]);

  const [input, handlerInputChange, setInput] = useForm({
    nombre: "",
    apellido: "",
    email: "",
    comentarios: "",
  });

  const addComentario = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLista([...lista, input]);
    setInput({ nombre: "", apellido: "", email: "" });
  };
  return (
    <div className="d-flex flex-column mb-3">
      <form
        className="bg-success p-2 text-dark bg-opacity-10 mt-auto"
        onSubmit={(e: any) => addComentario(e)}
      >
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Nombre:
          </label>
          <input
            name="nombre"
            className="form-control"
            placeholder="Nombre..."
            onChange={handlerInputChange}
            value={input.nombre}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Apellido:
          </label>
          <input
            name="apellido"
            className="form-control"
            placeholder="Apellido..."
            onChange={handlerInputChange}
            value={input.apellido}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Ingrese su email:
          </label>
          <input
            name="email"
            className="form-control"
            placeholder="Email..."
            onChange={handlerInputChange}
            value={input.email}
          />
        </div>
        <select
          className="form-select form-select-sm"
          aria-label=".form-select-sm example"
        >
          <option selected>¿Que tipo de comentario desea hacer?:</option>
          <option value="1">Sugerencia</option>
          <option value="2">Duda</option>
          <option value="3">Reclamo</option>
        </select>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
          </label>
          <textarea className="form-control" placeholder="Ingrese aquí su comentario..." rows={3} />
        </div>
        <button type="submit" className="btn btn-primary btn-sm">
          ENVIAR
        </button>
      </form>
    </div>
  );
};
