import React from 'react'
import LogoPages from '../Components/logopages'
import Navbar from '../Components/Navbar'
import '../Pages-styles/EsgisEnImage.css'
import FooterPages from '../Components/footerpages'
import $ from 'jquery'
import image1 from '../assets/esgis-lome-avedji.jpg'
import image2 from '../assets/image1.jpeg'
import image3 from '../assets/image2.jpg'
import image4 from '../assets/image3.jpg'
import image5 from '../assets/image4.jpg'
import image6 from '../assets/image7.jpg'
import image7 from '../assets/image8.jpg'
import image8 from '../assets/image9.jpg'
import image9 from '../assets/image10.jpg'
import image10 from '../assets/image11.jpg'
import image11 from '../assets/image12.jpg'
import image12 from '../assets/image13.jpg'
import image13 from '../assets/image14.jpg'
import image14 from '../assets/image15.jpg'
import BF from '../assets/bf.mp4'
import Ms from '../assets/vid1.mp4'



export default function EsgisEnImage() {


  return (
    <div>
         <div className='Navbar'>  
            <LogoPages />
            <Navbar />
         </div>
         <div className='main-content'>
              <div className='left-page'>
                <div className="vertical-text">Esgis en image</div>
              </div>
              <div className='gallery-main'>
              <div className='main-page'>
      <h3>Esgis En Image</h3>
      <div id="gallery" className="container-fluid">
        <img
          src={image1}
          className="img-responsive"
        />
         <video className="vid" controls>
          <source
            src={Ms}
            type="video/mp4"
          />
        </video>
        <img
          src={image2}
          className="img-responsive"
        />
        <img
          src={image3}
          className="img-responsive"
        />
       
       
        <img
          src={image4}
          className="img-responsive"
        />
        <img
          src={image5}
          className="img-responsive"
        />
        
        <img
          src={image6}
          className="img-responsive"
        />
        <img
          src={image7}
          className="card img-responsive"
        />
        <img
          src={image8}
          className="img-responsive"
        />
        <img
          src={image9}
          className="img-responsive"
        />
         <img
          src={image13}
          className="img-responsive"
        />
        <img
          src="https://source.unsplash.com/400x600?female,portrait"
          className="img-responsive"
        />
        <img
          src={image14}
          className="img-responsive"
        />
       
        <img
          src={image10}
          className="img-responsive"
        />
        <img
          src={image11}
          className="img-responsive"
        />
         <video className="vid" controls>
          <source
            src={BF}
            type="video/mp4"
          />
        </video>
        <img
          src={image12}
          className="img-responsive"
        />
      </div>
      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body"></div>
          </div>
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
   {/* fin */} 
          </div>
                  
         </div>
    </div>
  )
}
