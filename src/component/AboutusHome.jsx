import '../App.css';
import React from 'react';

function AboutusHome(){
    return(
        <>

    <section className="about-container">
    
      <div className="about-header">
        <h1 className="about-title">About Us</h1>
        <p className='underline'></p>
      </div>

      
      
        
        <div className="about-subtitle">
          <h2>Lorem Ipsum is simply dummy text</h2>
        </div>

        
        <div className="about-description">
          <p className='about-des-p1'>
            Blockchain technology is transforming the way industries handle data, transactions, and security. By creating decentralized, transparent, and immutable records, blockchain ensures trust without the need for intermediaries. Our approach leverages blockchain to enhance data security, streamline operations, and reduce costs across various sectors like finance, supply chain, healthcare, and more.
          </p>

          <p >
            With blockchain, we can create digital assets, track transactions in real-time, and ensure the integrity of data. The decentralized nature of blockchain reduces risks of fraud, data tampering, and unauthorized access. By utilizing smart contracts, businesses can automate processes and agreements without relying on third-party services. This enables faster, more efficient, and secure operations while ensuring transparency at every step.
          </p>

          
          <div className="about-link">
            <a href="#">ABOUT US</a>
          </div>
        </div>
      
    </section>

             
        </>

    );
}

export default AboutusHome