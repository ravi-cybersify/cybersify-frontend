import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Services from './services'
import Header from '../header';
import Innovation from './innovation';
import Footer from './Footer';
import Portfolio from './Portfolio';
import { Link } from 'react-router-dom';

function Servicespage() {
    useEffect(() => {
        document.title = 'Services Us | Cybersify Cloud Computing';
    }, []);

    return (

       
      <>
      {/* <section className='headerser'>
       <Container>
       <Header />
       </Container>
       </section> */}

      <section className='services-pagesec '>
       <Container>
       <Header />
       <div className='service_banner row'>
        <div className='col-md-6 col-sm-12'>
        <h1>We are the creative Cybersify Agency</h1>
        <h4>We Are professional in all kind of fields related websites.</h4>
        <p>Website Analytics and Reporting Measuring and Improving Your Site's Performance. Creating User-Friendly and Engaging Online Experiences.</p>
            <button type='btn' className='servicebtn'><Link to="/Contact_page">Contact Now</Link></button>
        </div>
        <div className='col-md-6 col-sm-12 serviceimg'>
        <img src="../images/sevices.png" alt="" /> 
        </div>
        
       </div>
</Container>
</section>

{/* <section className='Features'>
    <Container>
        <div>
            <span>Trusted by top industry players</span>
            <h1>Featured clients</h1>
            <p>We work with recognized industry experts that use proven industry practices to deliver
best-in-class DLT and business automation solutions.</p>
<div className='clientimg'>
<img src="../images/f_clients_1.svg" alt="svg" /> 
<img src="../images/f_clients_2.svg" alt="svg" />
<img src="../images/f_clients_3.svg" alt="svg" /> 
<img src="../images/f_clients_4.svg" alt="svg" /> 
<img src="../images/f_clients_5.svg" alt="svg" />

</div>
        </div>
    </Container>
</section> */}

<section className='services_page'>
    <Container>
    <div className="service_sec">
            <h3>Our Services</h3>
                 <h1>We Offer the Best Services.</h1>
                    </div>
                    <div className='service_wrapper'>
                        <div className=' services_col'>
                        <h4>Custom blockchain development</h4>
                <div className="tile-desc">
                     <p>Content related to blockchain basics could cover topics such as what a blockchain is, how it works, and the benefits of using blockchain technology.</p>
                <img src='../images/services_img.svg' alt="svg" />
             </div>
                </div>
                <div className=' services_col'>
                        <h4>NFT development </h4>
                <div className="tile-desc">
                     <p>NFT marketplaces are platforms that allow creators to mint, list, and sell their NFTs. Content related to NFT marketplaces could cover topics such as popular NFT marketplaces, how to use NFT marketplaces, and the benefits of using NFT marketplaces.</p>
                <img src='../images/nft-network-1.png' alt="svg" />
             </div>
                </div>
                <div className=' services_col'>
                        <h4>Smart contracts</h4>
                <div className="tile-desc">
                     <p> Content related to smart contract basics could cover topics such as what smart contracts are, how they work, and the benefits of using smart contracts.</p>
                <img src='../images/smart-contracts-1.png'  alt="svg" />
             </div>
                </div>
                <div className=' services_col'>
                        <h4>DeFi solutions </h4>
                <div className="tile-desc">
                     <p>Stablecoins are digital assets that are pegged to a stable asset, such as a fiat currency or a commodity. Content related to stablecoins could cover topics such as the benefits of stablecoins, popular stablecoins, and the role of stablecoins in DeFi.</p>
                <img src='../images/DeFi-solutions-1.png' alt="svg" />
             </div>
                </div>
                <div className=' services_col'>
                        <h4>Digital assets trading</h4>
                <div className="tile-desc">
                     <p>Technical analysis is a method of analyzing market data, such as price and volume, to identify patterns and trends that can inform trading decisions. Content related to technical analysis could cover topics such as chart patterns, technical indicators, and trading strategies.</p>
                <img src='../images/Digital-assets.png' alt="svg" />
             </div>
                </div>
                <div className=' services_col'>
                        <h4>Crypto & fiat integration</h4>
                <div className="tile-desc">
                     <p>Cryptocurrencies are the most well-known type of digital asset, and trading them has become a popular way to invest and speculate. Content related to cryptocurrency trading could cover topics such as buying and selling cryptocurrencies, trading strategies, and market analysis.</p>
                <img src='../images/Crypto-1.png' alt="svg" />
             </div>
                </div>
               </div>
    </Container>
</section>

        <section>
            <Container>
                <div className='why_choose'>
                    <span>Our Expertise for your business</span>
                    <h1>Why choose us for successful digital transformation</h1>
                    <div className='why_choosesec'>
                        <div className='choose_wrapper'>
                            <div className='chooseimg'>
                                <img src="../images/why_chooseimg.png" alt="svg" /> 
                            </div>
                        <h2>Technology experts</h2>
                        <p>Technology experts can provide insights into new and emerging technologies, such as artificial intelligence, blockchain, and virtual reality. They can explain how these technologies work and how they can be used in various industries.</p>
                        </div>
                        
                        <div className='choose_wrapper'>
                        <div className='chooseimg'>
                        <img src="../images/why_chooseimg_1.png" alt="svg" />  
                        </div>
                        <h2>Fully-fledged tech team</h2>
                        <p>A fully-fledged tech team can cover topics related to software development, including coding languages, development methodologies, and best practices for building and deploying software. They can provide insights into how to create scalable, secure, and user-friendly software.</p>
                        </div>
                        <div className='choose_wrapper'>
                        <div className='chooseimg'>
                        <img src="../images/why_chooseimg_2.png" alt="svg" /> 
                        </div>
                        <h2>Understanding your business</h2>
                        <p>Understanding your customers is essential to creating marketing campaigns that resonate with them. Content related to customer profiling could cover topics such as identifying customer personas, understanding customer behavior, and conducting market research.</p>
                        </div>
                   
                    </div>
                </div>
            </Container>
        </section>
        <div className='service_footer'>
        <Footer />
        </div>
        
        {/* <Portfolio /> */}
       
      </>
    )
}

export default Servicespage