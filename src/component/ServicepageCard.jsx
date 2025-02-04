
import '../App.css';
import React from 'react';
import cardimg from "../Images/Servicecardimg.png";

function ServicepageCard (){
    return(
        <>
           <div className="feature-container">
      <div className="feature-image">
      <h2>Intelligent Responses</h2>
        <img src={cardimg} alt="Feature Icon" />
      </div>

      <div className="feature-content">
        
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <ul>
          <li>It has survived not only five centuries, but also the leap into electronic typesetting.</li>
          <li>It was popularised in the 1960s with the release of Letraset sheets.</li>
          <li>More recently with desktop publishing software like Aldus PageMaker.</li>
        </ul>
      </div>
    </div>
        </>
    )
}
export default ServicepageCard