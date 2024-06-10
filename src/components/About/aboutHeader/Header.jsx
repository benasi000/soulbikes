import React from "react";
import "./Header.css";
import Navbar from "../../Navbar/Navbar";

function Header() {
 return (
  <>
  <div style = {{
   background: `rgba(0, 0, 0, 0.8)`}}>
  <Navbar />
  </div>
   {/* <div className="container">
    <div className="header__content text__center text__light flex flex__center">
      <div className="header__content--left">
         <h1 className="header__title fw__8">Kdo smo mi ?</h1>
      </div>
      <div className="header__content--right">

      </div>
     </div>
    </div> */}

  </>
 );
}

export default Header;