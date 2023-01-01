import React from "react";
import { useNavigate } from "react-router-dom";

const Header3 = () => {
  const navigate = useNavigate();

  const handlePosts = () => {
    navigate("/posts");
  };

  const handleLogout = () => {
    localStorage.setItem("token", "");
    navigate("/login");
  };

  const handleAddPost = () => {
    navigate("/add");
  };

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
            <li className="nav-item" onClick={handlePosts}>
              <a className="nav-link">Your Posts</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button
              className="btn btn-outline-success"
              style={{ marginLeft: "3px" }}
              onClick={handleAddPost}
            >
              Add Post
            </button>
            <button
              className="btn btn-outline-success"
              style={{ marginLeft: "3px" }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header3;