import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Services from './services'
import Header from '../header';
import Innovation from './innovation';
import Footer from './Footer';
import Portfolio from './Portfolio';
import { Link } from 'react-router-dom';
import Headejquery from './header-1'    

function Aboutpage() {
    useEffect(() => {
        document.title = 'Page Not Found | Cybersify Cloud Computing';
    }, []);

    return (
        <>
            <section className='header aboutsec-wrapper'>
                <Container>
                    <Header />
                    <div className='aboutsec'>
                        <div className='col-lg-8 col-md-12 abouec-left mt-5'>
                            <h1>Page Not Found</h1>
                            <h4>Something's <span>Wrong</span> here... </h4>
                            <p>We can't find the page you're looking for. 
                                <br></br>
                             </p>
                             <button type="btn" class="aboutsecbtn"><Link to="/">Back to Home</Link></button>
                        </div>
                        <div className='about-img col-lg-4 pl-0 ml-0'><img src="../images/removebg-preview.png" /></div>
                    </div>
                    
                </Container>
            </section>

            

            <div className='whattodo'>
                <Footer />
                 </div>

        </>
    )
}

export default Aboutpage