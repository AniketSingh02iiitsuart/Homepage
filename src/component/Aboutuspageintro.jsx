import '../App.css';
import React from 'react';
import image from "../Images/grp.jpg";

function Aboutuspageintro()
{
    return(
        <>
      <div className="section-container">
      <p className="text">
        Lorem Ipsum is simply dummy <br />text of the <span className="italic-text">printing and <br />typesetting</span> industry
      </p>
      <div className="graphic">
        <div className="circle half-top"></div>
        <div className="circle half-bottom"></div>
        <div className="circle half-top reverse"></div>
      </div>

     
    </div>

    <img src={image} alt="Team Discussion" className="image-style" />
        </>
    );
}
export default Aboutuspageintro