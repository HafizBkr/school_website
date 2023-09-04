import React from 'react'
import '../stye/footer.css'
import telephone from '../assets/TELEPHONE.svg'
import house from '../assets/location.svg'
export default function footer() {
  return (
    <div className='footer'>
       <div className='footer-content-container'>
        <p style={{fontWeight:"bold"}}>Ecole superieur de gestion d'informatique et des siences</p>
          <div className='footer-items'>
            <div className='footer-item'>
                <div>
                    <img src={telephone} alt="" style={{width:"40px",marginLeft: "5px"}}/> 

                 </div>
                 <div className='contacts'>
                    <a href="">+228 22 50 60 60</a>
                    <a href="">esgis.togo@esgis.org</a>
                 </div>

                <div>
                    <img src={house} alt="" style={{width:"35px",marginLeft: "20px"}}/> 

                 </div>
                 <div className='contacts'>
                    <a  >Boulevard du 30 Août</a>
                    <a >Lomé, Adidogomé</a>
                 </div>
            </div>
            <div></div>
          </div>
       </div>
    </div>
  )
}
