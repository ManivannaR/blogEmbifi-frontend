import React from "react";
import { useNavigate } from "react-router-dom";

const Header2 = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          onClick={() => {
            navigate("/");
          }}
          style={{ fontWeight: "700" }}
        >
          Täglich Zeitung
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
              <a
                className="nav-link active"
                aria-current="page"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button
              className="btn btn-outline-success"
              style={{ marginLeft: "3px" }}
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
            <button
              className="btn btn-outline-success"
              style={{ marginLeft: "3px" }}
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header2;
