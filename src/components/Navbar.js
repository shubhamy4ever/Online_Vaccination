import React from "react";
import { Link, useLocation } from "react-router-dom";
export const Navbar = () => {
  const location = useLocation();
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Online Vaccination
          </Link>
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
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/totalcases" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/totalcases"
                >
                  Total Cases
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/admin" ? "active" : ""
                  }`}
                  to="/admin"
                >
                  Admin
                </Link>
              </li>
            </ul>
            <Link className="btn btn-outline-success" to="/bookavaccine">
              Book A Vaccine
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
