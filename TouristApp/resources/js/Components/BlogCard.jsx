import { Col, Row, Avatar } from "antd";

export default function BlogCard({auth, blog}) { 

    /**
     * Function to format the date 
     */
        function formatDate(inputDate) {
            const date = new Date(inputDate);
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');
        
            return `${year}-${month}-${day}`;
    }
    return (
        <Row className="p-2 flex justify-center">
            <Col className="py-4 bg-white shadow-sm" md={24} lg={18} sm={24} xs={24}>
            <Row className="p-4 items-center">
                <Col md={5} lg={3} sm={5} xs={7}>
                    <Avatar size={50} src={<img src="/images/user1.avif"/>}/>
                </Col>
                <Col className="blog-username" md={8} lg={13} sm={8} xs={6}>
                    {blog.trip.user.name}
                </Col>
                <Col lg={8} md={12} sm={10} xs={10} className="post-date justify-end flex px-5">
                    Posted : {formatDate(blog.created_at)}
                </Col>
            </Row>
            <Row className="flex justify-center">
                <Col md={24} lg={24} sm={24} xs={24}>
                    <img src={`/images/${blog.image}`}/>
                </Col>
            </Row>
            <Row>
                <Col span={24} className="blog-description p-5">
                    {blog.description}
                </Col>
            </Row>
            <Row className="flex justify-around">
                {blog.trip.itinenaries.map((elem) => (
                    <Col className="p-5 flex items-center" md={6} lg={6} sm={8} xs={8}>
                        <img className="px-3" src="/images/Pin_alt_light.png"/>
                        <span className="itinerary-cityname-blog">{elem.cityname}</span>
                    </Col>
                     ))}
            </Row>
            </Col>
        </Row>
    )
}