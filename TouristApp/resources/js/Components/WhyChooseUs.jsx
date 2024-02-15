import { Col, Row } from "antd";

export default function WhyChooseUs() {
    return(
        <div className="m-5 container whychooseus">
            <Row>
                <Col lg={12} md={12} sm={24} xs={24}>
                    <img src="/images/imagehome3.png" width={600}/>
                </Col>
                <Col lg={12} md={12} sm={24} xs={24}>
                    <Row className="m-5">
                        <Col span={24} className="whychooseus-title1">
                        Why Choose Us
                        </Col>
                    </Row>
                    <Row className="m-5">
                        <Col span={24} className="whychooseus-title2">
                        Enjoy different experiences in every place you visit and discover new and affordable adventures of course.
                        </Col>
                    </Row>
                    <Row className="m-5 flex items-center flight-card">
                        <Col className="m-5" span={2}>
                            <img src="/images/flight2.png"/>
                        </Col>
                        <Col span={14}>
                         <span className="whychooseus-title3">Flight Ticket</span>
                         <br></br>
                         <span className="whychooseus-title4">Vitae donec pellentesque a aliquam et ultricies auctor. </span>
                        </Col>
                    </Row>
                    <Row className="m-5 flex items-center">
                        <Col className="m-5" span={2}>
                            <img src="/images/hotel.png"/>
                        </Col>
                        <Col span={14}>
                         <span className="whychooseus-title3">Accomodation</span>
                         <br></br>
                         <span className="whychooseus-title4">Vitae donec pellentesque a aliquam et ultricies auctor. </span>
                        </Col>
                    </Row>
                    <Row className="m-5 flex items-center">
                        <Col className="m-5" span={2}>
                            <img src="/images/Group.png"/>
                        </Col>
                        <Col span={14}>
                         <span className="whychooseus-title3">Packaged Tour</span>
                         <br></br>
                         <span className="whychooseus-title4">Vitae donec pellentesque a aliquam et ultricies auctor. </span>
                        </Col>
                    </Row>
                    <div className="m-5 ">
                    <span className="m-5 another-product flex items-center">
                     Another Product
                     <img src="/images/chevron-right.png"/>
                    </span>
                    </div>
                </Col>
            </Row>
        </div>
    )
}