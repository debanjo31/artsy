import React from 'react'
import { FaBars, FaSearch, FaShoppingCart } from "react-icons/fa";
import './Navbar.css';

function Navbar() {
  return (
    <nav>
        <div className="navIcon">
            <FaBars />
        </div>
        <div className="navText">
            <h3>ARTSY.</h3>
        </div>
        <div className="navCart">
            <FaSearch />
            <FaShoppingCart />
        </div>
    </nav>
  )
}

export default Navbar