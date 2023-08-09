import React, { useEffect } from 'react'
// import Container from 'react-bootstrap/Container';

import Projects from './Projects';
import Innovation from './innovation';
import Experiance from './experiance';
import Achivements from './achivements';
import Services from './services';
import Contact from './Contact';
import Footer from './Footer';
// import Testimonial from './Testimonial';

function SectionOne() {
    useEffect(() => {
        document.title = 'Cybersify Cloud Computing';
    }, []);

    return (
        <div>
            <Innovation />
            <Experiance />
            <Achivements />
            <Services />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default SectionOne