import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { useGetTodos, getTodos } from "../../apis/index";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
// import required modules
import { Mousewheel, Pagination, Keyboard, Navigation, Autoplay } from "swiper";
function Projects() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function apis() {
      const res = await getTodos("/projects");
      setData(res.data);
      console.log(res.data);
    }
    apis();
    //console.log(Promise.all([getTodos('/banners')]))
  }, []);

  console.log(data);

  return (
    <div>
      {data && (
        <section className="bgimg">
          <div className="container">
            <div className="slidershow">
              <div>
                <h1>Projects</h1>
              </div>
            </div>
            <div className="new-setupslider">
              <div class="slidetxt">
                <h5>Where Our projects Take us</h5>
                <p>
                  {" "}
                  Showcase a selection of your completed projects, including
                  screenshots, project descriptions, and any notable
                  achievements or outcomes.
                </p>
                <button type="button" class="showbtn">
                  <a href="/portfolio">
                    Our Portfolio <i class="fa-solid fa-arrow-up-long"></i>
                  </a>
                </button>
              </div>
              <Swiper
                spaceBetween={30}
                loop={true}
                slidesToScroll={1}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                keyboard={{
                  enabled: true,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation, Autoplay]}
                breakpoints={{
                  // when window width is >= 640px
                  320: {
                    width: 320,
                    slidesPerView: 1,
                  },
                  // when window width is >= 768px
                  768: {
                    width: 600,
                    slidesPerView: 2,
                  },
                  1200: {
                    width: 1024,
                    slidesPerView: 2.5,
                  },
                }}
                className="mySwiper"
              >
                {data.map((ele) => {
                  const img = ele.attributes.site.data.attributes.url;
                  return (
                    <SwiperSlide>
                      <div className="showslider">
                        <img src={`${process.env.REACT_APP_API}` + img} />
                        <h2>{ele.attributes.siteUrl}</h2>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Projects;
