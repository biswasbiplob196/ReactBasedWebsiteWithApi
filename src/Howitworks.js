import React, { useState } from 'react'
import workapi from './API/workapi';

function Howitworks() {

    const [workData, setWorkData] = useState(workapi);
    console.log(workData)
    return (
        <>
        <section>
            <div className="container work-container">
                <h1 className="main-heading text-center">How does it work.</h1>
                <div className="row">
                    {workData.map((curElem) =>{
                         const {id, logo, title, info} = curElem;
                        return(
                            <>
                            <div className="col-12 col-lg-4 text-center work-container-subdiv">
                            <i class={`fontawsome-style ${logo}`}></i>
                            <h2 className="sub-heading">{title}</h2>
                            <p className="main-hero-para">{info}</p>
                            </div>
                            </>
                        );
                    })}                    
                </div>
            </div>
        </section>
        </>
    )
}

export default Howitworks;
