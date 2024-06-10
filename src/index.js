import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);