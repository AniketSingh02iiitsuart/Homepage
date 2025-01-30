import '../App.css';
import React from 'react';
import image1 from '../Images/check-circle.png';
 
function Responsible(){
     return(
        <>
          <section className='tech-section'>
            
           <div className='tech-header'>
             <p></p>
           </div>
           <div className='tech-content'>
               
              <h3> <span>01</span>
                Ethical AI Implementation
              </h3>
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
                 
              <h3><span>02</span>
                Sustainable Tech Solutions
              </h3>
              <h3><span>03</span>
                Inclusive Digital Innovation
              </h3>
              
           </div>
          </section>
        </>
     );   
}

export default  Responsible;
