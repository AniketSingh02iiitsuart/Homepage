import React from "react";
import './Mission.css';
import missionImage from '../../Images/disc.png';

function Mission(){
    return(
        <>
      <section className="mission-container">
      <div className="mission-left">
      <img src={missionImage} alt="Team Discussion" className="mission-image" />
      <div className="over-write">
        <h2>Our Mission</h2>
      </div>
      </div>


      <div className="about-mission">
      <p className="mission-right">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s.
        </p>

        <p className="subtext">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
      </div>
     

      


     
      </section>
      <div className="bottom-section">
        <h3>Offering you expert guidance and<br></br> strategic insights</h3>
      </div>

        </>
    )
}

export default Mission