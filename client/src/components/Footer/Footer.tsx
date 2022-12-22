<<<<<<< HEAD
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React from "react"
import { Link, NavLink } from "react-router-dom"

=======
import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
>>>>>>> 5927ec9fd23af79454ed8cb26d09bb121bb5deef



export default function Footer() {
  return (
<<<<<<< HEAD
    <footer className="bg-black text-white pt-5 pb-4">
      <div className="container text-center text-md-left mx-100%">
        <div className="row text-center text-md-left ">
          <div>
        <img src= "https://assets.soyhenry.com/henry-landing/assets/Henry/logo-white.png"  width= "180px" height={"auto"} className=" bg-black" alt="logo" />
        <h6 className= "text-white" >Invertimos en tu educación</h6>
          </div>
=======
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
        <img src="" alt="" />
>>>>>>> 5927ec9fd23af79454ed8cb26d09bb121bb5deef
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h3 className="">Nosotros</h3>
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
          <h3 className="">Tienda Online</h3>
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
          <h3 className="">Atención al cliente</h3>
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
            <h3>Contactanos!</h3>
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li>
                <NavLink to="/contacto" className="nav-link">Sugerencias, dudas y consultas</NavLink>
                </li>
            </ul>
            
            </div>
        </div>
      </div>
<<<<<<< HEAD
{/** xxxxxxxxxxxx */}
<div className= "container" >
      <div className= "col-md-5 col-lg-5 col-xl-5 mx-auto mt-5 mb-5 d-flex justify-content-center">
      <ul className="list-group list-group-horizontal ">
          <li className="list-group-item flex-fill mx-5 rounded-circle bg-warning ">
            <a href="https://www.linkedin.com/school/soyhenry/" >
                <i className="bi bi-linkedin text-dark" ></i></a>
          </li>

          <li className="list-group-item flex-fill mx-5 rounded-circle bg-warning">
            <a href="https://www.instagram.com/soyhenry_ok">
                <i className="bi bi-instagram text-dark"></i>
            </a>
          </li>
          
          <li className="list-group-item flex-fill mx-5 rounded-circle bg-warning">
            <a href="https://www.twitter.com/soyhenry_ok">
                <i className="bi bi-twitter text-dark"></i>
            </a>
          </li>

          <li className="list-group-item flex-fill mx-5 rounded-circle bg-warning">
            <a href="https://www.youtube.com/channel/UCyPi0AHwcuCP-QJxrxq-f2Q">
                <i className="bi bi-youtube text-dark"></i>
            </a>
        </li>

        <li className="list-group-item flex-fill mx-5 rounded-circle bg-warning">
            <a href="https://www.facebook.com/HENRY-108437840594440/">
                <i className="bi bi-facebook text-dark"></i>
            </a>
        </li>

    </ul>
      </div>

</div>

      <div className= "container text-center">
        <h6>Hecho con 💛por alumn@s de Henry</h6>
        <h6>Henry © 2022 | Todos los derechos reservados</h6>
      </div>
=======
>>>>>>> 5927ec9fd23af79454ed8cb26d09bb121bb5deef
    </footer>
  );
}

