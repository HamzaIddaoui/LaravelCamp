import { Head, usePage } from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import BlogCard from "@/Components/BlogCard";
export default function BlogIndex({auth}) { 
    const {blogs} = usePage().props;
    return (
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight flex items-center">
            <img src='/images/Book.png'/>
            My Blogs
            </h2>
            }
        >
            <Head title="My Blogs" />
            {
             blogs ? blogs.map((blog) => <BlogCard blog={blog} auth={auth}/>)
             : 
             <div>no blogs</div>
            }
        </AuthenticatedLayout>
    )
}