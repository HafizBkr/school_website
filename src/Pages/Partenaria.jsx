import React from 'react'
import '../Pages-styles/Partenariat.css'
import Navbarpages from '../Components/Navbarpages'
import LogoPages from '../Components/logopages'
import Navbar from '../Components/Navbar'
import FooterPages from '../Components/footerpages'
import iscdi from '../assets/iscdi.png'
import UA from '../assets/UA.jpg'
import ESG from '../assets/ESEG.jpg'
import ESGI from '../assets/esgi.jpg'
import PPA from '../assets/ppa.jpg'
import ENAM from '../assets/ENAM.jpg'
import Micro from '../assets/Micro.svg'
import Sud from '../assets/sud.jpg'

export default function Partenaria() {
  return (
    <div>
        <div className='Navbar'>  
            <LogoPages />
            <Navbar />
         </div>
         <div className='main-content'>
              <div className='left-page'>
                <div className="vertical-text">Partenariat</div>
              </div>
              <div className="main-page">
                      <div className='links'>
                        <a href="/">Accueil</a> <span>  / Partenariat</span>
                      </div>
                      <h3 >PARTENARIAT</h3>
                         <div className='titre-content'>
                             Dans le souci de répondre aux défis de la mondialisation et de la globalisation,
                             ESGIS a très tôt noué des partenariats avec de grandes Ecoles et Universités
                             d'Etat de par le monde, ce qui lui permet de délivrer des diplômes délocalisés
                              reconnus dans l'Union Européenne.
                         </div>
                            {/* ligne separatrice */}
                            <div className='line'>
                              </div>
                              <div className='line-child'>
                              </div>
                              {/* fin ligne */}
                              {/* fin ligne */}
                              <h3>Partenariats avec les grandes écoles et universités françaises</h3>
                                   <div className="partenaiat-inter">
                                        
                                            <img  src={iscdi} alt="" />
                                            <img  src={UA} alt="" />
                                            <img  src={ESG} alt="" />
                                            <img  src={ESGI} alt="" />
                                            <img  src={PPA} alt="" />
                                           
                                         
                                   </div>
                            {/* ligne separatrice */}
                            <div className='line'>
                              </div>
                              <div className='line-child'>
                              </div>
                              {/* fin ligne */}
                              {/* fin ligne */}
                              <h3>Partenariats avec les grandes écoles et universités nationales et africaines</h3>
                                   <div className="partenaiat-inter">
                                        
                                            <img  src={ENAM} alt="" />
                                            <img  src={UA} alt="" />
                                           
                                           
                                         
                                   </div>
                            {/* ligne separatrice */}
                            <div className='line'>
                              </div>
                              <div className='line-child'>
                              </div>
                              {/* fin ligne */}
                              {/* fin ligne */}
                              <h3>Partenariats avec les entreprises</h3>
                                   <div className="partenaiat-inter">
                                        
                                            <img  src={Micro} alt="" />
                                            <img  src={Sud} alt="" />
                                           
                                           
                                         
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
               {/* fin main page */}
              
         </div> 
         
    </div>
  )
}
