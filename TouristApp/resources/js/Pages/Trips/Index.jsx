import CityCard from '@/Components/CityCard';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Head, usePage } from '@inertiajs/react';
import { Button, Col, Row, Table, Tag } from 'antd';

export default function TripIndex({auth}) {
    // Retrieve the trips from the props
    const {trips, mostVisited} = usePage().props;
    console.log(mostVisited);
    // Add a unique key property with the value of id
    for (let index = 0; index < trips.length; index++) {
        trips[index]['key'] = trips[index]['id'];
    }
    /** Function to format the trips dates to YYYY-MM-DD format
     * 
     * @param {*} date 
     * @returns 
     */
    function formatDate(inputDate) {
        const date = new Date(inputDate);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
    
        return `${year}-${month}-${day}`;
      }
    /**
     * Trips Table Columns
     */
    const columns = [
        {
            title: '#Id',
            dataIndex: 'id',
            key: 'id',
            render: (id) => <Tag>{id}</Tag>
        },
        {
            title: 'Date Start',
            dataIndex: 'date_start',
            key: 'date_start',
            render: (date_start) => <Tag color='green'>{formatDate(date_start)}</Tag>
        },
        {
            title: 'Date End',
            dataIndex: 'date_end',
            key: 'date_end',
            render: (date_end) => <Tag color='volcano'>{formatDate(date_end)}</Tag>
        },
        {
            title: 'Blog',
            dataIndex: 'blog',
            key: 'blog',
            render: (blog) => {
                return (
                    blog === null ? 
                    <Button type='button' className='poster-blog-btn flex items-center'>
                        <PlusCircleOutlined/>
                        Poster Blog
                    </Button>
                    : 
                    <span>This trips is already associated to a Blog</span>
                )
            }
        }
    ]

    return (
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight flex items-center">
            <img src='/images/suitcase_light.png'/>
            Trips
            </h2>
            }
    >
        <Head title="Dashboard" />
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <Table columns={columns} dataSource={trips}/>
                </div>
            </div>
        </div>
        <div className='pb-12'>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <Row className='py-5'>
                        <Col span={24} className='flex justify-center trips-index-title'>
                           Most visited destinations
                        </Col>
                    </Row>
                    <Row className='flex justify-around'>
                        {Object.entries(mostVisited).map((city) => {
                            console.log(city);
                            return ( 
                                <Col lg={6} md={6} sm={10} xs={24}>
                                  <CityCard name={city[0]} image={city[0]} appearences={city[1]}/>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
    )
}