import '../App.css';
import React from 'react';

function AboutusHome(){
    return(
        <>
           <div className="center-container">
               <div className="half-circle-lower"></div>
           </div>
    <section className="about-container">
        

    
      <div >
        <p className="about-title1">ABOUT US
          </p>    
      </div>

      
      
        
        <div >
          <p className="about-subtitle">Lorem Ipsum is simply dummy text</p>
        </div>

        
        <div className="about-description">
          <p className='about-des-p1'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 

          </p>

          <p className='about-des-p2'>
            
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </p>

          
          <div className="about-link">
            <a href="#">ABOUT US</a>
          </div>
        </div>
      
    </section>

             
        </>

    );
}

export default AboutusHome