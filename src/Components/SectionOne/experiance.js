import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import { getTodos } from "../../apis/index"
import { NavLink } from "react-router-dom";
function Experiance() {
    const [data, setData] = useState(null)
    useEffect(() => {
        async function apis() {
            const res = await getTodos('/ourexpertises')
            setData(res.data[0].attributes)
            console.log(res.data[0].attributes)
        }
        apis()
        //console.log(Promise.all([getTodos('/banners')]))
    }, [])

    console.log(data)
    return (
        <div>
            {data &&
                <section className="choose_us">
                    <Container>
                        <div className="heading">
                            <h2>{data.heading}</h2>
                            <h3>{data.heading2}</h3>



                            <div className="row pt-72">

                                {data.blogs.data.length && data.blogs.data.map((ele, i) => {
                                    return <div className="col-sm-12 col-md-6">
                                        <div className="choose_us_card card">
                                            <h4>{ele.attributes.Title}</h4>
                                            <p>{ele.attributes.description}</p>
                                            <span><NavLink
                                                className="navbar-item"
                                                activeClassName="is-active"
                                                to="/services"
                                                exact
                                            >
                                                Read More
                                            </NavLink></span>
                                            {i === 1 ?
                                                <img src="/images/technology1.svg" />
                                                : <img src="/images/technology.svg" />
                                            }
                                        </div>
                                    </div>
                                })}
                                {/* 
                            <div className="col-sm-12 col-md-6">
                                <div className="choose_us_card">
                                    <h4>Fully-fledged tech team</h4>
                                    <p>As a full-cycle development company that’s been around for years, we have the skill set to build literally any blockchain or process automation app all the way from business analysis to launch.</p>
                                    <span>Read More</span>
                                    <img src="/images/technology.svg" />
                                </div>
                            </div> */}
                            </div>

                            <div className="button" type="button">
                                <button><a href="#">Get A free Quote</a></button>
                            </div>

                        </div>
                    </Container>
                </section>
            }
        </div>
    )
}

export default Experiance