import React from 'react';
import "./Prednost.css";
import imagePrednost from '../../../assets/images/Prednost.jpg';

const Prednost = () => {
  return (
    <div className='wrapper'>
     <img src={imagePrednost} className="pred__img" alt=''/>
     <div className='text-box'>
      <h2>Prednost koles</h2>
      <p>Dejstvo je, da odličnega E-gorskega kolesa ne morete kupiti z nekaj kliki na spletu, niti brez kakovostne testne vožnje.
       NAŠA NAJVEČJA PREDNOST:
       Pri  nas nakup E-kolesa jemljemo zelo resno. In ker na svetu ne obstajata  niti dve popolnoma enaki osebi, se vsakemu kupcu posvetimo osebno. Samo  tako lahko izberete optimalno kolo za vas.
       KAKO?
       Najprej se dogovorimo za testno vožnjo, na osnovi katere sledi izbira  prave velikosti okvirja in izbor pravih komponent.Samo dober občutek ob vožnji vam bo dal neizmerno zadovoljstvo. Vaše dobro počutje pa je naš in vaš cilj.
       Vsa kolesa so karbonska, kar daje kolesu nižjo težo, hkrati pa karbon daje trdnost in prožnost.
       Najnovejši Bafang M510 motor je eden najzmogljivejših motorjev na trgu. Več o motorju TUKAJ
       Baterija  z 840Wh zmogljivosti zagotavlja dolge vožnje brez bojazni, da bi vam  zmanjkalo baterije, seveda pa je to odvisno od načina vožnje.
       Vse komponente kot so zavore, prestave, vzmetenja, pnevmatike in obroči so vrhunske kakovosti vodilnih svetovnih proizvajalcev.
       Za test se prijavite na spodnji povezavi:</p>
     </div>
    </div>
  )
}

export default Prednost