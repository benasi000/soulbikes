import React from "react";
import "./Header.css";
import Navbar from "../../Navbar/Navbar";
import images from '../../../constants/images'
import { Link } from "react-router-dom"

function Header() {
 return (
  <div className="header" style = {{
   background: `linear-gradient(to left, rgba(0, 0, 0, 1.5), rgba(0, 0, 0, 0.2)), url(${images.header_bg}) center/cover no-repeat`
}}>
   <Navbar />

   <div className="container">
    <div className="header__content text__center text__light flex flex__center">
     <div className="header__content--left"></div>
      <div className="header__content--right">
       <h3 className="header__title2 fW__6">Karbonska električna gorska kolesa</h3>
       <h1 className="header__title fw__8">SOUL BIKES </h1>
       <p className="para__text">Pri nas nakup E-kolesa jemljemo zelo resno. 
        In ker na svetu ne obstajata niti dve popolnoma enaki osebi, 
        se vsakemu kupcu posvetimo osebno. Samo tako lahko izberete optimalno kolo za vas.</p>
        <Link to="/buy" className="btn btn__gold">Test Koles</Link>
        <Link to="/group" className="btn btn__gold">Skupinska vožnja</Link>
      </div>
     </div>
    </div>

  </div>
 );
}

export default Header;