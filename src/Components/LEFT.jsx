import React, { useState, useEffect } from 'react';
import '../stye/left.css';
import Navbar from './Navbar';

export default function LEFT() {
  const [inputFocused, setInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const placeholders = ["Reseigner vous sur esgis", "filliere a esgis", "pourquoi choisir esgis ? "];
  const typingSpeed = 100;
  let placeholderIndex = 0;
  let letterIndex = 0;
  let typingTimeout;
    
  const handleInputFocus = () => {
    clearTimeout(typingTimeout);
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
    setInputValue("");
    typingTimeout = setTimeout(typePlaceholder, typingSpeed);
  };

  useEffect(() => {
    if (!inputFocused) {
      typingTimeout = setTimeout(typePlaceholder, typingSpeed);
    } else {
      clearTimeout(typingTimeout);
    }
    return () => {
      clearTimeout(typingTimeout);
    };
  }, [inputFocused]);

  const typePlaceholder = () => {
    const currentPlaceholder = placeholders[placeholderIndex];
    if (!inputFocused && letterIndex < currentPlaceholder.length) {
      setPlaceholder(currentPlaceholder.substring(0, letterIndex + 1));
      letterIndex++;
      typingTimeout = setTimeout(typePlaceholder, typingSpeed);
    } else if (!inputFocused) {
      typingTimeout = setTimeout(() => {
        setPlaceholder("");
        placeholderIndex = (placeholderIndex + 1) % placeholders.length;
        letterIndex = 0;
        typePlaceholder();
      }, typingSpeed * 5);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const [showNav, setShowNav] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  let scrollTimeout;

  const handleScroll = () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      if (window.scrollY > 0) {
        setShowNav(true);
        setIsAtTop(false);
      } else {
        setShowNav(false);
        setIsAtTop(true);
      }
    }, 18);
  };

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (1000 / 30); // Ajustez la vitesse en changeant le diviseur (1000 / 60)
    
    const scrollAnimation = () => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(scrollAnimation);
      }
    };
    
    requestAnimationFrame(scrollAnimation);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={showNav ? 'leftside show-nav' : 'leftside'}>
      <div className='icon'>
        <a className='ico scroll-link' style={{ display: showNav ? 'block' : 'none' }} onClick={scrollToTop}>Menu
          <span className="arrow-up"></span>
        </a>
      </div>
      <div className='search'>
        <div className='search-description'>
        <p>Découvrez ESGIS et ses formations</p>
        </div>
        <div className={inputFocused ? 'inp input-focused' : 'inp'}>
          <svg width="30" viewBox="0 0 23 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="icon--search-mag search-box__mag">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#D51118" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </svg>
          <input
            type="text"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            value={inputValue}
            placeholder={placeholder}
            style={{ fontSize: "18px", height: "50px", width: "300px", marginLeft: "20px" }}
          />
        </div>
      </div>
      <div className='map-container'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63465.30821176703!2d1.092188221679683!3d6.186684399999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e3f5ff63cae7%3A0x3fa6fe4cf2950b2!2s%C3%89cole%20Sup%C3%A9rieure%20de%20Gestion%2C%20d&#39;Informatique%20et%20des%20Sciences%20(ESGIS-TOGO)!5e0!3m2!1sfr!2stg!4v1692132996939!5m2!1sfr!2stg" width="600"></iframe>
      </div>
      
    </div>
  )
}
