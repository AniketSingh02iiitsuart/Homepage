import '../App.css';
import React from 'react';


import log1 from "../Images/log1.png"
import log2 from "../Images/log2.png"
import log3 from "../Images/log3.png"



function OurPartner() {
    return (
        <>
            <section>
                <h3 className='partner-heading'>Our Trusted Partners</h3>

                <p className='divider-line'></p>

                <div className='partner-list'>
                    <div className='partner-item'>
                    <h3>Company Alpha</h3>
                        <img src={log1} alt="Partner Logo"></img>
                       
                    </div>
                    <p className='divider-line'></p>
                </div>

                <div className='partner-list'>
                    <div className='partner-item'>
                    <h3>Company Beta</h3>
                        <img src={log2} alt="Partner Logo"></img>
                        <h3>Company Beta</h3>
                    </div>
                    <p className='divider-line'></p>
                </div>

                <div className='partner-list'>
                    <div className='partner-item'>
                       <h3>Company Gamma</h3>
                        <img src={log3} alt="Partner Logo"></img>
                        
                    </div>
                    <p className='divider-line'></p>
                </div>
            </section>
        </>
    )
}

export default OurPartner;
