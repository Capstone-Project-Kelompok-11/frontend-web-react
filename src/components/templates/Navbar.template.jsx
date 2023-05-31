/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "../../index.css";
import homeImage from "../../assets/Home.svg";

function Navbar() {
  return (
    <div>
      <nav className="bg-white fixed w-full ">
        <div className="flex items-center justify-between">
          <a className="Home" href="/">
            <img src={homeImage} alt="some-image" className="w-500 h-100" />
          </a>
          <a className="items-end flex mr-20" href="#">
            ID
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
