import React from 'react'
import FooterPages from '../Components/footerpages'
import LogoPages from '../Components/logopages'
import Navbar from '../Components/Navbar'
import TOGO from '../assets/Togo-drap.PNG'
import BENIN from '../assets/Benin-Drap.jpg'
import GABON from '../assets/GAb-drap.jpg'

export default function Contacts() {
  return (
    <div>
        <div className='Navbar'>  
            <LogoPages />
            <Navbar />
         </div>
         <div className='main-content'>
              <div className='left-page'>
                <div className="vertical-text">Contacts</div>
              </div>
               {/* main content */}
               <div className="main-page">
                      <div className='links'>
                        <a href="/">Accueil</a> <span>  / Contacts</span>
                      </div>
                      <h3 >Contacts</h3>
                         <div className='titre-content'>
                         Notre but c'est votre réussite scolaire et professionnelle.
                          Dès que vous vous inscrivez à ESGIS, la réussite de vos projets 
                          d'étude devient notre priorité. Notre vision est simple 
                          : Votre succès est notre succès". Pour plus d'informations
                           contactez-nous aux adresses ci-dessous :
                         </div>
                           {/* ligne separatrice */}
                            <div className='line'>
                            </div>
                            <div className='line-child'>
                            </div>
                            {/* fin */}
                            <h3> ESGIS TOGO</h3>
                              <div className='english-container'>
                              <div className='info-image'>
                                   <img src={TOGO} alt="" />
                                 </div>
                                 <div className="info-texte">
                                      8, RUE AGNES GABA KODJOVIAKOPE 07 B.P. 13517 Lomé - TOGO Tél./Fax (228) 22 20 12 93 / (228) 22 22 50 17 E-mail : esgis.togo@esgis.org
                                 </div>
                                 </div>
                           {/* ligne separatrice */}
                            <div className='line'>
                            </div>
                            <div className='line-child'>
                            </div>
                            {/* fin */}
                            <h3> ESGIS BENIN</h3>
                              <div className='english-container'>
                              <div className='info-image'>
                                   <img src={BENIN} alt="" />
                                 </div>
                                 <div className="info-texte">
                                 Bd de l'Ouémé Jérico - Cotonou 06 B.P. 3233 Cotonou - BENIN Tél.(229) 21 32 47 73 / (229) 21 32 78 71 E-mail : esgis.benin@esgis.org Pour plus d'informations sur le programme anglais, veuillez contacter le chargé de programme à l'adresse : E-mail : registrarbenin@esgis.org Tel. (229) 66 26 09 30
                                 </div>
                                 </div>
                           {/* ligne separatrice */}
                            <div className='line'>
                            </div>
                            <div className='line-child'>
                            </div>
                            {/* fin */}
                            <h3> ESGIS GABON</h3>
                              <div className='english-container'>
                              <div className='info-image'>
                                   <img src={GABON} alt="" />
                                 </div>
                                 <div className="info-texte">
                                   B.P. 1359 Libreville - GABON Quartier GLASS à 150 m de l'Hôtel MERIDIEN Tél.(241) 05 45 45 24 / (241) 01 74 24 00 E-mail : esgis.gabon@esgis.org
                                 </div>
                                 </div>

                    {/* ligne separatrice */}
              <div className='line'>
                      </div>      
                      <footer className='foot' style={{display:'flex'}}>
                          <LogoPages />
                           <div className='footer-pages'>
                                <FooterPages />
                           </div>
                       </footer>
                </div>
         </div>
    </div>
  )
}
