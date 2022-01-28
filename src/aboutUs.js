import React, { useState } from 'react';
import HowToUseApp from './API/howtoUse';

function AboutUs() {
    const[aboutData, setAboutData] = useState(HowToUseApp);
  return (
    <>
        <section className="common-section our-services">
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                        <img src='./images/img3.jpg' alt='about us image' />
                    </div>
                    {/*right section data */}
                    <div className='col-12 col-lg-7 our-service-list'>
                        <h3 className='mini-title'>
                            --AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
                        </h3>
                        <h1 className='main-heading'>How to use the app?</h1>
                        {
                            aboutData.map((curElem)=>{
                                const {id, title, info} = curElem;
                                return(
                                    <>
                                    <div className='row our-service-info'>
                                    <div className='col-1 our-service-number'>{id}</div>
                                    <div className='col-10 our-service-data'>
                                    <h2>{title}</h2>
                                    <p>{info}</p>
                                    </div>
                                    </div>
                                    </>
                                )})
                        }
                        <button className='btn-style btn-style-border'>Learn More</button>
                    </div>
                </div>
            </div>
        </section>

        {/* 2nd part of about us */}


        <section className="common-section our-services our-services-rightside">
            <div className="container mb-5">
                <div className="row">
                    
                    {/*right section data */}
                    <div className='col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column  '>
                        <h3 className='mini-title'>
                            Support In Any Languages
                        </h3>
                        <h1 className='main-heading'>World class Support Is <br /> Available 24/7</h1>
                        {
                            aboutData.map((curElem)=>{
                                const {id, title, info} = curElem;
                                return(
                                    <>
                                    <div className='row our-service-info'>
                                    <div className='col-1 our-service-number'>{id}</div>
                                    <div className='col-10 our-service-data'>
                                    <h2>{title}</h2>
                                    <p>{info}</p>
                                    </div>
                                    </div>
                                    </>
                                )})
                        }
                        <button className='btn-style btn-style-border'>Learn More</button>
                    </div>
                    <div className="col-12 col-lg-5 text-start our-service-leftside-img">
                    <img src='./images/img4.jpg' alt='about us image' />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutUs;
