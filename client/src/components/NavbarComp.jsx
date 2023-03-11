import React from "react";
import "./style/navbarComp.css"


const NavbarComp = () => {

  return <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top " >
  <a className="navbar-brand" to="/">TravelP</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" to="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" to="#">Link1</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" to="#">Link2</a>
      </li>
      
    </ul>
    
    <button type="button" class="btn btn-outline-info btn-rounded" data-mdb-ripple-color="dark">LogIn/SignUp</button>
  </div>
</nav>
  </>;
};

export default NavbarComp;
