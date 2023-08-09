import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Services from './services'
import Header from '../header';
import Innovation from './innovation';
import Footer from './Footer';
import Portfolio from './Portfolio';

function Contact_page() {
    useEffect(() => {
        document.title = 'Contact Us | Cybersify Cloud Computing';
    }, []);
    return (
        <>
        <div className='contact_pagesec-Header'>
        <section className='services-pagesec'>
            <Container>
            <Header />
            </Container>
        </section>
        </div>
        
        <section className='contact_pagesec'>
       <Container>
<div className='contact_page'>

<div className="form">
        <div className="heading">
            <h2>Have a project idea?</h2>
            <p>Shoot us an email with your request, and we will contact you within one business day.</p>
        </div>
        <form className="form-detail">
            <div className="row">
                <div className="col-md-12 form-left">
                    <input type="text" name="name" placeholder="Name" />
                    <input type="number" name="number" placeholder="Phone Number" />
                </div> 
                <div className="col-md-12 form-left">
                    <input type="email" name="name" placeholder="Email" />
                    <input type="text" name="name" placeholder="Company" />
                </div>
                <div className=" col-md-12 form-right">
                    <textarea placeholder="Message"></textarea>
                </div>
            </div>
            <div className="button">
                <button className='btn_contact'><a href="">Get a free consultation</a></button>
            </div>
        </form>
</div>
<div className='contntsec'>
    <div>
    <img src="../images/contacts-icon-1.svg"  className='img_1'/>
    <h4>Free consultation</h4>
    <p>Contact us, and we will get back to you with expert consultation — absolutely free.</p>
    </div>

    <div>
    <img src="../images/contacts-icon-2.svg"  className='img_1'/>
    <h4>Privacy guaranteed</h4>
    <p>We won’t share the data you sent to us with anyone without your explicit consent.</p>
    </div>

    <div>
    <img src="../images/contacts-icon-3.svg"  className='img_1'/>
    <h4>Fast response</h4>
    <p>Our reps will contact you within one business day to discuss your request in detail.</p>
    </div>
    
</div>
</div>
       </Container>
       <Footer/>
       </section>
        </>
        )
    }
    
    export default Contact_page