
import '../App.css';
import React from 'react';

import disc from "../Images/disc.png"

function Textbox()
{
    return(
        <>
               <section className="textbox-section">
      <div className="textbox-content">
        <h1>Text Box</h1>
        <h2 className="subheading">text box</h2>
        <p>
          Lorem ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        <div className="button-container">
          <button className="btn btn-primary">JOIN US</button>
          <button className="btn btn-secondary">JOIN US</button>
        </div>
      </div>
    </section>
        </>

    );
}
export default Textbox