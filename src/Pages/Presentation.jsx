import React, { useRef, useEffect ,useState } from 'react';
import LogoPages from '../Components/logopages';
import Navbar from '../Components/Navbar';
import '../Pages-styles/Presentation.css';
import Historique from '../assets/Historique.mp4';
import DG from '../assets/photoDG.jpg'
import Lome from '../assets/esgis-lome-avedji.jpg'
import Lome1 from '../assets/esgis-togo-kodjoviakope.jpg'
import cotonou from '../assets/esgis-cotonou.jpg'
import Cotonou1 from '../assets/esgis-cotonou-bat1.jpg'
import librevile from '../assets/gab.jpg'
import Footerpages from '../Components/footerpages';
import Lome2 from '../assets/Lome3.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';
import image1 from '../assets/esgis-lome-avedji.jpg'
import image2 from '../assets/image1.jpeg'
import image3 from '../assets/image2.jpg'
import image4 from '../assets/image3.jpg'
import image5 from '../assets/image4.jpg'
import image6 from '../assets/image7.jpg'

export default function Presentation() {
   useEffect(() =>{
      Aos.init({duration:2000});
   }
   ,[])
 
  return (
    <div>
      <div className='Navbar'>  
        <LogoPages />
        <Navbar />
      </div>
      <div className='main-content'>
        <div className='left-page'>
          <div className="vertical-text">PRESENTATION</div>
        </div>
        {/* main contnte */}
        <div className='main-page'>
          <div className='links'>
            <a href="/">Accueil</a> <span>  / PRESENTATION</span>
          </div>
          <h3 style={{color:"#e3c700"}}>Historique</h3>
            <div className='historique-container'>
                
                  <div  className='titre' >
                    
                    <p className='titre-content'  >
                       Malgré les ressources publiques investies, les systèmes 
                       éducatifs africains ont souffert de graves problèmes et d'inefficacités.
                        Sur les conseils de la Banque Mondiale, certains gouvernements africains
                         ont opté pour réorienter les ressources vers l'Enseignement Professionnalisé, 
                         car ils croient que cela contribuera au développement économique de l'Afrique en
                          formant des cadres et des techniciens qualifiés. C'est ainsi qu'est née l'École Supérieure
                           de Gestion d'Informatique et des Sciences (ESGIS) <span style={{color:"red"}}>en 1994 au Togo, en 2005 au Bénin et en 2012 au Gabon.</span>
                           </p>
                  </div>
                  <div className='historique-div' >
                  <div className='historique-video'data-aos="zoom-in">
                      <video width="500" height="300"    controls>
                        <source src={Historique} type="video/mp4" />
                        <source src="chemin_vers_la_video.webm" type="video/webm" />
                        Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>


                      </div>
                  <div className='historique-text'>
     <p className='hitorique-p' data-aos= 'fade-right'>
        ESGIS, École Supérieure privée agréée par les Ministères de l’Enseignement Supérieur et de la Recherche du TOGO, du BENIN et du GABON, offre une formation théorique et pratique de haut niveau. Accréditée par le CAMES, elle forme des cadres compétents pour les entreprises privées et les services publics d’Afrique. Ses domaines comprennent la gestion comptable et financière, la gestion commerciale, l'informatique, les technologies de pointe comme la télécommunication et l'électronique.
    
   
        Avec plus de vingt ans d'excellence académique, elle est reconnue comme l'une des meilleures Écoles de la sous-région, témoigné par son taux élevé d'insertion professionnelle.
        </p>
    <p className='hitorique-p'>
        Elle mise sur des ressources humaines qualifiées :
    </p>
    <ul className='option' data-aos= 'fade-right'>
        <ol><span >Personnel administratif performant</span></ol>
        <ol><span>Corps professoral expérimenté et compétent</span></ol>
        <ol><span>Infrastructures modernes et cadre agréable</span></ol>
        <ol><span>Matériels didactiques de qualité</span></ol>
        <ol><span>Bibliothèque physique et numérique riche (1500+ ouvrages)</span></ol>
        <ol><span>Plate-forme E-learning ESGIS 3A ON LINE pour la formation à distance</span></ol>
        <ol><span>Partenariats actifs avec des Universités et Grandes Écoles Françaises.</span></ol>
    </ul>
</div>

                      
                   </div>
            </div>

            {/* Mot du president directeur generale */}
            {/* ligne separatrice */}
            <div className='line'>
            </div>
            <div className='line-child'>
            </div>
             {/* contenue */}
             <div className='pr-speach'>
                    <h3 style={{fontSize:"20px"}}>
                     Mot du Président Directeur Général
                    </h3>
                    <div className='pr-speach-container'>
                            <div className='speach'>
                                  <p className='hitorique-p' data-aos="fade-up-right">
                                  Les nouvelles exigences de ce monde photoDGen pleine mutation, ainsi que le développement accéléré des technologies de l’information et de la communication (TIC), imposent aux entreprises pour leur croissance, des ressources humaines hautement qualifiées, des cadres rompus aux techniques du Top Management, bref, des professionnels à la hauteur des défis de la mondialisation.

                                                C’est dans ce cadre que s’inscrit la mission de l’Ecole Supérieure de Gestion, d’Informatique et des Sciences (ESGIS), dont la vision depuis 1994 est de former des hommes et des femmes de qualité, alliant la connaissance intellectuelle et pratique aux valeurs morales.

                                                ESGIS aujourd’hui implantée dans 3 pays (Togo, Benin et Gabon) est une école d’envergure internationale à laquelle on fait souvent référence dans la sous-région. Elle délivre des diplômes reconnus par l’Etat et accrédités par le CAMES (Conseil Africain et Malgache pour l’Enseignement Supérieur) dans plusieurs filières mais aussi des diplômes français, britanniques et canadiens grâce à des conventions signées avec d’éminentes institutions (Universités d’Etat et Grandes Ecoles)en France, en Angleterre, et au Canada.

                                                Avec sa nouvelle plate-forme E-learning  « ESGIS 3A ON LINE », ESGIS offre à tous les étudiants et cadres en activité professionnelle des opportunités de formation ou de perfectionnement via des formations en ligne confirmant ainsi son leadership.
                                  </p>  
                                              <h5 style={{float:"right"}}>Marcel Macy AKAKPO.</h5>
                            </div>
                            <div className='DG-picture' data-aos="fade-up-left">
                                <img src={DG} alt="" />
                            </div>
                    </div>
            </div>
             
               {/* ligne separatrice */}
                      <div className='line'>
                      </div>
                      <div className='line-child'>
                      </div>
                 {/* contenue */}
                   <div className='orga-container'>
                   <h3 style={{fontSize:"20px"}}>
                    Ressources humaines et organisation
                    </h3>
                    <div className='speach'>
                                  <p className='hitorique-p' data-aos="fade-right">

                                  L'ESGIS privilégie une organisation administrative flexible et performante. La Présidence définit la politique générale,
                                   tandis que chaque pays abrite une équipe de Direction. Le Directeur Général représente l'ESGIS auprès du Ministère de
                                    tutelle et le Directeur Technique supervise les équipements. Les Responsables Communication et Relations Extérieures 
                                    gèrent la communication et aident les étudiants pour leurs stages. Le Coordonnateur des Activités Socioculturelles alterne
                                     études et activités pour l'épanouissement des apprenants. Des initiatives variées enrichissent l'expérience étudiante.
                                   Sur le plan pédagogique, le Président du Conseil Scientifique garantit le bon déroulement de la branche pédagogique.
                                  Le Directeur Pédagogique supervise les études et les Directeurs des Études assistent le programme. Le Chef du Service
                                   Scolarité gère les inscriptions. Le bibliothécaire gère les ouvrages sous l'autorité du Directeur Pédagogique. Le conseiller
                                    d'orientation guide les étudiants dans leurs choix.
                                  </p>  
                            </div>

                            <div className='our-compus'>
                                  <div>
                                         <h4 style={{textAlign:"center"}}>Nos différents campus</h4>
                                  </div>
                                   {/* CAPUS-IAGES */}
                                 <div className='array'>

                                              <div className="grid">
                                                 <div className="grd-item">
                                                  <div className='grd-image'>
                                                      <img src={Lome} alt="" />
                                                  </div>
                                                  <div className='grd-description'>
                                                    
                                                  <p>
                                                <a href='' className='news-links'>
                                                ESGIS Annexe Avedji est une adresse située au Togo,
                                                 dans le quartier Avedji. C'est un emplacement pratique...
                                                </a>
                                              </p>
                                                  </div>
                                                 </div>
                                                 {/* fin */}
                                                 <div className="grd-item">
                                                  <div className='grd-image'>
                                                      <img src={Lome1} alt="" />
                                                  </div>
                                                  <div className='grd-description'>
                                                  <p>
                                                <a href='' className='news-links'>
                                                ESGIS Kodjoviakope est une autre branche de l'école ESGIS au Togo, 
                                                offrant des opportunités éducatives  ...
                                                </a>
                                              </p>
                                                  </div>
                                                 </div>
                                                 {/* fin */}
                                                 <div className="grd-item">
                                                  <div className='grd-image'>
                                                      <img src={Lome2} alt="" />
                                                  </div>
                                                  <div className='grd-description'>
                                                  <p>
                                                <a href='' className='news-links'>
                                                 L'établissement ESGIS à Adidogomé est un centre éducatif
                                                  de qualité,   Situé à Adidogomé au Togo  ...
                                                </a>
                                              </p>
                                                  </div>
                                                 </div>
                                                 <div className="grd-item">
                                                  <div className='grd-image'>
                                                      <img src={Cotonou1} alt="" />
                                                  </div>
                                                  <div className='grd-description'>
                                                  <p>
                                                <a href='' className='news-links'>                         
                                            L'ESGIS Cotonou Annexe est une extension ou une filiale 
                                            de l'École Supérieure de Gestion et d'Informatique (ESGIS)
                                             à Cotonou, au Bénin ...
                                                </a>
                                                </p>
                                                  </div>
                                                 </div>
                                                 {/* fin */}
                                                 <div className="grd-item">
                                                  <div className='grd-image'>
                                                      <img src={cotonou} alt="" />
                                                  </div>
                                                  <div className='grd-description'>
                                                  <p>
                                                <a href='' className='news-links'>
                                               
                                                       L'ESGIS Cotonou Siège est le siège principal de l'École
                                                        Supérieure de Gestion et d'Informatique (ESGIS) à Cotonou, au Bénin ...
                                                </a>
                                              </p>
                                                  </div>
                                                 </div>
                                                 {/* fin */}
                                                 <div className="grd-item">
                                                  <div className='grd-image'>
                                                      <img src={librevile} alt="" />
                                                  </div>
                                                  <div className='grd-description'>
                                                  <p>
                                                <a href='' className='news-links'>
                                               
                                                L'ESGIS à Libreville, au Gabon, est une branche 
                                                de l'École Supérieure de Gestion et d'Informatique
                                                 (ESGIS). Cette institution offre des opportunités
                                                  ...
                                                </a>
                                              </p>
                                                  </div>
                                                 </div>
                                                 {/* fin */}
                                                 {/* fin */}
                                             </div>    
                                              
                                           
                                               
                                                 
                                </div> 
                                 
                            </div>
                   </div>

                    {/* ligne separatrice */}
                    <div className='line'>
                      </div>      
                      <footer className='foot' style={{display:'flex'}}>
                          <LogoPages />
                           <div className='footer-pages'>
                                <Footerpages />
                           </div>
                       </footer>
                    </div>
       
                  
      </div>
    </div>
  );
}
