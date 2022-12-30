import React from "react";
import { Link, NavLink } from "react-router-dom";

interface Categories {
  categories: Array<{
    name: string;
  }>;
}

const NavBar = ({ categories }: Categories) => {
  return (
    <div className= "container">
<nav className="navbar navbar-expand-lg bg-warning py-3 px-2 d-flex justify-content-center width-100%">
      <div className="container-fluid">
      <ul className="list-group list-group-horizontal list-unstyled ">
        <li>
      <NavLink to={"/"}>
        <button className= "border-none" ><img src= "https://assets.soyhenry.com/henry-landing/assets/Henry/logo-white.png"  width= "260px" height={"auto"} className=" bg-black" alt="logo" /></button>
      </NavLink>
      </li>
      </ul>
      <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-dark fw-bold active"
                    : "nav-link text-dark fw-bold"
                }
              >
                Registrate
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-dark fw-bold"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorías
              </a>
              <ul className="dropdown-menu">
                {categories.map((category) => {
                  return (
                    <li key={category.name}>
                      <Link
                        to={`/category/${category.name}`}
                        className={"dropdown-item"}
                      >
                        {category.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>

            <li className="nav-item text-dark fw-bold">
              <NavLink
                to={"/profile"}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-dark fw-bold active"
                    : "nav-link text-dark fw-bold"
                }
              >
                Mi Cuenta
              </NavLink>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
    </div>
  );
};

export { NavBar };
