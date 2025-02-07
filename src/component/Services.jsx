
import '../App.css';
import React from 'react';

import Card from './Card';

function Services(){
    return(
        <>
          <section id="services" className="services-container">
          <div >
          <p className="about-title">SERVICE </p>
          <p className='team-underline2'></p>
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
