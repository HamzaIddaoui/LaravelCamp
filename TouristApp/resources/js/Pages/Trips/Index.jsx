import CityCard from '@/Components/CityCard';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PlusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Head, useForm, usePage } from '@inertiajs/react';
import { Button, Col, Modal, Row, Table, Tag, Upload } from 'antd';
import { useState } from 'react';

export default function TripIndex({auth}) {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [tripidModel, settripidModel] = useState(null);
    // Post Blog form data
    const {data, setData, post,processing, errors, reset} = useForm({
        description: '',
        image: '',
        trip_id: ''
    });
    // Retrieve the trips from the props
    const {trips, mostVisited} = usePage().props;
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
            render: (blog, record) => {
                return (
                    blog === null ? 
                    <Button type='button' onClick={() => showModal(record.id)} className='poster-blog-btn flex items-center'>
                        <PlusCircleOutlined/>
                        Post Blog 
                    </Button>
                    : 
                    <span>This trips is already associated to a Blog</span>
                )
            }
        }
    ]

    /**
     * Show Modal
     */
    const showModal = (id) => {
        //settripidModel(id);
        setData('trip_id', id);
        setOpen(true);
    };
    /**
     * Post Blog Modal ok
     */
    const handleOk = () => {
        // setConfirmLoading(true);
        // setTimeout(() => {
        //   setOpen(false);
        //   setConfirmLoading(false);
        // }, 2000);
        console.log(data);
        post(route('blogs.store',data));
        setOpen(false);
    };

    /**
     * Post Blog Model Cancel
     */
    const handleCancel = () => {
        setOpen(false);
    };

    /**
     * Upload input normFile
     * @param {*} e 
     * @returns 
     */
    const normFile = (e) => {
        if (Array.isArray(e)) {
          return e;
        }
        return e?.fileList;
    };

    const beforeUpload = (file, fileList) => {
        // Allow only one file to be uploaded
        return fileList.length === 0;
    };

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
        <Modal 
        title="Post Blog"
        open={open} 
        onOk={handleOk} 
        confirmLoading={confirmLoading} 
        onCancel={handleCancel}
        footer= {[
            <Button type='primary' onClick={handleCancel} className='remove-itinerary-btn'>
                Cancel
            </Button>,
            <Button type='primary' onClick={handleOk} className='save-trip-btn'>
                Post
            </Button>
        ]}
        >
            <form className='m-5' enctype="multipart/form-data">
                <Row className='m-5 flex items-center'>
                    <Col md={8} lg={8} sm={12} xs={12} className='form-label'>
                        Description 
                    </Col>
                    <Col md={10} lg={12} sm={12} xs={12}>
                    <TextInput 
                    type="text" 
                    id="description" 
                    name="description" 
                    isFocused={true}
                    value = {data.description} 
                    onChange = { (e) => setData('description', e.target.value)}
                    />
                    </Col> 
                </Row>
                <Row className='m-5 flex items-center'>
                    <Col md={8} lg={8} sm={12} xs={12} className='form-label'>
                        Image
                    </Col>
                    <Col md={10} lg={12} sm={12} xs={12}>
                        <Upload beforeUpload={beforeUpload} listType='picture-card' name='image' 
                        onChange={(e) => { 
                            setData('image',normFile(e)[0]?.originFileObj);
                        }}
                        > 
                           Upload
                           <PlusOutlined/>
                        </Upload>
                    </Col>
                </Row>
            </form>
            
        </Modal>
    </AuthenticatedLayout>
    )
}