import React, { useEffect, useState } from 'react';
import Navbarpages from '../Components/Navbarpages';
import LogoPages from '../Components/logopages';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import FooterPages from '../Components/footerpages';
import '../Pages-styles/News.css'

export default function News() {
  const [news, setNews] = useState([]); // Change news to [] initially
  const [event, setEvents] = useState([]); // Change news to [] initially

  useEffect(() => {
    axios.get('http://localhost/Backend/index.php')
      .then(response => {
        setNews(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    axios.get('http://localhost/Backend/event.php')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  

  return (
    <div>
      <div className='Navbar'>
        <LogoPages />
        <Navbar />
      </div>
      <div className='main-content'>
        <div className='left-page'>
          <div className="vertical-text">News</div>
        </div>
        <div className="main-page">
            <h1>School News</h1>
          <div className="news-list">
            {news.map(item => (
              <div key={item.id} className='NEWS-CARDS'>
                <div className='news-image'>
                <img src={`data:image/jpeg;base64,${item.image_data}`} alt={item.description} />
                </div>
                <div className='News-description'>
                    <div className='badge'>NEWS</div>
                <p style={{fontSize:'17px',fontWeight:'600'}}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
               {/* ligne separatrice */}

               <div className='line'>
                                  </div>
                                  <div className='line-child'>
                                  </div>
                            {/* fin de la ligne */}
                            <h1>Evenements</h1>
                            {event.map(item => (
              <div key={item.id} className='NEWS-CARDS'>
                <div className='news-image'>
                <img src={`data:image/jpeg;base64,${item.image_data}`} alt={item.description} />
                </div>
                <div className='News-description'>
                    <div className='badge'>NEWS</div>
                <p style={{fontSize:'17px',fontWeight:'600'}}>{item.description}</p>
                </div>
              </div>
            ))}

          
          {/* Ligne séparatrice */}
          <div className='line'></div>
          <footer className='foot' style={{display:'flex'}}>
            <LogoPages />
            <div className='footer-pages'>
              <FooterPages />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
