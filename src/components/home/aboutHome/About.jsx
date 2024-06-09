import React from 'react';
import "./About.css";
import { Link } from "react-router-dom"

const About = () => {
 return(
   <div className="about section__padding">
    <div className="container">
     <div className="about__content text__center">
      <h2 className="section__title text__cap">
       Soul story
      </h2>
       <p className='para__text text__grey'>
       Obeta se lepo vreme. „Fotr“ bi šel s kolesom v hribe, mama tudi, ampak „peš“, 
       s kolesom je preveč naporno, pol je pa tukaj še najstnica – Hribi „NO GO!!!“…..
       </p>
       <Link to="/about" className="btn btn__gold ">Preberi si več</Link>
     </div>
    </div>
   </div>
 )
}

export default About;