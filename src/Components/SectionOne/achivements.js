import React, { useEffect, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useGetTodos, getTodos } from "../../apis"


function Achivements() {
    const [data, setData] = useState(null)
    useEffect(() => {
        async function apis() {
            const res = await getTodos('/achivements')
            setData(res.data[0].attributes)

        }
        apis()
    }, [])
    //console.log(data.Satisfaction, 'achfhfhfhfhfh')
    return (
        <div> <section className="count">
            <span className="shape1"></span>
            <span className="shape2"></span>

            <Container>
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="count_detail border-Left">
                            <span>
                                {data && data.Satisfaction}%
                            </span>
                            <p>
                                Client Satisfaction
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="count_detail border-Left">
                            <span>
                                {data && data.Projects}+
                            </span>
                            <p>
                                Complete Projects
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="count_detail border-Left">
                            <span>
                                {data && data.Delivered}+
                            </span>
                            <p>
                                Project Delivered
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="count_detail ">
                            <span>
                                {data && data.Experienced}+
                            </span>
                            <p>
                                Years Experienced
                            </p>
                        </div>
                    </div>
                </div>
            </Container>

        </section></div>
    )
}

export default Achivements