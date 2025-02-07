import '../App.css';
import React from 'react'


import AboutServicepage from '../component/AboutServicepage';
import ServicepageCard from '../component/ServicepageCard';
import HeaderService from '../component/HeaderService';



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