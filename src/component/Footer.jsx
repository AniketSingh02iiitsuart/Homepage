import '../App.css';
import lin from  '../Images/Lin.png'
import twi from  '../Images/twi.png'
import insta from '../Images/insta.png'
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
                  <img src={lin}></img>
                  <img src={twi}></img>
                  <img src={insta}></img>
                  </div>
               </div>
               <div className='footer-info'>
                   <h4>Pages</h4>
                   <p className='footer-underline'></p>
                   <ul>
                     <li><Link to="/">Home</Link></li>
                     <li> <Link to="/About">About us</Link></li>
                     <li><Link to="/Resources"  >Resources</Link></li>
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
