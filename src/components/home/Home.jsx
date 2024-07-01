import React from 'react'
import About from './aboutHome/About'
// import WorkGal from './workGalerija/WokrGalerija'
import Contact from './contactHome/Contact'
import WorkGal from './workGalerija/WokrGalerija'
import Prednost from './prednostHome/Prednost'
import ImgStrip from './tripImgStrip/ImgStrip'
import Header from "./Header/Header";
import Footer from "../Footer/Footer";
import Cards from './Cards/Cards';
import ScrollButton from './../ScrollButton/ScrollButton'

const Home = () => {
  return (
   <>
    <Header />
    <About />
    <Cards />
    <WorkGal />
    <Prednost />
    <ImgStrip />
    <Contact />
    <ScrollButton />
    <Footer />
   </>
  )
}

export default Home