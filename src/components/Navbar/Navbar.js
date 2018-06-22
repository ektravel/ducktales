import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <ul className="nav nav-pills nav-fill">
  <li className="nav-item">
  <a className="navbar-brand" href="#"><img src="./assets/images/Ducktales_Logo.png" className="d-inline-block align-top" alt=""  height="70" />
    </a>
  </li>
  <li className="nav-item" id="navMessage">
  <span className="nav-item">
          {props.message}
        </span>
  </li>
  <li className="nav-item">
  <span className="nav-item pull-right" id="scoreSpan">
          Score: {props.score} | Top Score: {props.topscore}
        </span>
  </li>
</ul>
    );
    
export default Navbar;
