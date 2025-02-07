import '../App.css';
import React from 'react';


import Homesection from '../component/Homesection';
import AboutusHome from '../component/AboutusHome';
import Services from '../component/Services';
import Card from '../component/Card';
import Responsible from '../component/Responsible';
import OurPartner from '../component/OurPartner';
import News from '../component/News';
import Textbox from '../component/Textbox';
import Navbar from '../component/Navbar';


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