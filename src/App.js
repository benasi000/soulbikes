import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from './components/home/Home';
import Buy from './components/nakup/Buy';
import Motor from './components/bikeComponents/motor/Motor'
import Galerija from './components/galerija/Galerija';
import Trip from './components/trip/Trip';
import About from './components/About/About';


function App() {
  return (
    <div className="holder">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/buy' element={<Buy />}/>
          <Route path='/motor' element={<Motor />}/>
          <Route path='/gallery' element={<Galerija />}/>
          <Route path='/trip' element={<Trip />}/>
        </Routes>
    </div>
  );
}

export default App;
