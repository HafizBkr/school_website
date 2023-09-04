import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LEFT from './Components/LEFT';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Footer from './Components/footer';
import Logo from './Components/logo';
import Presentation from './Pages/Presentation';
import Contacts from './Pages/Contacts';
import Admission from './Pages/Admission';
import EsgisEnimage from './Pages/EsgisEnImage';
import News from './Pages/News'
import Partenaria from './Pages/Partenaria'
import  ZoneEtudiante from './Pages/zoneEtudiante'
import Formation from './Pages/Formation'
import NavbarPages from './Components/Navbarpages'
import PagesleftBar from './Components/pagesleftBar';
import LogoPages from './Components/logopages'
import Footerpages from './Components/footerpages';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footermain from './Components/footermain'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/left" element={<LEFT />} />
        <Route path="/main" element={<Main />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/f" element={<Footerpages />} />
        <Route path="/fmain" element={<Footermain />} />
        <Route path="/nv" element={<NavbarPages />} />
        <Route path="/p" element={<PagesleftBar />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/logo" element={<Logo />} />
        <Route path="/logo" element={<LogoPages />} />
        <Route path="/Presentation" element={<Presentation/>} />
        <Route path="/Formation" element={<Formation/>} />
        <Route path="/Admission" element={<Admission/>} />
        <Route path="/Zone-etudiante" element={<ZoneEtudiante/>} />
        <Route path="/Partenariat" element={<Partenaria/>} />
        <Route path="/Esgis-en-Image" element={<EsgisEnimage/>} />
        <Route path="/Contacts" element={<Contacts/>} />
        <Route path="/News" element={<News/>} />


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals(console.log); // Vous pouvez passer console.log ici pour afficher les résultats dans la console
