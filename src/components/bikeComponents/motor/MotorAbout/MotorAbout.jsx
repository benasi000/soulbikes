import React from 'react'
import './MotorAbout.css'
import images from '../../../../constants/images'
import {Link} from 'react-router-dom'

const MotorAbout = () => {
  return (
   <>
   <div className='wrapper'>
   <img src={images.motor2} className="pred__img" alt=''/>
    <div className='text-box'>
     <h2 className='about__title'>Motor</h2>
     <p>
     Novi sredinski motor Bafang M510 je zasnovan posebej za visokozmogljiva e-kolesa.
Navor je bistvenega pomena za dinamično vožnjo in Max 95 Nm v tem motorju vam bo takšno vožnjo zagotovo omogočil.
Precizni senzorji v motorju ocenijo pravo količino moči glede na voznikovo silo vrtenja pedal in poiščejo ustrezno pomoč .
M510 je pol kilograma lažji od predhodnika in tehta le 2,9 kg. Prihranek pri teži je rezultat več oblikovnih sprememb, med katerimi je glavna novo ohišje iz magnezija.
Sredinski motor Bafang M510 je revolucionarna nadgradnja zmogljivega motorja eMTB.
Podpora za največjo kadenco je razširjena na 120 vrt/min.
     </p>
     <p>
     Sredinski motor M510, ki je pred nastavljen za ljubitelje E-MTB, tako na zahtevnih vzponih in strmih klančinah kot v kolesarskih parkih ali manj zahtevnih poteh.
Marca 2022 je Bafang predstavil novi sredinski motor M510, naslednika preverjenega M500, ki zmore tudi robustne in zahtevne vožnje.
Kot eden vodilnih svetovnih proizvajalcev pogonskih sistemov za e-kolesa si Bafang prizadeva ponuditi najboljše motorne in sistemske rešitve za široko paleto kategorij – in to nadaljuje z novim M510 v zmogljivem razredu sredinskih motorjev. Močan navor 95 Nm je enak kot pri M500, vendar na splošno krivulja navora M510 je višja kot pri prejšnjem modelu. To je jasno opazno pri ekstremni podpori visoke kadence 120 vrt/min. Za nadaljnje povečanje učinkovitosti povečanja moči, rotorja je bil revidiran segmentirani stator in izdelano ohišje iz magnezija, ki zmanjša skupno težo M510 za celih 500 gramov (18 %) na 2,9 kg (teža predhodnjega motorja M500 = 3,4 kg).
     </p>
     <p>
     Poleg tega je bila programska oprema za zagonske karakteristike optimizirana za zagotavljanje bolj gladkega in bolj nadzorovanega zagona, kar omogoči gladko speljevanje in močno pospeševanje. Te lastnosti omogočajo boljši vstop v kratke ovinke ali ostre vzpone.
Z izjemno največjo močjo je pospešek običajno močan in prav za piko na i okreten in občutljiv saj je ravno na strmih vzponih ali v ozkih ovinkih pomembno, da motor popusti in doda pravo količino moči z vrhunsko natančnostjo. Prevelika moč povzroči vrtenje pnevmatik v prazno, hkrati pa tudi majhna moč vodi do nestabilnega upravljanja. Zahvaljujoč visoki občutljivosti senzorja navora, M510 lahko pobere pravo količino moči glede na kolesarjevo silo vrtenja pedal in nastavi ustrezno pomoč. S tem spektrom moči je sredinski motor M510 idealna izbira za uporabo, usmerjeno v zmogljivost, bodisi v kolesarskem parku ali pri premagovanju tehnično zahtevnih prehodov navzgor!
Poleg lažje konstrukcije je bil sredinsko nameščen motor opremljen z izboljšavami kot so povečana hidroizolacija in integrirani priključki.
Motor M510 je združljiv z večino izdelkov v portfelju Bafang, kot je Intube baterija, zasloni DP E180/181 s čistim LED HMI, opcijska nadgrajena barvna različica DP C242 HMI, skriti senzor hitrosti z dvema različnima rešitvama za pritrditev magnetov in prihajajoča nova aplikacija Bafang.
Z lastno proizvodnjo zgornjih komponent lahko Bafang konkurira tekmecem na globalnem trgu.
     </p>
    </div>
    <Link to="/buy" className="btn btn__gold">Test Koles</Link>
   </div>
   
   </>
  )
}

export default MotorAbout