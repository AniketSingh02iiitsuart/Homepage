import '../App.css';
import React from 'react'


import AboutServicepage from '../component/ServicePage_component/AboutServicepage';
import ServicepageCard from '../component/ServicePage_component/ServicepageCard';
import HeaderService from '../component/ServicePage_component/HeaderService';



function Servicepage()
{
    return(
        <>
             <HeaderService/>
           
            <AboutServicepage/>
            <div className="feature-page">
                <ServicepageCard />
                <ServicepageCard />
                <ServicepageCard />            
           </div>
           
        </>
    )
}

export default Servicepage