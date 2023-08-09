import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { useGetTodos, getTodos } from "../../apis/index";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
// import required modules
import { Mousewheel, Pagination, Keyboard, Navigation, Autoplay } from "swiper";
import { Container } from "react-bootstrap";
function Testimonial() {
  return (
    <>
      <section className="Testimonials_sec">
        <Container>
          <div className="testimonails_wrap">
            <div className="textimonials-left">
              <h1>What Our Happy Customer Says</h1>
              <p>Our Clients send us bunch of smiles with our services and we love them.</p>
              <a href="#">See All</a>
            </div>
            <div className="right_testimonial">
            <div className="tesimonial-wrapper">
            <div>
              <div className="img_testi">
                <img src="../images/Luis.png"></img>
                <div>
                <h3>Luis Adam</h3>
                <h4>CEO of JamesTech</h4>
                </div>
              </div>
              <p>
                Pankaj sir is a very polite and professional person. They are
                one of the oldest web development company in Chandhigarh. They
                know their work well. You can expect the best results from them.
                One of the best web design company in Chandigarh.
              </p>
              </div>
            </div>
            <div className="tesimonial-wrapper">
            <div>
              <div className="img_testi">
                <img src="../images/Sam.png"></img>
                <div>
                <h3>Sam</h3>
                <h4>CEO of JamesTech</h4>
                </div>
              </div>
              <p>
                Pankaj sir is a very polite and professional person. They are
                one of the oldest web development company in Chandhigarh. They
                know their work well. You can expect the best results from them.
                One of the best web design company in Chandigarh.
              </p>
              </div>
            </div>
            <div className="tesimonial-wrapper">
            <div>
              <div className="img_testi">
                <img src="../images/Semi.png"></img>
                <div>
                <h3>Semi Winter</h3>
                <h4>CEO of JamesTech</h4>
                </div>
              </div>
              <p>
                Pankaj sir is a very polite and professional person. They are
                one of the oldest web development company in Chandhigarh. They
                know their work well. You can expect the best results from them.
                One of the best web design company in Chandigarh.
              </p>
              </div>
            </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Testimonial;
