import '../App.css';
import React from 'react';


import grp from '../Images/grp.jpg'

function News() {
    return(
        <>
        <section className='news-section'>
            <h3> ARTICLE AND NEWS</h3>
            <p className='underline-news'></p>
            <div className='main-news'>
                <div className='news-item'>
                    <img className='news-image' src={grp} alt="Blockchain News 1"></img>
                    <div className='news-content'>
                     <h3>ARTICLE</h3>
                    <p>Intelligent Response</p>
                  
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div className='news-item'>
                    <img className='news-image' src={grp} alt="Blockchain News 2"></img>
                    <div className='news-content'>
                    <h3>ARTICLE</h3>
                    <p>Intelligent Response</p>
                   
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div className='news-item'>
                    <img className='news-image' src={grp} alt="Blockchain News 3"></img>
                    <div className='news-content'>
                    <h3>ARTICLE</h3>
                    <p className='news-p1'>Intelligent Response</p>
                   
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default News;
