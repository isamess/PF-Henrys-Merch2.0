import "../css/navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

interface Categories {
  categories: Array<{
    name: string;
  }>;
}

const NavBar = ({ categories }: Categories) => {
  const { cartTotalQuantity } = useSelector((state: any) => state.cart);

  return (
    <nav className="navbar navbar-expand-lg bg-warning py-3 px-2">
      <div className="container-fluid">
        <a className="navbar-logo" href="#">
          SoyHenry
        </a>

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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-black fw-bold active"
                    : "nav-link text-black"
                }
              >
                Registrate
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-black"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorías
              </a>
              <ul className="dropdown-menu border border-dark bg-warning ">
                {categories.map((category) => {
                  return (
                    <li key={category.name}>
                      <Link
                        to={`/category/${category.name}`}
                        className="dropdown-item "
                      >
                        {category.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>

            <li className="nav-item">
              <NavLink
                to={"/profile"}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-black fw-bold active"
                    : "nav-link text-black"
                }
              >
                Mi Cuenta
              </NavLink>
            </li>
            <Link to="/cart">
              <div className="nav-cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="black"
                  className="bi bi-cart2"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
                <span className="items-cart">
                  <span className="item">{cartTotalQuantity}</span>
                </span>
              </div>
            </Link>
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <button className="mx-3 btn bg-secondary text-white">Enter</button>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
