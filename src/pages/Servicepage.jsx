import '../App.css';
import React from 'react'


import ServiceIntro from '../component/ServiceIntro';
import AboutServicepage from '../component/AboutServicepage';
import ServicepageCard from '../component/ServicepageCard';




function Servicepage()
{
    return(
        <>
            <ServiceIntro/>
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