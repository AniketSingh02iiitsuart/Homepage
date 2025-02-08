import '../App.css';
import React from 'react'
import Aboutuspageintro from '../component/AboutPage_component/Aboutuspageintro';
import Mission from '../component/AboutPage_component/Mission';
import CardSectionAboutPage from '../component/AboutPage_component/CardSectionAboutPage';
import AboutpageTeam from '../component/AboutPage_component/AboutpageTeam';
import AboutpageCard from '../component/AboutPage_component/AboutpageCard';
import HeaderAbout from '../component/AboutPage_component/HeaderAbout';


function Aboutuspage(){
    return(
        <>
           <HeaderAbout/>
           <Aboutuspageintro/>
           <Mission/>

           <div className='card-list'>
           <CardSectionAboutPage/>
           <CardSectionAboutPage/>
           <CardSectionAboutPage/>
           </div>


           <AboutpageTeam/>
           
            <AboutpageCard/>
        </>
    );
}

export default Aboutuspage