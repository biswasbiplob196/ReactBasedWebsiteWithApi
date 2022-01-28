import React from 'react';

function Contact() {
  return (
    <>
    <section className='contactus-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-lg-10 mx-auto'>
                    <div className='row'>
                        <div className='contact-leftside col-12 col-lg-5'>
                            <h1 className='main-heading fw-bold'>Contact with Our<br /> Sales Team</h1>
                            <p className='main-hero-para'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                            <figure>
                                <img src='./images/img5.jpg'alt='Contact-image'className='img-fulid' />
                            </figure>
                        </div>
                        <div className='contact-rightside col-12 col-lg-7'>
                            <form method='POST'>
                                <div className='row'>
                                    <div className='col-12 col-lg-6 contact-input-field-style'>
                                        <input type="text" name='' id='' className='form-control' placeholder='First Name' />
                                    </div>
                                    <div className='col-12 col-lg-6 contact-input-field-style'>
                                        <input type="text" name='' id='' className='form-control' placeholder='Last Name' />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12 col-lg-6 contact-input-field-style'>
                                        <input type="text" name='' id='' className='form-control' placeholder='Phone Number' />
                                    </div>
                                    <div className='col-12 col-lg-6 contact-input-field-style'>
                                        <input type="text" name='' id='' className='form-control' placeholder='Email ID' />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12 contact-input-field-style'>
                                        <input type="text" name='' id='' className='form-control' placeholder='Add Address'  />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12 contact-input-field-style'>
                                        <input type="text" name='' id='' className='form-control' placeholder='Enter Your Massage'  />
                                    </div>
                                </div>
                                <div class="form-check form-checkbox-style">
                                    <input class="form-check-input" type="checkbox" value="" id="" />
                                    <label class="form-check-label main-hero-para">
                                        I agree that it may contact me at the email address or phone number above
                                    </label>
                                </div>
                                <button type='submit' className='btn btn-style w-100'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default Contact;
