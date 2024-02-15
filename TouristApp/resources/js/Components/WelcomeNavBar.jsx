import { Button, Col, Menu, Row } from "antd";
import ApplicationLogo from "./ApplicationLogo";


export default function WelcomeNavBar({auth}){
    return (
        <Menu className="mt-5">
            <Row className="m-5">
                <Col span={8} sm={24} md={8} xs={24}>
                    <Menu.Item>
                    <ApplicationLogo/>
                    </Menu.Item>
                </Col>
                <Col span={8} sm={24} md={8} xs={24}>
                    <Row>
                        <Col span={6}>
                            <Menu.Item className="navbarLink">
                                Home
                            </Menu.Item>
                        </Col>
                        <Col span={6}>
                            <Menu.Item className="navbarLink">
                                AboutUs
                            </Menu.Item>
                        </Col>
                        <Col span={6}>
                            <Menu.Item className="navbarLink">
                                ContactUs
                            </Menu.Item>
                        </Col>
                    </Row>
                </Col>
                <Col md={8} sm={24} xs={24} className="flex items-center justify-end">
                {auth.user ?
                (<Button type="button" className="signUp">Log Out</Button>) 
                : (<Button type="button" className="signUp">Sign Up</Button>)
                }
                </Col>
            </Row>
        </Menu>
    )
}