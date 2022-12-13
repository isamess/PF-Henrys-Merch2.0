import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div>
        <img src="" alt="" />
        <div>
          <h3 className="">Nosotros</h3>
          <ul>
            <li>
              <a href="https://www.soyhenry.com/about-us" className="">
                ¿Quienes somos?
              </a>
            </li>
            <li>
              <a href="https://www.soyhenry.com" className="">
                Aplica a nuestras carreras
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="">Tienda Online</h3>
          <ul>
            <li>
              <Link to="/como-comprar" className="">
                Cómo comprar
              </Link>
            </li>
            <li>
              <Link to="/terminos" className="">
                Términos y condiciones
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="">Atención al cliente</h3>
          <ul>
            <li>
              <Link to="/preguntas" className="">
                Preguntas frecuentes
              </Link>
            </li>
            <li>
              <Link to="/politicas" className="">
                Políticas
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <NavLink to="/contacto">Contactanos!</NavLink>{" "}
        
      </div>
    </footer>
  );
}
