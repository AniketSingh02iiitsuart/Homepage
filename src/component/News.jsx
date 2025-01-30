import '../App.css';
import React from 'react';


import grp from '../Images/grp.jpg'

function News() {
    return(
        <>
        <section className='news-section'>
            <h3> Articles and News</h3>
            <p className='underline-news'></p>
            <div className='main-news'>
                <div className='news-item'>
                    <img className='news-image' src={grp} alt="Blockchain News 1"></img>
                    <div className='news-content'>
                    <p>Blockchain Basics</p>
                    <p className='underline'></p>
                    <p>Blockchain technology is revolutionizing industries by providing decentralized, secure, and transparent data management systems. It has applications in finance, healthcare, supply chain management, and more.</p>
                    </div>
                </div>
                <div className='news-item'>
                    <img className='news-image' src={grp} alt="Blockchain News 2"></img>
                    <div className='news-content'>
                    <p>Smart Contracts</p>
                    <p className='underline'></p>
                    <p>Smart contracts enable self-executing agreements with terms written directly into code. They ensure trust and automation in transactions, without relying on intermediaries.</p>
                    </div>
                </div>
                <div className='news-item'>
                    <img className='news-image' src={grp} alt="Blockchain News 3"></img>
                    <div className='news-content'>
                    <p>Blockchain Security</p>
                    <p className='underline'></p>
                    <p>Blockchain provides enhanced security features through encryption, ensuring that data remains immutable and resistant to tampering. This makes it ideal for secure online transactions.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default News;
