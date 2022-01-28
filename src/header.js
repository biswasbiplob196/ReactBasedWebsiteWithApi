import React from 'react'

const Header = () => {
    return (
        <>
            <header>
                <section className="container main-hero-container">
                    <div className="row">
                        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
                            <h1 className="display-2">Online Payment Made <br /> Easy For You.</h1>
                            <p className="main-hero-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries. 
                            </p>
                            <h3>Get early access for you.</h3>
                            <div className="input-group mt-3">
                                <input type="text" className="rounded-pill w-75 me-3 p-2 form-control-text"placeholder='Enter Your Email' /> 
                                <div className="input-group-button">
                                    Get Now
                                </div>
                            </div>
                        </div>
                         {/*------------main header Right Side */}
                         <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center 
                            align-items-center main-herosection-images">
                             <img src="./images/img1.jpg" alt="images"className="img-fluid" />
                             <img src="./images/img2.jpg" alt="images"className="img-fluid main-hero-img2" />
                         </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header;
