import React from 'react'
import Logo from '../assets/logo.png'
import '../stye/logopage.css'
export default function logo() {
  const logostyle ={
    marginLeft :'3%',
  };
  const mediaQueryStyle = {
    '@media screen and (max-width: 768px)': {
      // Styles spécifiques pour les écrans de 768 pixels de largeur ou moins
         display:'none' // Par exemple, augmentez la marge supérieure
    },
  };
  return (
    <div className='.logop' style={{...logostyle , ...mediaQueryStyle}}  >
        <img src={Logo} alt="" style={{height:'60px',marginTop:'10px'}} />
    </div>
  )
}
