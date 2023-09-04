import React, { useRef, useEffect ,useState } from 'react';
import '../Pages-styles/Admission.css'
import LogoPages from '../Components/logopages'
import Navbar from '../Components/Navbar'
import image from '../assets/esgis-diplome.jpg'
import image1 from '../assets/rentrer-universitaire.jpg'
import Dossier from  '../assets/dossier-esgis.jpg'
import FooterPages from '../Components/footerpages'
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Admission() {
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
                <div className="vertical-text">Admission</div>
              </div>
                {/* main content */}
                <div className="main-page">
                      <div className='links'>
                        <a href="/">Accueil</a> <span>  / ADMISSION</span>
                      </div>
                               <div className='admission-container'>
                                                  <div className="image-admission">
                                                    <img src={image} alt="" />
                                                  </div>
                                                  <div className="admission-text">
                                                      <p className='titre-content'>
                                                        L'accès à la première année des formations menant à l'obtention d'un diplôme
                                                         est ouvert à tous les titulaires d'un baccalauréat. Selon la nature du baccalauréat
                                                          obtenu, l'orientation vers une filière spécifique sera approuvée par la Direction
                                                           des Études après une séance d'orientation personnalisée pour chaque étudiant
                                                      </p>
                                                  </div>
                                                  </div>
                              {/* fin du main */}
                                                  {/* fin admission-container */}
                                                    {/* ligne separatrice */}

                                                   
                                                                  

                                                                {/* ligne separatrice */}

                                                                <div className='line'>
                                                                        </div>
                                                                        <div className='line-child'>
                                                                        </div>
                                                                  {/* fin de la ligne */}
                                                                  <h3 style={{fontSize:"20px"}}>
                                                                      Dossier d’inscription
                                                                  </h3>
                                                  <div className='dossier-container'>
                                                  
                                                  <div class="cardd" data-aos="fade-right" >
                                                      <p>L'admission en première année dans les formations sanctionnées par un diplôme est ouverte à tous les bacheliers. En fonction du type de baccalauréat, l'admission dans telle ou telle filière sera autorisée par la Direction des Études après une séance d'orientation personnelle de l'étudiant.</p>
                                                      <p>Le dossier d'inscription doit comporter en général les éléments suivants:</p>
                                                      <ul className='cv-items'>
                                                        <ol><span className='spann'>#  </span>   Le carton d'inscription de l'École</ol>
                                                        <ol> <span className='spann'>#  </span>   La fiche d'inscription de l'Université partenaire soigneusement remplie (pour les formations délocalisées)</ol>
                                                        <ol><span className='spann'>#  </span> Une lettre de motivation, les attestations de stage et/ou lettres de recommandation</ol>
                                                        <ol><span className='spann'>#  </span> 4 photos d'identité</ol>
                                                        <ol><span className='spann'>#</span> Les photocopies légalisées de tous les diplômes depuis le BAC</ol>
                                                        <ol><span className='spann'>#</span> Les photocopies légalisées de tous les relevés de notes des études supérieures</ol>
                                                        <ol><span className='spann'>#</span> 1 extrait de naissance</ol>
                                                        <ol><span className='spann'>#</span> 1 photocopie de la carte d'identité ou du passeport</ol>
                                                        <ol><span className='spann'>#</span> 1 curriculum vitae</ol>
                                                        <ol><span className='spann'>#</span> 1 certificat de visite médicale</ol>
                                                        <ol><span className='spann'>#</span> 1 attestation d'attribution de bourse pour les boursiers</ol>
                                                      </ul>
                                                      <p>L'admission en BAC+2 ou plus est subordonnée à une étude de dossier + un entretien avec un grand jury.</p>
                                                      <p>En cycle Master, l'admission peut également faire suite à une Validation des Acquis Professionnels (VAP) pour les titulaires d'un BAC+3 avec au moins trois années d'expérience.</p>
                                                    </div>
                                                    <div className='dossier-container-image' data-aos="fade-left">
                                                             <img src={Dossier} alt="" />
                                                    </div>
                                                  
                                                  </div>
                                                  {/* fin cotainer */}
                                                  <div className='line'>
                                                                        </div>
                                                                        <div className='line-child'>
                                                                        </div>
                                                                  {/* fin de la ligne */}

                                                                  <h3 style={{fontSize:"20px"}}>
                                                                      Concours de bourse
                                                                  </h3>
                                                                  <div className="concours-text">
                                                                    <p className='titre-content'>
                                                                    Dans la politique sociale prônée par l'Ecole et désireuse
                                                                     d'accompagner les étudiants démunis ayant un fort potentiel
                                                                      intellectuel ainsi que les parents, l'ESGIS peut organiser
                                                                       un concours de bourse  au mois d'Août avec à la clef des
                                                                        réductions aux plus méritants.
                                                                    </p>
                                                                </div>
                                                                <div className='concour-reductions'>
                                                                <div className='concour-cards'  data-aos="flip-left">
                                                                    Pour les nouveaux inscrits ainsi que pour les anciens étudiants s'étant
                                                                     enregistrés après le <span style={{color:'red'}}>15 octobre pour les niveaux
                                                                      Licence 2&amp;3</span> et après le <span style={{color:'red'}}>15 novembre
                                                                       pour les niveaux Master 1&amp;2</span>, différentes options de paiement
                                                                        sont proposées. En choisissant de régler la totalité des frais d'inscription
                                                                         en <span style={{color:'red'}}>une seule fois lors de l'inscription</span>,
                                                                          une remise automatique de <span style={{color:'red'}}>15%</span> 
                                                                          est appliquée. Opter pour un paiement échelonné en <span style={{color:'red'}}>trois tranches</span>
                                                                           (au moment de l'inscription, le 15 décembre et le 15 février) entraîne quant à lui une remise de
                                                                            <span style={{color:'red'}}>10%</span>. Il est toutefois important de noter que cette remise sera annulée si
                                                                             <span style={{color:'red'}}>le dernier versement est effectué après le 15 février</span>. 
                                                                             Pour ceux préférant un paiement en <span style={{color:'red'}}>six tranches</span>, 
                                                                             le <span style={{color:'red'}}>premier paiement couvre à la fois les frais d'inscription et la première tranche
                                                                             </span>, suivi de <span style={{color:'red'}}>cinq versements mensuels</span> au plus tard le
                                                                              <span style={{color:'red'}}>15 de chaque mois</span>.
                                                                </div>
                                                                <div className='concour-cards'  data-aos="flip-right">
                                                                      Pour les <span style={{color:'red'}}>Anciens étudiants de l’ESGIS inscrits avant le 15 octobre pour la Licence 2&3 et le 15 novembre pour le Master 1&2</span>, différentes options de paiement s'offrent à vous. Opter pour un 
                                                                      <span style={{color:'red'}}>paiement en une seule tranche à l’inscription</span> vous accorde une <span style={{color:'red'}}>r
                                                                      emise automatique de 20%</span>. Si vous préférez échelonner le paiement en <span style={{color:'red'}}>
                                                                        trois tranches (à l’inscription, le 15 décembre et le 15 février)</span>, une <span style={{color:'red'}}>remise de 15%</span> 
                                                                        est appliquée, toutefois réduite à <span style={{color:'red'}}>10%</span> si le dernier paiement est effectué après le 15 février. Alternativement, un 
                                                                        <span style={{color:'red'}}>paiement en six tranches</span> vous donne droit à une <span style={{color:'red'}}>remise de 10%</span>.
                                                                         Le <span style={{color:'red'}}>premier versement couvre les frais d'inscription et la première tranche</span>,
                                                                          suivi d'au maximum <span style={{color:'red'}}>cinq tranches mensuelles à régler au plus tard le 15 de chaque mois</span>.
                                                                  </div>


                                                                </div>

                                                    {/* ligne separatrice */}

                                                    <div className='line'>
                                                                  </div>
                                                                        <div className='line-child'>
                                                                 </div>
                                                   {/* fin de la ligne */}
                                                 


                                                         
                                                   

                                                     {/* fin composante */}
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
