import React from "react";
import "./Navbar.css" ;
const Navbar = () =>{
    return (
        <nav className="navbar">
        <p className="logo">To-do List</p>
        <ul className="nav-links">
         
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    )
};

export default Navbar;