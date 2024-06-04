import React from "react";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className={`p-3  ${styles.header_container}`}>
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" className="nav-link px-2 text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link px-2 text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link px-2 text-primary">
                  Contact
                </Link>
              </li>
            </ul>
            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
