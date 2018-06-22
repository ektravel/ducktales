import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav  className="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Ducktales Game</a>
    <ul className = "navbar-nav">
    <li class="nav-item">
       Click an image to begin!
      </li>
      <li class="nav-item">
        Score: 0 | Top score: 0
      </li>
    </ul>
  </nav>


  );
  
export default Navbar;