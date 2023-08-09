import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useGetTodos, getTodos } from "../apis/index";
function BestSolution() {
  const trendingLeft = [
    { name: "Ecommerce", url: "/images/Ecommerce-1.png" },
    { name: "Health", url: "/images/Health-1.png" },
    { name: "Fashion", url: "/images/Fashion-1.png" },
  ];
  const trendingRight = [
    { name: "Finance", url: "/images/Finance-1.png" },
    { name: "Real Estate", url: "/images/real_estate-1.png" },
    { name: "Education", url: "/images/EDUCATION-1.png" },
  ];
  const [data, setData] = useState(null);
  useEffect(() => {
    async function apis() {
      const res = await getTodos("/trendings");
      setData(res.data[0].attributes);
      console.log(data.techImages.data);
    }
    apis();
  }, []);
  return (
    <div>
      {data && (
        <>
          <section className="trending desktop_v">
            <Container>
              <div className="heading">
                <h2>{data.heading}</h2>
                <h3>
                  Trending Industries <br /> we work with
                </h3>
              </div>
              <Row className="solution">
                <Col md={4} className="mobile_hide">
                  <div className="trending-left">
                    {trendingLeft.map((data) => {
                      return (
                        <div className="single-solution">
                          <div className="circles">
                            <img src="" alt="img" />
                            <div className="circle"></div>
                            <div className="circle circle2"></div>
                            <div className="circle circle3"></div>
                            <div className="circle circle4">
                              <img src={data.url} alt="img" />
                            </div>
                          </div>
                          <h4>{data.name}</h4>
                        </div>
                      );
                    })}
                  </div>
                </Col>
                <Col md={4}>
                  <div className="icons_img">
                    {data &&
                      data.techImages.data.length &&
                      data.techImages.data.map((data, i) => {
                        const image = data.attributes.url;
                        console.log(data, image);
                        return (
                          <img
                            src={`${process.env.REACT_APP_API}` + image}
                            className={"comp" + (i + 1)}
                          />
                        );
                      })}
                    {/* <img src="/images/icons.png" className="comp1" />
                                <img src="/images/icons2.svg" className="comp2" />
                                <img src="/images/icons3.png" className="comp3" />
                                <img src="/images/icons4.svg" className="comp4" /> */}
                  </div>
                  <div className="cms">
                    <img src="/images/cms.png" />
                    <div className="csm_1">
                      <img src="/images/animatestroke3.svg" />
                    </div>
                    <div className="webname">
                      <div className="web-txt">
                        <img src="/images/cyber.png" />
                      </div>
                    </div>

                    <div className="cmsimg">
                      <img src="/images/animatestroke3.svg" />
                      <div className="final_sec">
                        <div className="wrappersec">
                          <img src="/images/wrapper_1.png" />
                          <h4>E-commerce</h4>
                        </div>
                        <div className="wrappersec">
                          <img src="/images/wrapper_2.png" />
                          <h4>Mobile Apps</h4>
                        </div>
                        <div className="wrappersec">
                          <img src="/images/wrapper_3.png" />
                          <h4>Smart Contracts</h4>
                        </div>
                        <div className="wrappersec">
                        <img src="/images/wrapper_1.png" />
                          <h4>NFTs</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={4} className="mobile_hide">
                  <div className="trending-right">
                    {trendingRight.map((data) => {
                      return (
                        <div className="single-solution">
                          <div className="circles">
                            <img src="" alt="img" />
                            <div className="circle"></div>
                            <div className="circle circle2"></div>
                            <div className="circle circle3"></div>
                            <div className="circle circle4">
                              <img src={data.url} alt="img" />
                            </div>
                          </div>
                          <h4>{data.name}</h4>
                        </div>
                      );
                    })}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="trending mobile_section">
            <Container>
              <div className="heading">
                <h2>{data.heading}</h2>
                <h3>
                  Industry-focused <br /> we work with
                </h3>
              </div>
              <Row className="solution">
                <Col md={12}>
                  <div className="trending-left">
                    {trendingLeft.map((data) => {
                      return (
                        <div className="single-solution">
                          <div className="circles">
                            <div className="circle"></div>
                            <div className="circle circle2"></div>
                            <div className="circle circle3"></div>
                            <div className="circle circle4">
                              <img src={data.url} alt="img" />
                            </div>
                          </div>
                          <h4>{data.name}</h4>
                        </div>
                      );
                    })}

                    {trendingRight.map((data) => {
                      return (
                        <div className="single-solution">
                          <div className="circles">
                            <div className="circle"></div>
                            <div className="circle circle2"></div>
                            <div className="circle circle3"></div>
                            <div className="circle circle4">
                              <img src={data.url} alt="img" />
                            </div>
                          </div>
                          <h4>{data.name}</h4>
                        </div>
                      );
                    })}
                  </div>
                  {/* <div className="trending-left"> */}

                  {/* </div> */}
                </Col>
              </Row>
            </Container>
          </section>
        </>
      )}
    </div>
  );
}

export default BestSolution;
