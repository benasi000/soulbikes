import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import images from "../../constants/images"

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