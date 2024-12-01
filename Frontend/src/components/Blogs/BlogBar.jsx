import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BlogBar = () => {
    const [popularBlogs,setPopularBlogs]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/blogs").then(res=>res.json()).then(data=>setPopularBlogs(data.slice(0,15)))
    },[])
  return (
<div>
    <div>
    <h4 className='text-3xl font-semibold px-4'>Latest Blogs</h4>
<div>
    {
        popularBlogs.slice(0,5).map(blog=><div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4'>
            <h4 className='font-medium mb-2'>{blog.title}</h4>
            <Link to='/' className='text-base pb-2 hover:text-blue-500 inline-flex items-center py-1'>
            Read More
            <FaArrowRight className='mt-1 ml-2'/>
            </Link>
        </div>)
    }
</div>
    </div>

    <div>
    <h4 className='text-3xl font-semibold px-4'>Popular Blogs</h4>
<div>
    {
        popularBlogs.slice(5,8).map(blog=><div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4'>
            <h4 className='font-medium mb-2'>{blog.title}</h4>
            <Link to='/' className='text-base pb-2 hover:text-blue-500 inline-flex items-center py-1'>
            Read More
            <FaArrowRight className='mt-1 ml-2'/>
            </Link>
        </div>)
    }
</div>
    </div>
</div>    
  )
}

export default BlogBar
