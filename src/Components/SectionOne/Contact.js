import React from 'react'

function Contact() {
    return (
        <div>

            <section className="form">
                <div className="container">
                                    <div className="heading">
                        <h2>Have a project idea? Schedule a call with us!</h2>
                        {/* <p>Shoot us an email with your request, and we will contact you within one business day.</p> */}
                    </div>
                    <form className="form-detail">
                        <div className="row">
                            <div className="col-md-12 form-left">
                                {/* <input type="text" name="name" placeholder="Name" />
                                <input type="number" name="number" placeholder="Phone Number" /> */}
                                <input type="email" name="name" placeholder="Email" />
                                <div className="button">
                            <button className='btn_contact'><a href="mailto: info@cybersify.tech">Get a free consultation</a></button>
                         </div>
                                {/* <input type="text" name="name" placeholder="Company" /> */}
                            </div>
                            {/* <div className="col-lg-5 col-md-12 form-right">
                                <textarea placeholder="Message"></textarea>
                            </div> */}
                        </div>
                        {/* <div className="form_checkbox">
                            <input type="checkbox" id="check" name="check" />

                            <label for="check">I consent to Aetsoft Inc. processing my personal information Privacy Policy and Cookie Policy  and that, given the global nature of Aetsoft Inc.'s business, such processing may take place outside of my home jurisdiction.</label>
                        </div> */}

                        {/* <div className="button">
                            <button className='btn_contact'>Get a free consultation</button>
                         </div> */}
                    </form>

                </div>
            </section>
        </div>
    )
}

export default Contact