

import './Footer.css';




import lin from  '../../Images/Lin.png'
import twi from  '../../Images/twi.png'
import insta from '../../Images/insta.png'
import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
     return(
        <> 
        <footer className='footer-section'>



            <div className='footer-container'>


               <div className='footer-brand'>
                  <p>LOGO</p>
                  <div className='footericon'>
                     <a href="https://www.linkedin.com" >
                        <img src={lin} alt="LinkedIn" />
                     </a>
                     <a href="https://www.twitter.com">
                        <img src={twi} alt="Twitter" />
                     </a>
                     <a href="https://www.instagram.com">
                        <img src={insta} alt="Instagram" />
                     </a>
                  </div>
               </div>

             


               <div className='footer-info'>

                   <div className='footer-un'>
                   <h4>Pages</h4>
                    <div className='footer-underline'></div>
                   </div>
                   
                   
                   <ul>
                     <li><Link to="/">Home</Link></li>
                     <li> <Link to="/Aboutuspage">About us</Link></li>
                     <li><Link to="/Servicepage"  >Resources</Link></li>
                   </ul>

                
                <div className='footer-un'>
                   <h4>Address</h4>
                   <div className='footer-underline'></div>
                </div>


                   
                   
                 

               <div className='footer-location'> 
                     <p>Lorem Ipsum has been the industry's standard 142555</p>
                     <p>Lorem Ipsum has been the industry's standard 142555</p>
                     <p>Lorem Ipsum has been the industry's standard 142555</p>
                   </div>
                  
               </div>
           
             
            </div>
        </footer>  
        </>
     )   
}

export default Footer;
