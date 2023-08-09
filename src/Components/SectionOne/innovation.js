import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetTodos, getTodos } from "../../apis/index";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Mousewheel, Pagination, Keyboard, Navigation } from "swiper";
function Innovation() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function apis() {
      const res = await getTodos("/technologies");
      setData(res.data[0].attributes);
      console.log(res.data[0].attributes);
    }
    apis();
    //console.log(Promise.all([getTodos('/banners')]))
  }, []);

  console.log(data && data.Technologies.data);
  return (
    <div>
      {data && (
        <section className="innovation">
          <Container className="container-fluid">
            <div className="heading">
              <h2>{data.heading}</h2>
              <h3>{data.heading2}</h3>
            </div>

            <div className="coustom-slider">
              <Swiper
                direction={"horizontal"}
                slidesPerView={"auto"}
                // slidesPerView={4}
                loop={true}
                spaceBetween={30}
                mousewheel={true}
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
                  991: {
                    width: 991,
                    slidesPerView: 3,
                  },
                  1200: {
                    width: 1200,
                    slidesPerView: 4,
                  },
                }}
                modules={[Pagination, Mousewheel]}
                className="mySwiper"
              >
                {data.Technologies.data.map((img) => {
                  return (
                    <SwiperSlide>
                      <div>
                        <img
                          src={
                            `${process.env.REACT_APP_API}` + img.attributes.url
                          }
                        />
                        <div>{img.attributes.name}</div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </Container>
        </section>
      )}
    </div>
  );
}

export default Innovation;
