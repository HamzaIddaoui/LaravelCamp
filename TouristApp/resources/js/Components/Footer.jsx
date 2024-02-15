import { Button, Col, Divider, Row, Image } from "antd";

export default function Footer(){
    return (
        <div className="footer">
            <Row className="footer-row-1">
                <Col className="mt-5" lg={12} md={12} xs={24} sm={24}>
                <span className="footer-title-1 flex justify-center">Prepare yourself to be part of exporation of</span>
                <br></br>
                <span className="mt-5 footer-title-2 flex justify-center">The Beauty of Indonesia</span>
                </Col>
                <Col className="mt-5 btn-col" lg={12} md={12} xs={24} sm={24}>
                    <Button type="button" className="footer-btn1">Sign In</Button>
                    <br></br>
                    <Button type="button" className="mt-5 footer-btn2" >Sign Up</Button>
                </Col>
            </Row>
            <Row className="m-5 footer-row-2">
                <Col span={18} className="footer-row-2-title">
                    Traveling!
                </Col>
                <Col span={4} className="footer-row-2-title1">
                    Get the app on
                </Col>
            </Row>
            <Row className="m-5 footer-row-2 flex items-center">
                <Col lg={6} md={6} sm={24} xs={24} className="footer-row-2-title1">
                    Home
                </Col>
                <Col lg={6} md={6} sm={24} xs={24} className="footer-row-2-title1">
                    AboutUs
                </Col>
                <Col lg={6} md={6} sm={24} xs={24} className="footer-row-2-title1">
                    ContactUs
                </Col>
                <Col span={2} className="m-5">
                        <Button className="home-btn flex items-center" type="button">
                            <Row>
                                <Col span={6} className="mt-2">
                                <Image src="/images/googlePlayLogo.png" width={20}/>
                                </Col>
                                <Col span={12}> 
                                <Row>
                                <Col span={24} className="home-btn-text-1">
                                    GET IT ON
                                </Col>
                                </Row>
                                <Row>
                                <Col span={24} className="home-btn-text-2">
                                    Google Play
                                </Col>
                                </Row>
                                </Col>
                            </Row>
                        </Button>
                </Col>
                <Col span={2} className="m-5">
                        <Button className="home-btn flex items-center" type="button">
                            <Row>
                                <Col span={6} className="mt-2">
                                <Image src="/images/appstore.png" width={20}/>
                                </Col>
                                <Col span={12}> 
                                <Row>
                                <Col span={24} className="home-btn-text-1">
                                    Download on the
                                </Col>
                                </Row>
                                <Row>
                                <Col span={24} className="home-btn-text-2">
                                    App Store
                                </Col>
                                </Row>
                                </Col>
                            </Row>
                        </Button>
                </Col>
            </Row>
        </div>
    )
}