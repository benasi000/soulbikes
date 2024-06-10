import './App.css';
import React from "react";
import About from './components/About/About';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './components/home/Home';
import Buy from './components/nakup/Buy';
import Motor from './components/bikeComponents/motor/Motor'
import Galerija from './components/galerija/Galerija';
import Trip from './components/trip/Trip';

const router = createBrowserRouter([
  {path: "/", element: <Home/>},
  {path: "/about", element: <About/>},
  {path: "/buy", element: <Buy/>},
  {path: "/motor", element: <Motor/>},
  {path: "/gallery", element: <Galerija/>},
  {path: "/trip", element: <Trip/>},
]);

const App = () => <RouterProvider router={router} />;
export default App;
