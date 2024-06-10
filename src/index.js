import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';


// const router = createBrowserRouter([
//   {path: "/", element: <Home/>},
//   {path: "/about", element: <About/>},
//   {path: "/buy", element: <Buy/>},
//   {path: "/motor", element: <Motor/>},
//   {path: "/gallery", element: <Galerija/>},
//   {path: "/trip", element: <Trip/>},
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);