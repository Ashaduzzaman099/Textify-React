import React from "react";
import PropTypes from "prop-types";

export default function Navebar({ title, mode, toggleMode }) {
  return (
    <header className="header-area">
      <div className="row align-items-center">
        <div className="col-md-12">
          <nav
            className={`navbar p-3 navbar-expand-lg navbar-${mode} bg-${mode}`}
          >
            <a className="navbar-brand" href="#">
              {title}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/contact">
                    Contact
                  </Link>
                </li> */}
              </ul>
              <div className="form-check form-switch  ms-auto">
                <input
                  onClick={toggleMode}
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label "
                  htmlFor="flexSwitchCheckDefault"
                >
                  Enable Dark Mode
                </label>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

Navebar.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

Navebar.defaultProps = {
  title: "Default Title",
};
