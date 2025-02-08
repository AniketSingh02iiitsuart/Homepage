import './News.css';
import React from 'react';


import grp from '../../Images/grp.jpg'

function News() {
    return(
        <>
        <section className='news-section'>


        <div className='article'>
        <p className='til'> ARTICLE AND NEWS</p>
        <div className='team-underline1'> </div>
        </div>
           
           
          
            <div className='main-news'>
                <div className='news-item'>
                    <img className='news-image' src={grp} alt="Blockchain News 1"></img>
                    <div className='news-content'>


                    <div className='arti-time'>
                    <h3>ARTICLE</h3>
                     <p className='news-time'>2 MIN</p>
                    </div>

                    <div className='team-underline1'> </div>
                     
                    <p className='news-content-p1'>Intelligent Response</p>
                    
                  
                    <p  className='news-content-p2'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>








                <div className='news-item'>
                    <img className='news-image' src={grp} alt="Blockchain News 2"></img>
                    <div className='news-content'>


                    <div className='arti-time'>
                    <h3>ARTICLE</h3>
                    <p className='news-time'>2 MIN</p>
                    </div>
                    <div className='team-underline1'> </div>

                    <p className='news-content-p1'>Intelligent Response</p>
                   
                   
                    <p className='news-content-p2'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div className='news-item'>
                    <img className='news-image' src={grp} alt="Blockchain News 3"></img>
                    <div className='news-content'>



                    <div className='arti-time'>
                    <h3>ARTICLE</h3>
                    <p className='news-time'>2 MIN</p>
                    </div>
                    <div className='team-underline1'> </div>

                    <p className='news-content-p1'>Intelligent Response</p>
                   
                   
                    <p className='news-content-p2'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>

            <div className="about-link-1">
            <a href="https://iiitsurat.ac.in/">MORE</a>
          </div>
        </section>
        </>
    )
}

export default News;
