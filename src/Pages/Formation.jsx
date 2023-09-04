import React from 'react'
import LogoPages from '../Components/logopages'
import Navbar from '../Components/Navbar'
import specia from '../assets/specialiter.jpeg'
import pdf from '../assets/pdf.png'
import entreprise from '../assets/Entreprise-esgis.jpeg'
import '../Pages-styles/Formation.css'
import BTS1 from '../pdf/BTS/BTS-CGE.pdf'
import BTS2 from '../pdf/BTS/BTS-FB.pdf'
import BTS3 from '../pdf/BTS/BTS-CI.pdf'
import BTS4 from '../pdf/BTS/BTS-ACFV.pdf'
import BTS5 from '../pdf/BTS/BTS-TL.pdf'
import BTS6 from '../pdf/BTS/BTS-CE.pdf'
import BTS7 from '../pdf/BTS/BTS-IG.pdf'
import BTS8 from '../pdf/BTS/BTS-TEL.pdf'
import BTS9 from '../pdf/BTS/BTS-MRH.pdf'
import LMDC1 from '../pdf/LMD/LM-IRT.pdf'
import LMDC2 from '../pdf/LMD/LM-MI.pdf'
import LMDC3 from '../pdf/LMD/LM-MC.pdf'
import LMDC4 from '../pdf/LMD/LM-GRH.pdf'
import LMDC5 from '../pdf/LMD/LM-GP.pdf'
import LMDC6 from '../pdf/LMD/LM-CCA.pdf'
import LMDC7 from '../pdf/LMD/LM-BF.pdf'
import LMDC8 from '../pdf/LMD/LM-TL.pdf'
import LMDC9 from '../pdf/LMD/LM-MM.pdf'
import LMDC10 from '../pdf/LMD/LM-SEC.pdf'
import LMDC11 from '../pdf/LMD/LM-FM.pdf'
import LMDC12 from '../pdf/LMD/LM-LQ.pdf'
import MBA1 from '../pdf/MBA/MBA-ACG.pdf'
import MBA2 from '../pdf/MBA/MBA-MF.pdf'
import MBA3 from '../pdf/MBA/MBA-F.pdf'
import MBA4 from '../pdf/MBA/MBA-MM.pdf'
import MBA5 from '../pdf/MBA/MBA-CI.pdf'
import MBA6 from '../pdf/MBA/MBA-GRH.pdf'
import FooterPages from '../Components/footerpages'

