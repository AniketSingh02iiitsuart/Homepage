
import './Textbox.css';
import React from 'react';



import disc from "../../Images/disc.png"

function Textbox()
{
    return(
        <>
               <section className="textbox-section" style={{ backgroundImage: `url(${disc})` }}>
      <div className="textbox-content">
        <h1>Text Box</h1>
        <h2 className="subheading">text box</h2>
        <div>
        <p className='textbox-p1'>
          Lorem ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        </div>
       
        <div className="button-container">
        <a href="https://www.google.com">
    <button className="btn btn-primary">JOIN US</button>
</a>

<a href="https://www.google.com">
    <button className="btn btn-secondary">JOIN US</button>
</a>

        </div>
      </div>
    </section>
        </>

    );
}
export default Textbox