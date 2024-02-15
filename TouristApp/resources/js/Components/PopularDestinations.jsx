import { Col, Row,Card } from "antd";

export default function PopularDestinations(){
    return (
        <div className="popular-destination container">
            <Row>
                <Col span={24} className="m-5 popular-destination-title">
                    Popular Destinations
                </Col>
            </Row>
            <Row>
                <Col span={24} className="m-5 popular-destination-subtitle">
                Vacations to make your experience enjoyable in Indonesia!
                </Col>
            </Row>
            <Row className="m-5" justify={"space-between"}>
                <Col lg={5} md={8} sm={12} xs={24}>
                    <Card
                     className="destination-card"
                     cover={
                        <img
                          src="/images/destination1.png"
                          width={264}
                        />
                     }
                    >
                        <Row className="flex items-center">
                            <Col span={2}><img src="/images/Location.png"/></Col>
                            <Col span={12} className="destination-card-title1">Manggarai Barat</Col>
                        </Row>
                        <span className="destination-card-title2">Flores Road Trip 3D2N</span>
                        <br></br>
                        <span className="destination-card-title3">3 Days</span>
                        <br></br>
                        <span className="destination-card-title4">Rp 6.705.000 /orang</span>
                    </Card>
                </Col>
                <Col lg={5} md={8} sm={12} xs={24}>
                    <Card
                     className="destination-card"
                     cover={
                        <img
                          src="/images/destination2.png"
                          width={264}
                        />
                     }
                    >
                        <Row className="flex items-center">
                            <Col span={2}><img src="/images/Location.png"/></Col>
                            <Col span={12} className="destination-card-title1">Bogor</Col>
                        </Row>
                        <span className="destination-card-title2">Forrester Glamping Co Bogor</span>
                        <br></br>
                        <span className="destination-card-title3">1 Days</span>
                        <br></br>
                        <span className="destination-card-title4">Rp 1.205.000 /malam</span>

                    </Card>
                </Col>
                <Col lg={5} md={8} sm={12} xs={24}>
                    <Card
                    className="destination-card"
                     cover={
                        <img
                          src="/images/destination3.png"
                          width={264}
                        />
                     }
                    >
                        <Row className="flex items-center">
                            <Col span={2}><img src="/images/Location.png"/></Col>
                            <Col span={12} className="destination-card-title1">Jakarta</Col>
                        </Row>
                        <span className="destination-card-title2">Paket Tiket Pesawat Jakarta Bali</span>
                        <br></br>
                        <span className="destination-card-title3">6 Days</span>
                        <br></br>
                        <span className="destination-card-title4">Rp 605.000 /person</span>

                    </Card>
                </Col>
                <Col lg={5} md={8} sm={12} xs={24}>
                    <Card
                    className="destination-card"
                     cover={
                        <img
                          src="/images/destination4.png"
                          width={264}
                        />
                     }
                    >
                        <Row className="flex items-center">
                            <Col span={2}><img src="/images/Location.png"/></Col>
                            <Col span={12} className="destination-card-title1">Kota Semarang</Col>
                        </Row>
                        <span className="destination-card-title2">Desa Wisata Kandri</span>
                        <br></br>
                        <span className="destination-card-title3">14 Days</span>
                        <br></br>
                        <span className="destination-card-title4">Rp 1.400.000 /person</span>

                    </Card>
                </Col>
            </Row>
        </div>
    )
}