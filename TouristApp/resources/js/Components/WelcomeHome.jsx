import { Button, Card, Col, Flex, Image, Row } from "antd";

export default function WelcomeHome() {
    const cardStyle = { 
        
    }
    return (
        <Row className="m-5">
            <Col md={14} sm={24} xs={24}>
                <Row className="home-text-1 m-5">
                Start your journey
                by one click, explore beautiful world!
                </Row>
                <Row className="home-text-2 m-5">
                Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us!
                </Row>
                <Row>
                    <Col span={6} className="m-5">
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

                    <Col span={6} className="m-5">
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
            </Col>
            <Col md={10} sm={24} xs={24} className="flex justify-end">
                <Flex vertical={true}>
                <Row className="flex justify-end">
                    <Col>
                      <Button style={{boxShadow: '0px 0px 11px 0px rgba(0,0,0,0.1)'}} type="button" disabled={true} className="home-flight-btn flex items-center">
                        <Image src="/images/flight.png" className="mt-1"/>
                        Jakarta - Bali
                      </Button>
                    </Col>
                </Row>
                <Image src="/images/homeimage1.png" width={400}/>
                <Row >
                    <Col span={12} className="card-home-1">
                        <Card
                            style={{
                                width: 220,
                                borderRadius:18,
                                boxShadow: '0px 17px 15px -3px rgba(0,0,0,0.1)'
                            }}
                            cover={
                                <img
                                  src="/images/imagehome1.png"
                                  width={200}
                                />
                            }
                            
                        >
                            <span className="image-home-text-1">Explore Labuan Bajo</span>
                            <span className="flex items-center image-home-text-2">
                                <img src="/images/Location.png"/>
                                NTT, Indonesia
                            </span>
                        </Card>
                    </Col>
                    <Col span={12} className="card-home-2">
                    <Card
                            style={{
                                width: 127,
                                borderRadius:18,
                                boxShadow: '0px 17px 15px -3px rgba(0,0,0,0.1)'
                            }}
                            cover={
                                <img
                                  src="/images/imagehome2.png"
                                  width={200}
                                />
                            }
                            
                        >
                            <span className="image-home-text-3">Le Pirate Hotel</span>
                            <span className="flex items-center image-home-text-4">
                                <img src="/images/Location.png"/>
                                Flores, Indonesia
                            </span>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={20} className="circle-color-1">
                    </Col>
                </Row>
                </Flex>
            </Col>
        </Row>
    )
}