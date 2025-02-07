import '../App.css';
import React from 'react';
import image4 from '../Images/disc.png';


function CardSectionAboutPage(){
    return(
        <>

<div className="cardAboutpage">
      <img src={image4} alt="Discussion" className="card-image" />
        <div className='card2'>
        <h3 className='card-content'>Lorem Ipsum</h3>
        <p className='aboutpagesection-underline'></p>
       
       <p className='about-carrd'>
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
       </p></div>
        
      
    </div>
              
        </>
    )
}
export default CardSectionAboutPage