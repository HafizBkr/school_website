import React, { useRef, useEffect ,useState } from 'react';
import '../Pages-styles/zoneEtudiante.css'
import FooterPages from '../Components/footerpages';
import Navbarpages from '../Components/Navbarpages'
import LogoPages from '../Components/logopages';
import Navbar from '../Components/Navbar';
import informatique from '../assets/Programming-esgis.svg'
import english from '../assets/english.jpg'
import genius from '../assets/genius.jpg'
import orateur from '../assets/orateur.jpg'
import hotesse from '../assets/hotesse.jpg'
import Tae  from '../assets/Tae.PNG'
import Basket from '../assets/BASKET.jpg'
import Miss from '../assets/MISS.jpeg'
import Aos from 'aos';
import 'aos/dist/aos.css';


 

export default function zoneEtudiante() {
  Aos.init({duration:2000})

  return (
    <div>
         <div className='Navbar'>  
            <LogoPages />
            <Navbar />
         </div>
         <div className='main-content'>
              <div className='left-page'>
                <div className="vertical-text">Zone Etudiant</div>
              </div>
               {/* main content */}
               <div className="main-page">
                      <div className='links'>
                        <a href="/">Accueil</a> <span>  / Zone Etudiant</span>
                      </div>
                      <h3 >Associations et clubs</h3>
                         <div className='titre-content'>
                             L'Association des Étudiants de l'ESGIS (ASSETE) représente l'ensemble des étudiants
                              et collabore avec l'Administration pour organiser des activités socioculturelles.
                               L'Amicale des Anciens Étudiants de l'ESGIS (AAEE) célèbre les diplômés qui occupent
                                aujourd'hui des postes de responsabilité à l'échelle nationale et internationale, 
                                témoignant de l'impact de l'école depuis sa création en 1994.
                         </div>
                           {/* ligne separatrice */}
                              <div className='line'>
                              </div>
                              <div className='line-child'>
                              </div>
                              {/* fin ligne */}
                              <h3>Club informatique</h3>
                               <div className='info-container'>
                               <div className='info-image'>
                                   <img src={informatique} alt="" />
                                 </div>
                                <div className="info-texte">    Plongez dans le monde fascinant du club informatique de notre fac,
                                 où le design prend vie grâce à Adobe et les lignes de code ouvrent 
                                 des horizons innovants. Rejoignez-nous pour explorer la fusion 
                                 passionnante entre créativité numérique et programmation.
                                 </div>
                                 
                                      

                               </div>
                                
                                            
                          {/* ligne separatrice */}
                           {/* ligne separatrice */}
                              <div className='line'>
                              </div>
                              <div className='line-child'>
                              </div>
                              {/* fin ligne */}
                              <h3>English Club</h3>
                              <div className='english-container' data-aos="fade-up"
                                  data-aos-anchor-placement="bottom-bottom">
                              <div className='info-image'>
                                   <img src={english} alt="" />
                                 </div>
                                 <div className="info-texte">   
                                 C'est un véritable creuset dans lequel les étudiants se retrouvent 
                                 pour se perfectionner dans la langue de SHAKESPEARE, pour développer
                                  des automatismes et s'imprégner de la culture anglo-saxonne.
                                 </div>
                                 </div>
                           {/* ligne separatrice */}
                              <div className='line'>
                              </div>
                              <div className='line-child'>
                              </div>
                              {/* fin ligne */}
                              <h3>Genius Club</h3>
                              <div className='english-container'  data-aos="fade-up"
                                  data-aos-anchor-placement="bottom-bottom">
                              <div className='info-image'>
                                   <img src={genius} alt="" />
                                 </div>
                                 <div className="info-texte">
                                   Bienvenue au club de Génie en Herbe ! Si vous êtes passionné
                                    par la résolution de problèmes, les énigmes complexes et les
                                     défis intellectuels, vous êtes au bon endroit. Rejoignez-nous
                                      pour développer vos compétences analytiques, votre créativité
                                       et votre esprit d'équipe. Ensemble, explorons le monde
                                        passionnant des défis intellectuels et repoussons les
                                         limites de la réflexion stratégique.
                                 </div>
                                 </div>
                                  {/* ligne separatrice */}
                              <div className='line'>
                              </div>
                              <div className='line-child'>
                              </div>
                              {/* fin ligne */}
                              {/* fin ligne */}
                              <h3>CLUB DES ORATEURS</h3>
                              <div className='english-container'  data-aos="fade-up"
                                  data-aos-anchor-placement="bottom-bottom">
                              <div className='info-image'>
                                   <img src={orateur} alt="" />
                                 </div>
                                 <div className="info-texte">
                                 Au cœur de notre groupe, nous célébrons avec passion l'art captivant de la parole. 
                                 Quel que soit votre niveau d'expérience, que vous soyez novice enthousiaste ou orateur 
                                 chevronné, vous êtes invité à explorer la rhétorique, à perfectionner votre voix et à
                                  relever des défis qui vous feront grandir. Ensemble, créons des moments mémorables
                                   sur la scène de l'art oratoire, où chaque mot compte et chaque discours laisse une empreinte.
                                 </div>
                                 </div>
                                  {/* ligne separatrice */}
                              <div className='line'>
                              </div>
                              <div className='line-child'>
                              </div>
                              {/* fin ligne */}
                              {/* fin ligne */}
                              <h3>CLUB DES HOTESSE</h3>
                              <div className='english-container'  data-aos="fade-up"
                                  data-aos-anchor-placement="bottom-bottom">
                              <div className='info-image'>
                                   <img src={hotesse} alt="" />
                                 </div>
                                 <div className="info-texte">
                                 Ici, nous célébrons l'art de l'accueil avec élégance. Que vous soyez passionné 
                                 par l'hospitalité ou simplement curieux, rejoignez notre communauté dédiée
                                  à perfectionner l'art d'accueillir. Ensemble, créons des expériences mémorables
                                   et chaleureuses.
                                 </div>
                                 </div>
                                  {/* ligne separatrice */}
                              <div className='line'>
                              </div>
                              <div className='line-child'>
                              </div>
                              {/* fin ligne */}
                              {/* fin ligne */}
                              <h3>CLUB DE TAE</h3>
                              <div className='english-container'  data-aos="fade-up"
                                  data-aos-anchor-placement="bottom-bottom">
                              <div className='info-image'>
                                   <img src={Tae} alt="" />
                                 </div>
                                 <div className="info-texte">
                                 Le club d'arts martiaux de l'école ESGIS est un lieu d'apprentissage, 
                                 de discipline et de camaraderie. Il offre aux étudiants l'opportunité 
                                 de développer leurs compétences physiques, mentales et de défense
                                  personnelle tout en créant des liens forts avec leurs pairs. 
                                  Rejoindre ce club, c'est s'engager dans un voyage d'amélioration
                                   de soi, de respect et de bien-être.
                                 </div>
                                 </div>
                                  {/* ligne separatrice */}
                              <div className='line'>
                              </div>
                              <div className='line-child'>
                              </div>
                              {/* fin ligne */}
                              {/* fin ligne */}
                              <h3>CLUB DE BASKETBALL</h3>
                              <div className='english-container'  data-aos="fade-up"
                                  data-aos-anchor-placement="bottom-bottom">
                              <div className='info-image'>
                                   <img src={Basket} alt="" />
                                 </div>
                                 <div className="info-texte">
                                 
                               Le club de basketball de l'école ESGIS est le lieu où la passion
                                pour ce sport dynamique s'épanouit. Les étudiants se rassemblent
                               pour dribbler, tirer et marquer des paniers, mais c'est bien plus 
                               qu'un simple jeu. Rejoindre ce club, c'est non seulement améliorer
                                ses compétences sur le terrain, mais aussi renforcer les liens 
                                avec ses camarades de classe, tout en partageant une passion
                                 commune pour le basketball.
                                 </div>
                                 </div>
                                  {/* ligne separatrice */}
                              <div className='line'>
                              </div>
                              <div className='line-child'>
                              </div>
                              {/* fin ligne */}
                              {/* fin ligne */}
                              <h3>CLUB DE FOOTBALL</h3>
                              <div className='english-container' data-aos="fade-up"
                                  data-aos-anchor-placement="bottom-bottom">
                              <div className='info-image'>
                                   <img src={Basket} alt="" />
                                 </div>
                                 <div className="info-texte">
                                 Le club de football de l'école ESGIS est un véritable terrain d'apprentissage
                                 où la passion pour ce sport se traduit en dribbles, tirs au but et compétitions
                                 amicales. C'est un lieu où les étudiants s'entraînent dur pour perfectionner
                                 leurs compétences, développer un esprit d'équipe solide et vivre la fierté 
                                 de porter les couleurs de leur école sur le terrain. Rejoindre ce club,
                                 c'est rejoindre une communauté dévouée au football, où l'amitié et la camaraderie 
                                 se forment autour de ce jeu captivant.
                                 </div>
                                 </div>
                                  {/* ligne separatrice */}
                              <div className='line'>
                              </div>
                              <div className='line-child'>
                              </div>
                              {/* fin ligne */}
                              {/* fin ligne */}
                              <h3>MISS ESGIS</h3>
                              <div className='english-container' data-aos="fade-up"
                                  data-aos-anchor-placement="bottom-bottom">
                              <div className='info-image'>
                                   <img src={Miss} alt="" />
                                 </div>
                                 <div className="info-texte">
                                 beauté, l'intelligence et la grâce des étudiantes de l'ESGIS. 
                                 Les membres de ce club travaillent dur pour promouvoir l'estime
                                 de soi, l'élégance et la confiance en soi, tout en participant à
                                 des événements de charité et en représentant fièrement leur école 
                                 lors de concours de beauté.
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
