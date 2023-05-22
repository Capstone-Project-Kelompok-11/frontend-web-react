/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import "../../index.css";
import homeImage from "../../assets/home.svg";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="home">
          <a className="Home" href="/">
            <img src={homeImage} alt="some-image" />
          </a>
          <div className="login">
            <a className="ID" href="#">
              ID
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
