import '../App.css';
import React from 'react';


import Homesection from '../component/Homepage_component/Homesection';
import AboutusHome from '../component/Homepage_component/AboutusHome';
import Services from '../component/Homepage_component/Services';
import Card from '../component/Homepage_component/Card';
import Responsible from '../component/Homepage_component/Responsible';
import OurPartner from '../component/Homepage_component/OurPartner';
import News from '../component/Homepage_component/News';
import Textbox from '../component/Homepage_component/Textbox';
import Navbar from '../component/Homepage_component/Navbar';


function Homepage(){
    return(
        <>
        

       <Navbar/>
       <Homesection/>
       <AboutusHome/>
       <Services/>
       <Responsible/>
       <OurPartner/>
       <News/>
       <Textbox/>
       
       

      
 
        </>
    )
}
export default Homepage;