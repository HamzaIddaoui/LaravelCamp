import { Head, usePage } from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Avatar, Col, Row } from "antd";
import Comment from "@/Components/Comment";
export default function BlogShow({auth}) { 
    const {blog} = usePage().props;
    //console.log(blog);
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
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight flex items-center">
            <img src='/images/Book.png'/>
            Blog
            </h2>
            }
        >
            <Head title="Blog" />
            <Row className="p-2 flex justify-around">
                <Col className="py-4 bg-white shadow-sm" md={24} lg={16} sm={24} xs={24}>
                   <Row className="p-4 items-center">
                       <Col md={5} lg={3} sm={5} xs={7}>
                          <Avatar size={50} src={<img src="/images/user1.avif"/>}/>
                       </Col>
                       <Col className="blog-username" md={8} lg={13} sm={8} xs={6}>
                          {auth.user.name}
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
                <Col md={24} lg={7} sm={24} xs={24} className="py-11 bg-white shadow-sm">
                    <span className="flex justify-center comments-title">Comments</span>
                    <Comment/>
                </Col>
            </Row>

        </AuthenticatedLayout>
    )
}