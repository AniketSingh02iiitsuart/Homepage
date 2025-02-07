import '../App.css';
import React from 'react';
import image from "../Images/grp.jpg";
import img9 from "../Images/aboutp.png"

function Aboutuspageintro()
{
    return(
        <>
      <div className="section-container">
      <p className="text">
        Lorem Ipsum is simply dummy <br />text of the <span className="italic-text">printing and <br />typesetting</span> industry
      </p> 

      <div className='aboutpageimg'>
             <img src={img9}></img>
           </div>
    </div>

    <img src={image} alt="Team Discussion" className="image-style" />
        </>
    );
}
export default Aboutuspageintro