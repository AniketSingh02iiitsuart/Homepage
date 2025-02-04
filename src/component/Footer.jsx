import '../App.css';
import lin from  '../Images/lin.png'
import twi from  '../Images/twi.png'
import insta from '../Images/insta.png'
import React from 'react';

function Footer(){
     return(
        <> 
        <footer className='footer-section'>
            <div className='footer-container'>
               <div className='footer-brand'>
                  <p>LOGO</p>
                  <div className='footericon'>
                  <img src={lin}></img>
                  <img src={twi}></img>
                  <img src={insta}></img>
                  </div>
               </div>
               <div className='footer-info'>
                   <h4>Pages</h4>
                   <p className='footer-underline'></p>
                   <ul>
                     <li><a href='#home'>Home</a></li>
                     <li> <a href='#Aboutus'>About us</a></li>
                     <li><a href='#Resources'>Resources</a></li>
                   </ul>
                   
                   <h4>Address</h4>
                   <p className='footer-underline'></p>

                   <div className='footer-location'> 
                     <p>Lorem Ipsum has been the industry's standard
                     142555</p>
                     <p>Lorem Ipsum has been the industry's standard
                     142555</p>
                     <p>Lorem Ipsum has been the industry's standard
                     142555</p>
                   </div>
               </div>
            </div>
        </footer>  
        </>
     )   
}

export default Footer;
