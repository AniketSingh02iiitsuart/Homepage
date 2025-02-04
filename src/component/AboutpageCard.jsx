import '../App.css';
import React from 'react';

import grp from '../Images/grp.jpg'

function AboutpageCard(){
    return(

        <>
            <section className='about-team-card'>
            <div className='about-main-news'>
               <div className='about-news-item'>
                                   <img className='about-news-image' src={grp} alt="Blockchain News 1"></img>
                                   <div className='about-news-content'>
                                   <p>Post</p>
                                   
                                   <h3>Name</h3>
                                   <p>Blockchain technology is revolutionizing industries by providing decentralized, secure, and transparent data management systems. It has applications in finance, healthcare, supply chain management, and more.</p>
                                   </div>
                               </div>

                               <div className='about-news-item'>
                                   <img className='about-news-image' src={grp} alt="Blockchain News 1"></img>
                                   <div className='about-news-content'>
                                   <p>Post</p>
                                  
                                   <h3>Name</h3>
                                   <p>Blockchain technology is revolutionizing industries by providing decentralized, secure, and transparent data management systems. It has applications in finance, healthcare, supply chain management, and more.</p>
                                   </div>
                               </div>


                               <div className='about-news-item'>
                                   <img className='about-news-image' src={grp} alt="Blockchain News 1"></img>
                                   <div className='about-news-content'>
                                   <p>Post</p>
                                   
                                   <h3>Name</h3>
                                   <p>Blockchain technology is revolutionizing industries by providing decentralized, secure, and transparent data management systems. It has applications in finance, healthcare, supply chain management, and more.</p>
                                   </div>
                               </div>                            
                       
            </div>


            </section>
        </>
    )
}
export default AboutpageCard