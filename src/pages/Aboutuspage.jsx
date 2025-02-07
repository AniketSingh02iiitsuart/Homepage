import '../App.css';
import React from 'react'
import Aboutuspageintro from '../component/Aboutuspageintro';
import Mission from '../component/Mission';
import CardSectionAboutPage from '../component/CardSectionAboutPage';
import AboutpageTeam from '../component/AboutpageTeam';
import AboutpageCard from '../component/AboutpageCard';
import HeaderAbout from '../component/HeaderAbout';


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