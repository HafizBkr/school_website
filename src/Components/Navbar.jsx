import React, { useState, useEffect } from 'react';
import '../stye/Navbar.css'; // Assurez-vous que le chemin vers le fichier CSS est correct
import menu from '../assets/menu.svg';
import Presentation from '../Pages/Presentation';

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false); // Nouvel état pour suivre le clic du menu

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1345px)');

    const handleMediaChange = (event) => {
      setIsDesktop(!event.matches);
      setShowLinks(true);
    };

    mediaQuery.addListener(handleMediaChange);
    handleMediaChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaChange);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <div className={`navbar ${isDesktop ? 'desktop' : ''}`}>
      <ul className={`${isBurgerOpen ? 'mobile-open' : ''}`}>
        <li className='nav-link'><a href="/">Accueil</a></li>
        <li className='nav-link'><a href='/Presentation/'>Presentation</a></li>
        <li className='nav-link'><a href="/Formation/">Formations</a></li>

        {showLinks && isDesktop && (
          <>
            <li className="hidden-item"><a href="/Admission/">Admission</a></li>
            <li className="hidden-item"><a href="/Zone-etudiante/">Zone Etudiante</a></li>
            <li className="hidden-item"><a href="/Partenariat/">Partenariat</a></li>
            <li className="hidden-item"><a href="/Esgis-en-Image/">Esgis en Image</a></li>
          </>
        )}
        <li><a href="/Contacts/">Contacts</a></li>
        <li><a href="/News/">News</a></li>
      </ul>

      {!isDesktop && (
        <div className={`custom-select ${isBurgerOpen ? 'mobile-open' : ''}`}>
          <button id="toggleButton" onClick={toggleDropdown}>
            {dropdownVisible ? '' : ''}
            <span className={`site-nav__arrow ${dropdownVisible ? 'arrow-up' : 'arrow-down'}`}>
              {dropdownVisible ? 'menue↑' : 'menue↓'}
            </span>
          </button>

          <ul id="dropdownMenu" style={{ display: dropdownVisible ? '' : 'none' }} className="dropdown-menu hidden">
            <li><a href="/Admission/">Admission</a></li>
            <li><a href="/Zone-etudiante/">Zone Etudiante</a></li>
            <li><a href="/Partenariat/">Partenariat</a></li>
            <li><a href="/Esgis-en-Image/">Esgis en Image</a></li>
          </ul>
        </div>
      )}

      <div className='menu'>
        <img src={menu} alt="" className='burger' onClick={toggleMenuClick} />
      </div>
      {menuClicked && (
        <div className={`menu-clicked-content ${menuClicked ? 'active' : ''}`}>
          <a href="/">Accuiele</a>
          <a href='/Presentation/'>Presentation</a>
          <a href="/Formation/">Formations</a>
          <a href="/Admission/">Admission</a>
          <a href="/Zone-etudiante/">Zone Etudiante</a>
          <a href="/Partenariat/">Partenariat</a>
          <a href="/Esgis-en-Image/">Esgis en Image</a>
          <a href="/Contacts/">Contacts</a>
          <a href="/News/">News</a>
        </div>
      )}
    </div>
  );
}
