import React from 'react'
import About from './aboutHome/About'
// import WorkGal from './workGalerija/WokrGalerija'
import Contact from './contactHome/Contact'
import WorkGal from './workGalerija/WokrGalerija'
import Prednost from './prednostHome/Prednost'
import ImgStrip from './tripImgStrip/ImgStrip'
import Header from "./Header/Header";
import Footer from "../Footer/Footer";
import Card from './Cards/Cards';
import SoulAdventure from './SoulAdventure/SoulAdventure';

const Home = () => {
  return (
   <>
    <Header />
    <About />
    <Card />
    <WorkGal />
    <Prednost />
    <ImgStrip />
    <Contact />
    <SoulAdventure />
    <Footer />
   </>
  )
}

export default Home