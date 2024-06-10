import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";

function Header() {
 return (
  <>
  <div style = {{
   background: `rgba(0, 0, 0, 0.8)`}}>
  <Navbar />
  </div>
  </>
 );
}

export default Header;