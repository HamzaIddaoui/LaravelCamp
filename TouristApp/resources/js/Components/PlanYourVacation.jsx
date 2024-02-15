import { Col, Row } from "antd";

export default function PlanYourVacation() {
    return (
        <div className="container">
            <Row>
                <Col span={24} className="planyourvacation-title flex justify-center">
                    Plan your Vacation!
                </Col>
            </Row>
            <Row className="mt-5">
                <Col span={24} className="planyourvacation-title1 flex justify-center">
                    For many people organizing a trip is a headache. Register to be able to jointly determine vacation destinations and dates
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <img src="/images/PlanYourVacation.png"/>
                </Col>
            </Row>
        </div>
    )
}