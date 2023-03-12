import React from "react";
import "./style/navbarComp.css";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";

const NavbarComp = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  fixed-top ">
        <a className=" nb navbar-brand" to="/">
          <img src={logo} alt="" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
            <li className="nav-item active">
              <a className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="#">
                Plan
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="#">
                Book
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavbarComp;
