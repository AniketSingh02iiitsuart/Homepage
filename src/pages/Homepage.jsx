import '../App.css';
import React from 'react';

import Navbar from '../component/Navbar';
import Homesection from '../component/Homesection';
import Aboutus from '../component/Aboutus';
import Services from '../component/Services';
import Card from '../component/Card';
import Responsible from '../component/Responsible';
import OurPartner from '../component/OurPartner';
import News from '../component/News';
import Textbox from '../component/Textbox';
import Footer from '../component/Footer';

function Homepage(){
    return(
        <>
        

        <Navbar/>
       <Homesection/>
       <Aboutus/>
       <Services/>
       <Responsible/>
       <OurPartner/>
       <News/>
       <Textbox/>
       <Footer/>
       

      
 
        </>
    )
}
export default Homepage;