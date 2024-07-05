import React from 'react';
import { Link } from "react-router-dom"

const SoulAdventure = () => {
 return(
   <div className="about section__padding">
    <div className="container">
     <div className="about__content text__center">
      <h2 className="section__title text__cap">
       Soul Adventure
      </h2>
       <p className='para__text text__grey'>
       Bi radi z vašo družbo ali celo družino šli na ekskurzijo v naravo ? No potem imamo super novico 
       v naši ponudbi zdaj ponujamo organizirane izlete po Karavankah z našimi električnimi kolesi. 
       Na izbiro imate 19 raznih poti...
       </p>
       <Link to="http://soul-adventure.si" className="btn btn__gold ">Preberi si več</Link>
     </div>
    </div>
   </div>
 )
}

export default SoulAdventure;