import React from 'react'
import images from '../../../constants/images'
import {Link} from 'react-router-dom'
import './Cards.css'

const Cards = () => {
  return (
   <>
   {/* <div className='card__container'>
    <div className='card'>
     <img src={images.motor} alt='' />
     <div className='card__content'>
      <h3>Motor</h3>
      <p>Motor je srce kolesa, zato je izrednega pomena, da je motor zmogljiv in ima ob veliki moči tudi optimalen navor.
      NOVI posodobljen Bafang M510 je motor, ki vas bo presenetil s svojo neverjetno močjo in Max 95Nm navora, hkrati pa vas bo popeljal po strminah, za katere si ne predstavljate, da ste jih sploh zmožni prevoziti.</p>
      <Link to="/motor" className='btn btn__gold'>Preberi več</Link>
     </div>
    </div>

    <div className='card'>
     <img src={images.menjalnik} alt='' />
     <div className='card__content'>
      <h3>Menjalnik</h3>
      <p>Tako kot vse ostale komponente so tudi menjalnik in prestave stvar skrbnega testa in jih izberemo glede na zahtevnost vaše vožnje.</p>
     </div>
    </div>

    <div className='card'>
     <img src={images.pred_zvmeti} alt='' />
     <div className='card__content'>
      <h3>Prednje zvmetenje</h3>
      <p>Izbira vzmetenja je ključnega pomena pri doseganju optimalnih voznih lastnosti.
        Izbirate lahko med najbolj znanimi proizvajalci vrhunskih vzmetenj.
        Po testni vožnji bomo izbrali pravo vzmetenje za vas in tako bo vaš občutek vsake vožnje nepozaben.</p>
     </div>
    </div>

    <div className='card'>
     <img src={images.zad_zvmeti} alt='' />
     <div className='card__content'>
      <h3>Zadnje zvmetenje</h3>
      <p>Ko boste poizkusili kolo z zadnjim vzmetenjem, ne boste več želeli voziti kolesa brez tega. Le tako kolo vam da občutek lebdenja in s pravimi nastavitvami boste resnično uživali v vožnji.</p>
     </div>
    </div>

    <div className='card'>
     <img src={images.baterija} alt='' />
     <div className='card__content'>
      <h3>Baterija</h3>
      <p>Baterija je nameščena v osrednji del okvirja in tako vpliva na optimalno  razporeditev teže med vožnjo. Hkrati pa njena moč, kar neverjetnih
        840 Wh, 48V, 17,5 Ah, omogoča dolge brezskrbne poti tudi po najzahtevnejših strminah.
        To moč in vzdržljivost morate začutiti na testni vožnji</p>
     </div>
    </div>

    <div className='card'>
     <img src={images.zavore} alt='' />
     <div className='card__content'>
      <h3>Zavore</h3>
      <p>Še preden pa se odpravimo na zahtevne ali manj zahtevne poti so ena ključnih zadev ZAVORE.
      Bolj pomembno kot koliko zmore motor je, kako se bomo hitro in varno ustavili, zato izbiri zavor namenjamo posebno pozornost.</p>
     </div>
    </div>

    <div className='card'>
     <img src={images.kolesa} alt='' />
     <div className='card__content'>
      <h3>Kolesa</h3>
      <p>Na izbiro je širok nabor vrhunskih pnevmatik in obročev za različne terene.</p>
     </div>
    </div>

   </div> */}
   
   <div className='slide-container'>
    <div className='slide-content'>
      <div className='card__container'>
        <div className='card'>
          <img src={images.motor} alt='' />
          <div className='card__content'>
            <h3>Motor</h3>
            <p>Motor je srce kolesa, zato je izrednega pomena, da je motor zmogljiv in ima ob veliki moči tudi optimalen navor.
              NOVI posodobljen Bafang M510 je motor, ki vas bo presenetil s svojo neverjetno močjo in Max 95Nm navora, hkrati pa vas bo popeljal po strminah, za katere si ne predstavljate, da ste jih sploh zmožni prevoziti.</p>
            <Link to="/motor" className='btn btn__gold'>Preberi več</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
   </>
  )
}

export default Cards