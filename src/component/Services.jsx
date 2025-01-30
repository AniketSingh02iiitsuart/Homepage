
import '../App.css';
import React from 'react';

import Card from './Card';

function Services(){
    return(
        <>
          <section id="services" className="services-container">
          <div className='about-title'>
          <h2>services</h2>
          <p className='underline'><u></u></p>
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
