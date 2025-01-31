import '../App.css';
import React from 'react';
import bgImage from "../Images/disc.png";

function ServiceIntro(){
    return(
        <>
     <div className="service-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay"></div>
      <div className="service-content">
        <h1>Text Box</h1>
        <p className="italic-text">Text Box</p>
      </div>
    </div>


        </>
    )
}

export default ServiceIntro