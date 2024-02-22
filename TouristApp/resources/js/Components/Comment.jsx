import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Row } from "antd";

export default function Comment() {
    return (
        <Row className="p-5 flex items-center">
            <Col span={6}>
              <Avatar size={40} icon={<UserOutlined/>}/>
            </Col>
            <Col className="comment" span={18}>
                This just a test comment
            </Col>
        </Row>
    )
}