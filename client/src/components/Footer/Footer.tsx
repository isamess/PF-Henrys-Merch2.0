import React from "react"
import { Link, NavLink } from "react-router-dom"


export default function Footer() {
  return (
    <footer className="bg-black text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left ">
          <div>
        <img src= "https://assets.soyhenry.com/henry-landing/assets/Henry/logo-white.png"  width= "180px" height={"auto"} className=" bg-black" alt="logo" />
        <h6 className= "text-white" >Invertimos en tu educación</h6>
          </div>
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h3 className="text-warning">Nosotros</h3>
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <a href="https://www.soyhenry.com/about-us" className="nav-link">
                ¿Quienes somos?
              </a>
            </li>
            <li className="nav-item">
              <a href="https://www.soyhenry.com" className="nav-link">
                Aplica a nuestras carreras
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h3 className="text-warning">Tienda Online</h3>
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <Link to="/como-comprar" className="nav-link">
                Cómo comprar
              </Link>
            </li>
            <li>
              <Link to="/terminos" className="nav-link">
                Términos y condiciones
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h3 className="text-warning">Atención al cliente</h3>
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li>
              <Link to="/preguntas" className="nav-link">
                Preguntas frecuentes
              </Link>
            </li>
            <li>
              <Link to="/politicas" className="nav-link">
                Políticas
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h3 className="text-warning">Contactanos!</h3>
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li>
                <NavLink to="/contacto" className="nav-link">Sugerencias, dudas y consultas</NavLink>
                </li>
            </ul>
            
            </div>
        </div>
      </div>
      <br/>
      <div className= "container text-center">
        <h6>Hecho con 💛por alumn@s de Henry</h6>

      </div>
    </footer>
  );
}
