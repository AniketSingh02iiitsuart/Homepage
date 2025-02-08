import './Ourpartner.css';
import React from 'react';


import log1 from "../../Images/log1.png"
import log2 from "../../Images/log2.png"
import log3 from "../../Images/log3.png"



function OurPartner() {
    return (
        <>
            <section>

            <div className='partner1'>
            <p className='partner-heading'>OUR PARTNER</p>
            <div className='team-underline1'> </div>
            </div>
                
               

                <p className='divider-line'></p>

                <div className='partner-list'>
                
                    <div className='partner-item'>
                       
                        <img src={log1} alt="Partner Logo"></img>
                        <span className='brand-name'>BRAND NAME</span>
                       
                    </div>
                    <p className='divider-line'></p>
                </div>

                <div className='partner-list'>
                
                    <div className='partner-item'>
                    
                        <img src={log2} alt="Partner Logo"></img>
                        <span className='brand-name'>BRAND NAME</span>
                        
                    </div>
                    <p className='divider-line'></p>
                </div>

                <div className='partner-list'>
                
                    <div className='partner-item'>
                      
                        <img src={log3} alt="Partner Logo"></img>
                        <span className='brand-name'>BRAND NAME</span>
                        
                    </div>
                    <p className='divider-line'></p>
                </div>


          
            </section>
        </>
    )
}

export default OurPartner;
