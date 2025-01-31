import '../App.css';
import React from 'react';


import Homesection from '../component/Homesection';
import Aboutus from '../component/Aboutus';
import Services from '../component/Services';
import Card from '../component/Card';
import Responsible from '../component/Responsible';
import OurPartner from '../component/OurPartner';
import News from '../component/News';
import Textbox from '../component/Textbox';


function Homepage(){
    return(
        <>
        

       
       <Homesection/>
       <Aboutus/>
       <Services/>
       <Responsible/>
       <OurPartner/>
       <News/>
       <Textbox/>
       
       

      
 
        </>
    )
}
export default Homepage;