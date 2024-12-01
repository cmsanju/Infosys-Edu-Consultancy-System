import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {FaClock, FaUser} from "react-icons/fa";
import BlogBar from './BlogBar';
const SingleBlog = () => {
  const { id } = useParams(); // Extract the blog ID from the URL
  const [data, setData] = useState(null); // State to hold the fetched blog data
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch the blog data
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:5000/blogs/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch the blog data');
        }
        const result = await response.json();
        setData(result[0]); // Assuming the API returns an array with a single object
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBlog();
  }, [id]);

  // Render loading, error, or blog details
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Loading...</p>;

  const { title, image, category, author, published_date, reading_time, content } = data;

  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Blog Page</h2>
      </div>

      {/* Blog Details */}
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img src={image} alt="Blog" className="w-full mx-auto rounded" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-blue-500 cursor-pointer">{title}</h2>

          <p className="text-gray-600">
             <FaUser className='inline-flex items-center mr-2'/> By {author} | Published on {published_date} 
          </p>
          <p className="text-gray-600">
             <FaClock className='inline-flex items-center mr-2'/> {reading_time} read
          </p>
          <div className="mt-5">
            <p className='text-base text-gray-500 mb-6'>{content}</p>
            <p className='text-base text-gray-500 mb-6'>Our aim is to bring you insights that matter, wrapped in engaging narratives. Whether you’re here to learn, explore, or stay updated, you’re in the right place.</p>
<p className='text-base text-gray-500 mb-6'>Every blog post is crafted with you in mind—keeping things simple, insightful, and relatable. Let’s explore this journey together.</p>
<p className='text-base text-gray-500 mb-6'>This post sheds light on key aspects of [topic], offering a blend of expert insights, practical advice, and a touch of creativity to keep you engaged.</p>
<p className='text-base text-gray-500 mb-6'>Feel free to immerse yourself in the ideas presented here. Don’t forget to share your thoughts, as your perspectives help us grow as a community.</p>
<p className='text-base text-gray-500 mb-6'>By the end of this blog, you’ll walk away with a deeper understanding of {category} practical takeaways, and perhaps even a new perspective.</p>
<p className='text-base text-gray-500 mb-6'>What makes this topic so intriguing? Let’s dive in to uncover layers of meaning, backed by research, examples, and actionable insights.</p>
<p className='text-base text-gray-500 mb-6'>We believe knowledge is power. Our goal is to equip you with the tools and insights to make informed decisions and spark meaningful discussions.</p>
<p className='text-base text-gray-500 mb-6'>In this post, we’ve kept the tone conversational and approachable while ensuring that the information is accurate, relevant, and actionable.</p>
<p className='text-base text-gray-500 mb-6'>As you explore this blog, remember that every detail is a stepping stone to mastering the art of {category}. Let’s get started!</p>
          </div>

        </div>
        <div className='lg:w-1/2'>
          <BlogBar/>
          
          </div>
      </div>
    </div>
  );
};

export default SingleBlog;
