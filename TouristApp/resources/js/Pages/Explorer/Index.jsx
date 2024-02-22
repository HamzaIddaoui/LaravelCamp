import BlogCard from '@/Components/BlogCard';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { SearchOutlined } from '@ant-design/icons';
import { Head, useForm, usePage } from '@inertiajs/react';
import { Button, Col, Row } from 'antd';
import { useState } from 'react';
export default function ExplorerIndex({auth}) { 
    const {blogs} = usePage().props;
    const [filtredBlogs, setfiltredBlogs] = useState(blogs);
    const[isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const uniqueUserNames = new Set();
    const handleInputChange = (e) => {
        if(e.target.value === '') {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
        setInputValue(e.target.value);
    };
    const filterBlogs = () => { 
        if(inputValue === ''){
            setfiltredBlogs(blogs);
        }
        else {
            setfiltredBlogs(blogs.filter(
                blog => blog.trip.user.name.toLowerCase() === inputValue.toLowerCase()
            ));
        }
    }
    return (
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight flex items-center">
            <img src='/images/Compass_light.png'/>
            Explorer
            </h2>
            }
        >
            <Head title="Explorer" />
            <form className='py-3'> 
            <Row className='flex items-center justify-center'>
                <Col className='flex justify-end' span={18}>
                   <TextInput
                   type="text"
                   id="username"
                   value={inputValue}
                   placeholder="Search by user name"
                   onChange ={handleInputChange}
                   className='search-input'
                   />
                </Col>
                <Col md={4} lg={4} sm={5} xs={5}>
                    <Button type='button' onClick={filterBlogs} className='justify-center items-center flex search-btn bg-white shadow'>
                        <SearchOutlined/>
                        Search
                    </Button>
                </Col>
            </Row>
            {
                isOpen && (
                    <Row className='py-5 flex justify-around'>
                        {blogs.map((blog) => {
                            if(blog.trip && blog.trip.user && blog.trip.user.name.toLowerCase().includes(inputValue.toLowerCase())){
                                const name = blog.trip.user.name;
                                if(!uniqueUserNames.has(name)){
                                    uniqueUserNames.add(name);
                                    return (
                                        <Col span={4} onClick={() => setInputValue(blog.trip.user.name)} className='bg-white flex justify-center user-card-search py-3 shadow'>
                                            {blog.trip.user.name}
                                        </Col>
                                    )
                                }
                            }
                        })}
                    </Row>
                )
            }
            </form>
            {
                filtredBlogs ? filtredBlogs.map((blog) => <BlogCard auth={auth} blog={blog}/>)
                : 
                <div>no blogs</div>
            }
        </AuthenticatedLayout>
    )
}