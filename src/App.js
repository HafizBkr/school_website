import React, { useRef, useEffect ,useState } from 'react';
import Navbar from './Components/Navbar'
import LEFT from './Components/LEFT'
import Main from './Components/Main'
import Footer from './Components/footer'
import Logo from './Components/logo'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import $ from 'jquery';
import Aos from 'aos';
import 'aos/dist/aos.css';





export default function App() {
  useEffect(() =>{
    Aos.init({});
 }
 ,[])
  return (
    <div>
     <div className='Navbar' style={{padding:0}}>  
     <Logo />
       <Navbar />
     </div>
     
      <LEFT />
      
     <div className='center-content'>
     <Main />
     <Footer />
     
     </div>
     </div>
  )
}
