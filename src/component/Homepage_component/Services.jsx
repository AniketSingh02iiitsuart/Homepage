
import './Services.css';
import React from 'react';

import Card from './Card';

function Services(){
    return(
        <>
          <section  className="services-container">


          <div  className='un-width'>
          <p className="about-title">SERVICE </p>
          <div className='team-underline1'>  </div>
          </div>
           
          <div className='service-card'>
            <Card />
            <Card />
            <Card />
            <Card />
             
          </div> 
        </section>
        </>

    );
}
export default Services
