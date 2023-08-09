import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./header";
import { useGetTodos, getTodos } from "../apis/index";
function Banner() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function apis() {
      const res = await getTodos("/banners");
      setData(res.data);
      console.log(res.data);
    }
    apis();
    //console.log(Promise.all([getTodos('/banners')]))
  }, []);
  console.log(data);
  return (
    <div>
      <div className="header">
        <div id="parent-circle">
          <div className="circle blue"></div>
        </div>
        <div className="triangle"> </div>
        <div className="spinner"></div>
        <div className="triangle_bottom"></div>
        <div className="triangle left"> </div>

        <Container>
          <Header />
          <div className="hero">
            {data.length &&
              data.map((ele) => {
                const image = ele.attributes.BannerImages.data.attributes.url;
                return (
                  <div className="row">
                    <div className="col-md-6 col-sm-12 hero_left">
                      <h1>
                        Transform Your Online Presence with Expert{" "}
                        <span>Design</span> and <span>Development</span>
                        {/* {ele.attributes.titile} */}
                      </h1>
                      <p>{ele.attributes.description}</p>

                      <button className="hero_btn" type="button">
                        <a href="/Contact_page">Get A free Quote</a>
                      </button>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <img
                        src={`${process.env.REACT_APP_API}` + image}
                        alt="banner"
                        width="100%"
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Banner;
