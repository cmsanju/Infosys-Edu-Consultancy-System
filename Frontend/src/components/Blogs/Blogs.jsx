import React, { useEffect, useState } from 'react'
import './Blogs.css'
import Footer from '../Footer/Footer'
import { Link } from 'react-scroll'
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import BlogBar from './BlogBar';
function Blogs() {
  const [blogs,setBlogs]=useState([]);
  const[currentPage,setCurrentPage]=useState(1);
  const pageSize=12;
  const [selectedCategory,setSelectedCategory]=useState(null);
  const [activeCategory,setActiveCategory]=useState(null);
  useEffect(()=>{
    async function fetchBlogs() {
      let url=`http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;
      if(selectedCategory){
        url+=`&category=${selectedCategory}`;
      }
      const response=await fetch(url);
      const data=await response.json();
      console.log(data);
      setBlogs(data);
    }
    fetchBlogs();
  },[currentPage,pageSize,selectedCategory])
  const handlePageChange=(pageNumber)=>{
        setCurrentPage(pageNumber);
  }
  const handleCategoryChange=(category)=>{
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  }
  return (
    <div>
      <div className='px-4 py-32 bg-black mx-auto'> 
    <div className='text-white text-center font '>
      <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Welcome to our Blog</h1>
      <p className='text-gray-100 lg:w-3/5 mx-auto mb-5'>Start your blog today and join a community of writers and readers who are passionate about
       sharing their ideas and stories. we offer you everything you need to get started, from helpful tips and 
       tutorials</p>
       <div>
        <button className='btn'>Learn More</button>
       </div>
    </div>
    </div>
    <div><CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/> </div>
    <div className='flex flex-col mr-5 lg:flex-row gap-12'><BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}/>
    <div><BlogBar/></div>
    </div>
    <div><Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize}/></div>
    <br/><br/><br/>
    
    <Footer/>
    </div>
  )
}

export default Blogs
