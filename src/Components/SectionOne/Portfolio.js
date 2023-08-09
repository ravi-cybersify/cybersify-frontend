import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
// import Services from './services'
import Header from '../header';
// import Innovation from './innovation';
import Footer from './Footer';
import Contact from './Contact';
import Portfolio_tabs from './Portfolio_tabs';
// import Contact_page from './Contact_page';
// import Aboutpage from './Aboutpage';
import { Link } from 'react-router-dom';


function Portfolio() {
    useEffect(() => {
        document.title = 'Portfolio Us | Cybersify Cloud Computing';
    }, []);
    return (
<>

<section className='portfolio'>

       <Container>
       <Header />
       <div className='portfolio_port row'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
        <h1>Our portfolio</h1>
        <h4>Cybersify Cloud Computing puts the power of blockchain and business automation in your hands</h4>
        <p>Cybersify Cloud Computing creates custom blockchain and business automation solutions for companies operating in supply chain, logistics, healthcare, and other verticals. Our team of highly-experienced 
            professionals has a proven track record of matching business needs with DLT and process automation tools.</p>
            <button type='btn' className='servicebtn'><Link to="/Contact_page">Contact Now</Link></button>
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12 serviceimg'>
        <img src="../images/portfolio_p.png" alt="svg" /> 
        </div>
        
       </div>
 

</Container>

</section>
<section className='tabs_portfolio'>
    <div className='tabbs-tabb'></div>
    <Container>
    <h4>Hands-on blockchain experience</h4>
    <h1>Our custom blockchain solutions</h1>
    <Portfolio_tabs />
    <div className='btn-tabb'>
    <button type='button' className='btn-tabs'><a href="#">View more</a></button>
    </div>

    </Container>

</section>
<Contact />
<Footer />
 </>
      )
  }
export default Portfolio