export default function Formation() {
  return (
    <div>
         <div className='Navbar'>  
            <LogoPages />
            <Navbar />
         </div>
         <div className='main-content'>
              <div className='left-page'>
                <div className="vertical-text">FORMATION</div>
                  
              </div>
               {/* main content */}
               <div className="main-page">
                      <div className='links'>
                        <a href="/">Accueil</a> <span>  /FORMATION</span>
                      </div>  
                             <div>
                             <h3 style={{color:"black"}}>Offres de formation</h3>
            <div className='historique-container'>
                
                  <div className='titre'>
                    <p className='titre-content'>
                    Bienvenue dans notre espace éducatif d'exception. Découvrez nos programmes 
                    pointus en <span style={{color:"red"}}>sciences technologiques</span>,<span style={{color:"red"}}> sciences de gestion </span>
                    et <span style={{color:"red"}}>sciences juridiques,</span>
                     conçus pour former des professionnels compétents et éclairés dans ces domaines essentiels. 
                     Nos enseignants experts combinent habilement théorie et pratique pour vous offrir une
                      préparation optimale. En collaboration avec des partenaires de renom, plongez dans des
                       environnements stimulants où l'innovation, la stratégie et la justice se rencontrent.
                        Rejoignez-nous pour façonner un avenir prometteur. Votre parcours exceptionnel débute ici.
                           </p>
                      </div>
                           </div>
                           </div>

                           <div className='specialiter'>
                                          <div class="card">
                                          <div class="content">
                                                                 <h4 style={{margin:0}}>Formations</h4>
                                                                 <p>Découvrez nos différentes formations :</p>
                                                                 <p><strong style={{color:'RED'}}>Informatique :</strong> Explorez la programmation, le développement web, et plus encore.</p>
                                                                 <p><strong style={{color:'RED'}}>Science de gestion :</strong> Acquérez des compétences en comptabilité, marketing, et gestion stratégique.</p>
                                                                 <p><strong style={{color:'RED'}}>Science juridique :</strong> Plongez dans les lois et le système judiciaire.</p>
                                                                 <p>Rejoignez-nous pour une éducation de qualité et un avenir prometteur.</p>
                                                                 </div>

                                          </div>
                                      <div className='forma-tion'>
                                      <img src={specia} alt="" />
                                      </div>
                           </div>
                           {/* ligne separatrice */}

                           <div className='line'>
                                  </div>
                                  <div className='line-child'>
                                  </div>
                            {/* fin de la ligne */}
                            <h1 >BTS</h1>
                            <div className="bts">
                            Le Brevet de Technicien Supérieur (BTS) est un diplôme organisé, géré et contrôlé par 
                            l’État qui se prépare en 2 ans. Formation théorique et pratique, le BTS atteste d’une 
                            qualification professionnelle qui permet à son détenteur d’être directement opérationnel 
                            sur le marché de l’emploi. Après les deux (02) années faites à l’école, l’étudiant effectue
                             deux (02) mois de stage pratique en entreprise ce qui lui permet non seulement de rédiger
                              son mémoire de fin de formation mais aussi de toucher du doigt les réalités de l’entreprise.
                               Ce n’est qu’après la soutenance de son mémoire que l’étudiant sera déclaré définitivement admis.
                            </div>
                            {/* fin bts */}
                            <div className='fiche-container'>
                                   <p style={{textAlign:'center'}}> Fiches de renseignement des différentes filières</p>
                                           <div className='contry'><h4 style={{textAlign:'center'}}>TOGO  / BENIN</h4></div>
                           
                               <div style={{display:"flex" , justifyContent:'space-between',padding:'20px',borderBottom:"1px solid black"}}>
                                    <div className='filliere'>BTS Comptabilité et Gestion des Entreprises</div>
                                    <div className='file'>
                                     <img className='pdf' src={pdf} alt="" />
                                         <a href={BTS1} style={{textDecoration:"none" ,marginTop:'6px',color:"white" ,marginLeft:"13px"}} download='BTS-esgis'>Télécharger</a>
                                    </div>
                               </div>
                               {/* fin */}
                               <div style={{display:"flex" , justifyContent:'space-between',padding:'20px',borderBottom:"1px solid black"}}>
                                    <div className='filliere'>BTS Finance Banque</div>
                                    <div className='file'>
                                          <img className='pdf' src={pdf} alt="" />
                                         <a href={BTS2} style={{textDecoration:"none" ,marginTop:'6px',color:"white",marginLeft:"13px"}} download='BTS-esgis'>Télécharger</a>
                                    </div>
                               </div>
                               {/* fin */}
                               <div style={{display:"flex" , justifyContent:'space-between',padding:'20px',borderBottom:"1px solid black"}}>
                                    <div className='filliere'>BTS Commerce International</div>
                                    <div className='file'>
                                          <img className='pdf' src={pdf} alt="" />
                                         <a href={BTS3} style={{textDecoration:"none" ,marginTop:'6px',color:"white",marginLeft:"13px"}} download='BTS-esgis'>Télécharger</a>
                                    </div>
                               </div>
                               {/* fin */}
                               <div style={{display:"flex" , justifyContent:'space-between',padding:'20px',borderBottom:"1px solid black"}}>
                                    <div className='filliere'>BTS Action commerciale et Force de Vente</div>
                                    <div className='file'>
                                          <img className='pdf' src={pdf} alt="" />
                                         <a href={BTS4} style={{textDecoration:"none" ,marginTop:'6px',color:"white",marginLeft:"13px"}} download='BTS-esgis'>Télécharger</a>
                                    </div>
                               </div>
                                {/* fin */}
                                <div style={{display:"flex" , justifyContent:'space-between',padding:'20px',borderBottom:"1px solid black"}}>
                                    <div className='filliere'>BTS Transport Logistique</div>
                                    <div className='file'>
                                          <img className='pdf' src={pdf} alt="" />
                                         <a href={BTS5} style={{textDecoration:"none" ,marginTop:'6px',color:"white",marginLeft:"13px"}} download='BTS-esgis'>Télécharger</a>
                                    </div>
                               </div>
                               {/* fin */}
                               <div style={{display:"flex" , justifyContent:'space-between',padding:'20px',borderBottom:"1px solid black"}}>
                                    <div className='filliere'>BTS Communication des Entreprises</div>
                                    <div className='file'>
                                          <img className='pdf' src={pdf} alt="" />
                                         <a href={BTS6} style={{textDecoration:"none" ,marginTop:'6px',color:"white",marginLeft:"13px"}} download='BTS-esgis'>Télécharger</a>
                                    </div>
                               </div>
                               {/* fin */}
                               <div style={{display:"flex" , justifyContent:'space-between',padding:'20px',borderBottom:"1px solid black"}}>
                                    <div className='filliere'>BTS Informatique de Gestion</div>
                                    <div className='file'>
                                          <img className='pdf' src={pdf} alt="" />
                                         <a href={BTS7} style={{textDecoration:"none" ,marginTop:'6px',color:"white",marginLeft:"13px"}} download='BTS-esgis'>Télécharger</a>
                                    </div>
                               </div>
                               {/* fin */}
                               <div style={{display:"flex" , justifyContent:'space-between',padding:'20px',borderBottom:"1px solid black"}}>
                                    <div className='filliere'>BTS Télécommunication</div>
                                    <div className='file'>
                                          <img className='pdf' src={pdf} alt="" />
                                         <a href={BTS8} style={{textDecoration:"none" ,marginTop:'6px',color:"white",marginLeft:"13px"}} download='BTS-esgis'>Télécharger</a>
                                    </div>
                               </div>
                               {/* fin */}
                               <div style={{display:"flex" , justifyContent:'space-between',padding:'20px',borderBottom:"1px solid black"}}>
                                    <div className='filliere'>BTS Management des Ressources Humaines</div>
                                    <div className='file'>
                                          <img className='pdf' src={pdf} alt="" />
                                         <a href={BTS9} style={{textDecoration:"none" ,marginTop:'6px',color:"white",marginLeft:"13px"}} download='BTS-esgis'>Télécharger</a>
                                    </div>
                               </div>
                               {/* fin */}


                               </div>
                                 {/* ligne separatrice */}

                           <div className='line'>
                                  </div>
                                  <div className='line-child'>
                                  </div>
                            {/* fin de la ligne */}
                            {/* debut LMD */}
                            <h1 >LMD</h1>
                            <div className="bts">
                              Depuis 1998, l'Europe a amorcé une transformation majeure de son système éducatif grâce 
                              au processus de Bologne. Cette initiative a été le catalyseur d'une refonte significative
                               des structures universitaires à travers les pays européens participants. En adoptant le modèle
                                Licence - Master - Doctorat (LMD), les nations ont choisi de créer un environnement éducatif plus
                                 cohérent, transparent et compatible à l'échelle continentale. Cette réforme a permis d'harmoniser
                                  les programmes d'études, les crédits et les diplômes, facilitant ainsi la mobilité des étudiants et
                                   la reconnaissance internationale des qualifications académiques. Le processus de Bologne témoigne de
                                    l'engagement collectif des pays européens en faveur de l'excellence académique et de la 
                                    collaboration transfrontalière, façonnant ainsi le paysage éducatif de la région pour les décennies à venir.
                            </div>
                            {/* fin lmd */}
                             {/* fin bts */}
                             <div className='fiche-container'>
                                   <p style={{textAlign:'center'}}> Fiches de renseignement des différentes filières</p>
                                           <div className='contry'><h4 style={{textAlign:'center'}}>TOGO  / BENIN  / GABON</h4></div>
                           
                               <div style={{display:"flex" , justifyContent:'space-between',padding:'20px',borderBottom:"1px solid black"}}>
                                    <div className='filliere'>Licence-Master Informatique Réseaux et Télécommunication</div>
                                    <div className='file'>
                                          <img className='pdf' src={pdf} alt="" />
                                         <a href={LMDC1} style={{textDecoration:"none" ,marginTop:'6px',color:"white" ,marginLeft:"13px"}} download='LMD-esgis'>Télécharger</a>
                                    </div>
                               </div>
                               {/* fin */}
                               <div style={{display:"flex" , justifyContent:'space-between',padding:'20px',borderBottom:"1px solid black"}}>
                                    <div className='filliere'>Licence-Master Management International</div>
                                    <div className='file'>
                                          <img className='pdf' src={pdf} alt="" />
                                         <a href={LMDC2} style={{textDecoration:"none" ,marginTop:'6px',color:"white",marginLeft:"13px"}} download='LMD-esgis'>Télécharger</a>
                                    </div>
                               </div>
                               {/* fin */}
                               <div style={{display:"flex" , justifyContent:'space-between',padding:'20px',borderBottom:"1px solid black"}}>
                                    <div className='filliere'>Licence-Master Marketing & Communication</div>
                                    <div className='file'>
                                          <img className='pdf' src={pdf} alt="" />
                                         <a href={LMDC3} style={{textDecoration:"none" ,marginTop:'6px',color:"white",marginLeft:"13px"}} download='LMD-esgis'>Télécharger</a>
                                    </div>
                               </div>
                               {/* fin */}
                               <div style={{display:"flex" , justifyContent:'space-between',padding:'20px',borderBottom:"1px solid black"}}>
                                    <div className='filliere'>Licence-Master Gestion des Ressources Humaines</div>
                                    <div className='file'>
                                          <img className='pdf' src={pdf} alt="" />
                                         <a href={LMDC4} style={{textDecoration:"none" ,marginTop:'6px',color:"white",marginLeft:"13px"}} download='LMD-esgis'>Télécharger</a>
                                    </div>
                               </div>
                                {/* fin */}
                                <div style={{display:"flex" , justifyContent:'space-between',padding:'20px',borderBottom:"1px solid black"}}>
                                    <div className='filliere'>Licence-Master Gestion des Projets</div>
                                    <div className='file'>
                                          <img className='pdf' src={pdf} alt="" />
                                         <a href={LMDC5} style={{textDecoration:"none" ,marginTop:'6px',color:"white",marginLeft:"13px"}} download='LMD-esgis'>Télécharger</a>
                                    </div>
                               </div>
                               {/* fin */}
                               <div style={{display:"flex" , justifyContent:'space-between',padding:'20px',borderBottom:"1px solid black"}}>
                                    <div className='filliere'>Licence-Master Comptabilité Contrôle Audit</div>
                                    <div className='file'>
                                          <img className='pdf' src={pdf} alt="" />
                                         <a href={LMDC6} style={{textDecoration:"none" ,marginTop:'6px',color:"white",marginLeft:"13px"}} download='LMD-esgis'>Télécharger</a>
                                    </div>
                               </div>
                               {/* fin */}
                               <div style={{display:"flex" , justifyContent:'space-between',padding:'20px',borderBottom:"1px solid black"}}>
                                    <div className='filliere'>Licence-Master Banque Finance</div>
                                    <div className='file'>
                                          <img className='pdf' src={pdf} alt="" />
                                         <a href={LMDC7} style={{textDecoration:"none" ,marginTop:'6px',color:"white",marginLeft:"13px"}} download='LMD-esgis'>Télécharger</a>
                                    </div>
                               </div>
                               {/* fin */}
                               <div style={{display:"flex" , justifyContent:'space-between',padding:'20px',borderBottom:"1px solid black"}}>
                                    <div className='filliere'>Licence-Master Transport et Logistique</div>
                                    <div className='file'>
                                          <img className='pdf' src={pdf} alt="" />
                                         <a href={LMDC8} style={{textDecoration:"none" ,marginTop:'6px',color:"white",marginLeft:"13px"}} download='LMD-esgis'>Télécharger</a>
                                    </div>
                               </div>
                               {/* fin */}
                               <div style={{display:"flex" , justifyContent:'space-between',padding:'20px',borderBottom:"1px solid black"}}>
                                    <div className='filliere'>Master Management Portuaire et Maritime</div>
                                    <div className='file'>
                                          <img className='pdf' src={pdf} alt="" />
                                         <a href={LMDC9} style={{textDecoration:"none" ,marginTop:'6px',color:"white",marginLeft:"13px"}} download='LMD-esgis'>Télécharger</a>
                                    </div>
                               </div>
                               {/* FIN */}
                               <div className='contry'><h4 style={{textAlign:'center'}}>AUTRE FILLIERE GABON</h4></div>
                                {/* FIN */}
                                <div style={{display:"flex" , justifyContent:'space-between',padding:'20px',borderBottom:"1px solid black"}}>
                                    <div className='filliere'>Licence-Master Stratégie, Entreprenariat et Consulting</div>
                                    <div className='file'>
                                          <img className='pdf' src={pdf} alt="" />
                                         <a href={LMDC10} style={{textDecoration:"none" ,marginTop:'6px',color:"white",marginLeft:"13px"}} download='LMD-esgis'>Télécharger</a>
                                    </div>
                               </div>
                               {/* FIN */}
                               <div style={{display:"flex" , justifyContent:'space-between',padding:'20px',borderBottom:"1px solid black"}}>
                                    <div className='filliere'>Licence-Master Finance de Marchés</div>
                                    <div className='file'>
                                          <img className='pdf' src={pdf} alt="" />
                                         <a href={LMDC11} style={{textDecoration:"none" ,marginTop:'6px',color:"white",marginLeft:"13px"}} download='LMD-esgis'>Télécharger</a>
                                    </div>
                               </div>
                               {/* FIN */}
                               <div style={{display:"flex" , justifyContent:'space-between',padding:'20px',borderBottom:"1px solid black"}}>
                                    <div className='filliere'>Licence Qualité Sécurité Environnement</div>
                                    <div className='file'>
                                          <img className='pdf' src={pdf} alt="" />
                                         <a href={LMDC12} style={{textDecoration:"none" ,marginTop:'6px',color:"white",marginLeft:"13px"}} download='LMD-esgis'>Télécharger</a>
                                    </div>
                               </div>
                               {/* FIN */}

                              </div>
                              {/* debut MBA */}
                                        {/* ligne separatrice */}

                           <div className='line'>
                                  </div>
                                  <div className='line-child'>
                                  </div>
                            {/* fin de la ligne */}
                         
                            <h1 >MBA SPECIALISES</h1>  
                            <div className="bts">
                             Le Master of Business Administration (MBA) est un Master de conception anglo-saxonne, qui présente un côté très pragmatique et qui est destiné à des fonctions de top management.
                            </div>
                         {/* fin */}
                         <div className='fiche-container'>
                                           <div className='contry'><h5 style={{textAlign:'center'}}>Fiches de renseignement des différentes spécialités</h5></div>
                           
                               <div style={{display:"flex" , justifyContent:'space-between',padding:'20px',borderBottom:"1px solid black"}}>
                                    <div className='filliere'>MBA spécialisé en Audit et Contrôle de Gestion</div>
                                    <div className='file'>
                                          <img className='pdf' src={pdf} alt="" />
                                         <a href={MBA1} style={{textDecoration:"none" ,marginTop:'6px',color:"white" ,marginLeft:"13px"}} download='MBA-esgis'>Télécharger</a>
                                    </div>
                               </div>
                               {/* fin */}
                               <div style={{display:"flex" , justifyContent:'space-between',padding:'20px',borderBottom:"1px solid black"}}>
                                    <div className='filliere'>MBA spécialisé en Management Financier</div>
                                    <div className='file'>
                                          <img className='pdf' src={pdf} alt="" />
                                         <a href={MBA2} style={{textDecoration:"none" ,marginTop:'6px',color:"white",marginLeft:"13px"}} download='MBA-esgis'>Télécharger</a>
                                    </div>
                               </div>
                               {/* fin */}
                               <div style={{display:"flex" , justifyContent:'space-between',padding:'20px',borderBottom:"1px solid black"}}>
                                    <div className='filliere'>MBA spécialisé en Finance</div>
                                    <div className='file'>
                                          <img className='pdf' src={pdf} alt="" />
                                         <a href={MBA3} style={{textDecoration:"none" ,marginTop:'6px',color:"white",marginLeft:"13px"}} download='MBA-esgis'>Télécharger</a>
                                    </div>
                               </div>
                               {/* fin */}
                               <div style={{display:"flex" , justifyContent:'space-between',padding:'20px',borderBottom:"1px solid black"}}>
                                    <div className='filliere'>MBA spécialisé en Marketing Management</div>
                                    <div className='file'>
                                          <img className='pdf' src={pdf} alt="" />
                                         <a href={MBA4} style={{textDecoration:"none" ,marginTop:'6px',color:"white",marginLeft:"13px"}} download='MBA-esgis'>Télécharger</a>
                                    </div>
                               </div>
                                {/* fin */}
                                <div style={{display:"flex" , justifyContent:'space-between',padding:'20px',borderBottom:"1px solid black"}}>
                                    <div className='filliere'>MBA spécialisé en Commerce International</div>
                                    <div className='file'>
                                          <img className='pdf' src={pdf} alt="" />
                                         <a href={MBA5} style={{textDecoration:"none" ,marginTop:'6px',color:"white",marginLeft:"13px"}} download='MBA-esgis'>Télécharger</a>
                                    </div>
                               </div>
                               {/* fin */}
                               <div style={{display:"flex" , justifyContent:'space-between',padding:'20px',borderBottom:"1px solid black"}}>
                                    <div className='filliere'>MBA spécialisé en Gestion des Ressources Humaines</div>
                                    <div className='file'>
                                          <img className='pdf' src={pdf} alt="" />
                                         <a href={MBA6} style={{textDecoration:"none" ,marginTop:'6px',color:"white",marginLeft:"13px"}} download='MBA-esgis'>Télécharger</a>
                                    </div>
                               </div>
                               {/* fin */}
                           <div/>
                           
                    </div>
                    {/* FIN FICHE */}
                    {/* FIN */}
                    <div className='line'>
                                  </div>
                                  <div className='line-child'>
                                  </div>
                            {/* fin de la ligne */}
                         
                            <h3 >VISITES D’ENTREPRISES ET STAGES</h3>
                            <div className='entreprise-container'>
                              <div className='entreprise-image'>
                                                  <img src={entreprise} alt="" />
                                        </div>
                                        <div className='entreprise-text'>
                                        Des visites d'entreprises organisées chaque année par filière offrent toujours
                                         l'occasion aux étudiants de découvrir le monde professionnel, de toucher du doigt 
                                         les réalités de leur futur métier, d'échanger avec les  professionnels du domaine et
                                          même de pratiquer dans certains cas. Elles permettent  de faire naître une vocation,
                                           de confirmer ou de remettre en question un projet professionnel.De plus, des stages de 
                                           un à trois mois viennent jalonner tout le cursus académique de l'étudiant pour renforcer
                                            la dimension pratique des enseignements professionnalisés dispensés par l'Ecole.
                                        </div>

                                        
                            </div>
                            {/* debut footer */}
                            <div className='line'>
                      </div>      
                      <footer className='foot' style={{display:'flex'}}>
                          <LogoPages />
                           <div className='footer-pages'>
                                <FooterPages />
                           </div>
                       </footer>
                             

                    </div>
                       {/* ligne separatrice */}
          

         </div>   
        
    </div>
  )
}
