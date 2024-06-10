import React, { useState } from "react";
import "./Navbar.css";
import {FaBars, FaTimes} from "react-icons/fa";
import { Link } from "react-router-dom"
import images from "../../constants/images"

const Navbar = () => {
 const [toggleMenu, setToggleMenu] = useState(false);

 return(
  <nav className="navbar">
   <div className="container flex">
    <div className="brand__and__toggler flex">
      <a href="index.html" alt="" className="navbar__brand">
       <img src={images.logo} alt="site logo"/> 
      </a>
      <button type="button" className="navbar__open--btn text__light"
      onClick={() => setToggleMenu(true)}>
        <FaBars size={26} />
      </button>
     </div>  
     
     <div className="navbar__collapse">
      <ul className="navbar__nav">
        <li className="nav__item">
          <Link to='/'  className="nav__link text__upper fw__6
          text__light ">Domov</Link>
        </li>
        <li className="nav__item">
          <Link to='/about' className="nav__link text__upper fw__6
          text__light ">Onas</Link>
        </li>
        <li className="nav__item">
          <Link to='/gallery' className="nav__link text__upper fw__6
          text__light ">Galerija</Link>
        </li>
        <li className="nav__item">
          <Link to='/buy' className="nav__link text__upper fw__6
          text__light ">Nakup</Link>
        </li>
        <li className="nav__item">
          <Link to='/trip' className="nav__link text__upper fw__6
          text__light ">Izleti</Link>
        </li>
      </ul>
     </div>

     {toggleMenu && (
      <div className="navbar__smallscreen">
        <button type="button" className="navbar__close--btn text__light" 
        onClick={() => setToggleMenu(false)}>
          <FaTimes size={32} />
        </button>
        <ul className="navbar__nav--smallscreen text__light">
          <li className="nav__item">
            <Link to='/' className="nav__link text__upper fw__6 nav__active text__light">
              Domov
            </Link>
          </li>
          <li className="nav__item">
          <Link to='/about' className="nav__link text__upper fw__6
          text__light ">O nas</Link>
        </li>
        <li className="nav__item">
            <Link to='/gallery' className="nav__link text__upper fw__6 text__light">
              Galerija
            </Link>
          </li>
          <li className="nav__item">
            <Link to='/buy' className="nav__link text__upper fw__6 text__light">
              Nakup
            </Link>
          </li>
          <li className="nav__item">
            <Link to='/trip' className="nav__link text__upper fw__6 text__light">
              Izleti
            </Link>
          </li>
        </ul>
      </div>
     )}
   </div>
  </nav>
 )
}

export default Navbar;