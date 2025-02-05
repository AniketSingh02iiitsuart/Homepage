import '../App.css';
import React from 'react';
import image1 from '../Images/check-circle.png';
import Image1 from '../Images/disc.png';
 
function Responsible(){
     return(
        <>
          <section className='tech-section'>
          

           <div className='tech-header'>
           <div className="over-write1">
        <h2>Our Process</h2>
      </div>
           </div>
           <div className='tech-content'>

             <div className='tri'>
             <span className='resp3'>01</span>
              <h3> 
               Responsible Tech Use
              </h3>
             </div>
          
              <p>We leverage artificial intelligence (AI) techniques to enhance accuracy 
              in digital transformation while ensuring fairness and transparency.</p>
                 
                <div className='icon-text'>
                    <p><img src={image1} alt='check icon'></img></p>
                    <p>Our AI models are trained to recognize patterns responsibly, 
                    avoiding biases and ensuring inclusivity.</p>
                </div>
                <div className='icon-text'>
                    <p><img src={image1} alt='check icon'></img></p>
                    <p>We use privacy-preserving technologies to protect user data while 
                    providing efficient AI-driven solutions.</p>
                </div>
                <div className='icon-text'>
                    <p><img src={image1} alt='check icon'></img></p>
                    <p>Our approach prioritizes ethical AI practices to maintain trust and reliability 
                    in digital transformation.</p>
                </div>


               <div className='tri'>
               <span className='resp1'>02</span> 
              <h3 >
              Responsible Tech Use
              </h3>
               </div>
              

              <div className='tri'>
              <span className='resp2'>03</span>
              <h3 >
              Responsible Tech Use
              </h3>

              </div>
            
              
           </div>
          </section>
        </>
     );   
}

export default  Responsible;
