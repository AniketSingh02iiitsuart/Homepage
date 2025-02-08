import './Homesection.css';
import React from 'react';

function Homesection() {
    return (
        <>
            
          <section  className='homesection1'>
          
              <div className='homesection'>
                <div className='homesection-left'>

                <h1 className='textbox1'>TEXT BOX </h1>
                <h2 className='textbox2'>text box</h2>

                <button className="joinus" onClick={() => window.location.href = "https://www.google.com"}>
    Join Us
</button>

              </div>
        

           
                   <div   >
                   <div className='homesection-right'>
                   </div>

                   <div className="homesection-right-underline" >
                   </div>
                   </div>
         
              </div>
           
           
            <p className='paragraph1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
           

           
            <div className="center-container">
               <div className="half-circle-upar"></div>
         </div> 
           
          </section>
          

        </>
    );
}

export default Homesection;
