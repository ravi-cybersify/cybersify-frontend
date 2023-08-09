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
        document.title = 'About Us | Cybersify Cloud Computing';
    }, []);

    return (
        <>
            <section className='header aboutsec-wrapper'>
                <Container>
                    <Header />
                    <div className='aboutsec'>
                        <div className='col-lg-6 col-md-12 aboutsec-left'>
                            <h1>ABOUT US</h1>
                            <h4>We help your <span>Vision</span> become a Reality ! </h4>
                            <p>Cybersify Cloud Computing accelerates business productivity, improves data security,
                                and reduces dependence on third parties through blockchain technology.
                                <br></br>
                                <br></br>
                                Our FTE staff has proven experience in custom blockchain development and technology consulting,
                                building and delivering next-gen apps to global industries in multiple verticals.</p>
                            <button type="btn" class="aboutsecbtn"><Link to="/Contact_page">Contact Now</Link></button>
                        </div>
                        <div className='about-img'><img src="../images/about-bnner.png" /></div>
                    </div>
                </Container>
            </section>

            <section className='whosecabout'>
                <Container>
                    <div className='abour_whosec'>
                        <h3>WHO WE ARE</h3>
                        <h2>Our Team Of Creative Minds Are Hard At Work, Serving Clients Around The World With The Best Possible IT Services:</h2>
                    </div>
                    <div className='row abour_whosecwrap'>
                        <div className='col-md-5 col-sm-12'>
                            <img src="../images/aboutwho.png" alt="svg" />
                        </div>
                        <div className='col-md-7 col-sm-12'>
                            <p>Cybersify Cloud Computing offers a comprehensive suite of interactive services, focusing on a combination of ground-up innovation and proven best business practices.
                                <br></br>
                                <br></br>

                                Your content should provide value to your readers. Whether you're educating them about a topic or providing helpful tips, make sure your content is informative and relevant to their interests.  People have short attention spans, so it's important to get your message across quickly and clearly. Use short sentences and paragraphs, and break up your content with headings and subheadings.
                                <br></br>
                                <br></br>

                                Consistency is key when it comes to content. Make sure your tone and voice are consistent throughout your website, and update your content regularly to keep it fresh and relevant.
                                </p>
                            <button type="btn" class="aboutsecbtn"><Link to="/Contact_page">Contact Now</Link></button>
                        </div>
                    </div>


                </Container>
            </section>

            <section className='wrapper-whatwe'>
                <Container>
                    <div className='abourwrpwho'>
                        <div className='abour_whowe'>
                            <h1>What we do</h1>
                            <p>This is the first step in the web design and development process. It involves understanding the client's needs, goals, and target audience. Based on this information, the web designer and developer will create a plan for the website, including the site structure, content, and functionality.<br></br></p>
                            <div className='abour_whowe-wrap'>
                                <p>Over the years, we grew as a team and gained specialization in a number of niches. To name a few of our strong suits:</p>
                                <ul>
                                    <li><a href="#"><span></span>Website Design</a> and <a href="#">Development</a></li>
                                    <li><a href="#"><span></span>Mobile App Development</a></li>
                                    <li><a href="#"><span></span>Software Development</a></li>
                                    <li><a href="#"><span></span>Graphic Designing</a></li>
                                    <li><a href="#"><span></span>Digital Marketing</a></li>
                                </ul>
                            </div>
                            <button type="btn" class="aboutsecbtn"><Link to="/Contact_page">Get A Quote</Link></button>
                        </div>
                        <div className='aboutsecbtnimg'><img src="../images/aboutwrpimg.png" /></div>
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