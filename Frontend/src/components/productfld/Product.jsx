import React, { useState } from 'react';
{/*import React from 'react'*/ }
import './Product.css'
import next_icon from '/src/assets/right-arrow.png'
import back_icon from '/src/assets/left-arrow.png'
import blog1 from '/src/assets/img2.jpeg'
import blog2 from '/src/assets/img1.jpeg'
import blog3 from '/src/assets/img3.jpeg'
import Card from '../Card/Card.jsx'
import webcourse1 from '/src/assets/Product/Web development/bootcamp.png'
import webcourse2 from '/src/assets/Product/Web development/introduction to web development.png'
import webcourse3 from '/src/assets/Product/Web development/frontend react.jpg'
import webcourse4 from '/src/assets/Product/Web development/nodejs.jpg'
import webcourse5 from '/src/assets/Product/Web development/django.jpg'
import webcourse6 from '/src/assets/Product/Web development/responsive web design.jpg'
import webcourse7 from '/src/assets/Product/Web development/html and css.jpg'
import itcourse1 from '/src/assets/Product/IT Certifications/CEH.jpg'
import itcourse2 from '/src/assets/Product/IT Certifications/A+.jpg'
import itcourse3 from '/src/assets/Product/IT Certifications/Cisco.jpg'
import itcourse4 from '/src/assets/Product/IT Certifications/microsoft azure.jpg'
import itcourse5 from '/src/assets/Product/IT Certifications/AWS.jpg'
import itcourse6 from '/src/assets/Product/IT Certifications/google cloud.jpeg'
import itcourse7 from '/src/assets/Product/IT Certifications/ITIL.jpg'
import aicourse1 from '/src/assets/Product/AI/Intro ai.jpg'
import aicourse2 from '/src/assets/Product/AI/NLP.jpg'
import aicourse3 from '/src/assets/Product/AI/machine learning.jpg'
import aicourse4 from '/src/assets/Product/AI/Reinforcement learning.jpg'
import aicourse5 from '/src/assets/Product/AI/computer vision.jpg'
import aicourse6 from '/src/assets/Product/AI/AI robotics.jpg'
import aicourse7 from '/src/assets/Product/AI/Ethical.jpg'
import oscourse1 from '/src/assets/Product/operating system/linux.png'
import oscourse2 from '/src/assets/Product/operating system/serverless computing.png'
import oscourse3 from '/src/assets/Product/operating system/Windows-Server-Administration.png'
import oscourse4 from '/src/assets/Product/operating system/Apache & Nginx.png'
import oscourse5 from '/src/assets/Product/operating system/database.png'
import oscourse6 from '/src/assets/Product/operating system/microservices.jpg'
import oscourse7 from '/src/assets/Product/operating system/disaster recovery.jpeg'
import comcourse1 from '/src/assets/Product/Communication/Business communication.jpg'
import comcourse2 from '/src/assets/Product/Communication/public speaking.jpg'
import comcourse3 from '/src/assets/Product/Communication/Digital communication.jpg'
import comcourse4 from '/src/assets/Product/Communication/leadership.jpg'
import comcourse5 from '/src/assets/Product/Communication/conflict resolution.jpg'
import comcourse6 from '/src/assets/Product/Communication/cross cultural.jpg'
import comcourse7 from '/src/assets/Product/Communication/collaboration.jpg'
import SampleCertificate from '../SampleCertificate/SampleCertificate.jsx';
import Faq from '../FAQ/Faq.jsx';
import Footer from '../Footer/Footer.jsx';

{/* Courses for different categories */ }
const allCourses = {
  'Web Development': [
    {
      image: webcourse1,
      title: "Frontend Development Bootcamp",
      description: "This comprehensive course covers full-stack web development, teaching both front-end and back-end skills. You'll learn HTML, CSS, JavaScript, Node.js, Express, MongoDB, and more. By the end, you'll be able to build dynamic, interactive websites and APIs, preparing you for a career in web development.",
      price : "Rs.1,999/-"  
    },
    {
      image: webcourse2,
      title: "Introduction to Web Development",
      description: "The Introduction to Web Development course is designed for beginners to learn the fundamentals of web development. You’ll master HTML, CSS, and JavaScript to build responsive, dynamic websites. By the end, you'll be able to create and style websites, ensuring they function seamlessly across devices.",
      price: "Rs.2,400/-"
      
    },
    {
      image: webcourse3,
      title: "Frontend Development with React",
      description: " This course focuses on building modern front-end applications using React.js, one of the most popular JavaScript libraries. You'll learn about React components, JSX, state management, hooks, and routing. The course will also introduce you to Redux for managing state at a large scale.",
      price: "Rs.2,399/-"
    },
    {
      image: webcourse4,
      title: "Mastering Full Stack with Nodejs",
      description: " This course focuses on building modern front-end applications using React.js, one of the most popular JavaScript libraries. You'll learn about React components, JSX, state management, hooks, and routing. The course will also introduce you to Redux for managing state at a large scale.",
      price: "Rs.1,499/-"
    },
    {
      image: webcourse5,
      title: "Web Development with Python and Django",
      description: "Master web development using Python and Django. Learn to build dynamic websites, manage databases, create secure user authentication, and develop robust web applications. Gain hands-on experience in creating real-world projects with Python's powerful Django framework.",
      price: "Rs.999/-"
    },
    {
      image: webcourse6,
      title: "Responsive Web Design(FreeCodeCamp)",
      description: "This certification covers the fundamentals of responsive web design. Learn HTML, CSS, and Flexbox to build mobile-friendly websites that adapt to different screen sizes. Gain hands-on experience by building projects and mastering techniques for creating accessible, user-friendly, visually appealing web pages.",
      price: "Rs.1,200/-"
    },
    {
      image: webcourse7,
      title: "Modern HTML & CSS for Beginners",
      description: "This course introduces the fundamentals of HTML and CSS, focusing on modern web design techniques. Learn to structure websites with HTML and style them using CSS, including layouts, typography, and responsive design. Gain hands-on experience building clean, responsive websites from scratch.",
      price:"Rs.1,299/-"
    },
  ],
   
  'IT Certifications': [
    {
      image: itcourse1,
      title: "Certified Ethical Hacker(CEH)",
      description: "The CEH certification focuses on ethical hacking and penetration testing. It teaches how to think and act like a hacker to better understand vulnerabilities in systems. The course covers topics like network security, web application security, and cloud security, helping professionals identify and defend against cyberattacks.",
      price:"Rs.2,300/-"
    },
    {
      image: itcourse2,
      title: "CompTIA A+ Certification",
      description: "CompTIA A+ is an entry-level IT certification that provides foundational knowledge in IT support. It covers topics like hardware, software, networking, troubleshooting, and security. This certification is ideal for individuals pursuing careers in technical support, helpdesk roles, or IT maintenance and repair.",
      price:"Rs.599/-"
    },
    {
      image: itcourse3,
      title: "Cisco Certified Network Associate",
      description: "The CCNA certification is essential for anyone pursuing a career in networking. It covers network fundamentals, routing and switching, wireless networking, and security. With a CCNA, you will be equipped to manage and optimize networks, troubleshoot issues, and configure routers and switches in both small and large network environments.",
      price:"Rs.649/-"
    },
    {
      image: itcourse4,
      title: "Microsoft Certified: Azure Fundamentals",
      description: "This certification offers an introduction to Microsoft Azure and cloud services. It is designed for beginners who want to understand the basics of cloud computing, including Azure services, cloud concepts, pricing, and support. This certification is ideal for professionals looking to start a career in cloud computing or IT administration.",
      price:"Rs.2,000/-"
    },
    {
      image: itcourse5,
      title: "AWS Certified Solutions Architect",
      description: "The AWS Solutions Architect – Associate certification focuses on designing distributed systems and applications on AWS. It covers best practices for architectural design, cost management, security. This certification is valuable for IT professionals working with cloud infrastructure and aiming to design secure,robust systems using AWS services.",
      price:"Rs.1,449/-"
    },
    {
      image: itcourse6,
      title: "Google Cloud Professional Architect",
      description: "The Google Cloud Professional Cloud Architect certification validates your skills in designing, developing, and managing secure, scalable cloud solutions using Google Cloud Platform. It covers key topics such as Google Cloud services, architecture best practices, and cost optimization, ideal for cloud architects and DevOps professionals.",
      price:"Rs.1,200/-"
    },
    {
      image: itcourse7,
      title: " ITIL Foundation",
      description: " ITIL Foundation certification focuses on the core concepts of IT Service Management (ITSM). It introduces the ITIL framework and best practices for managing IT services. Topics include service lifecycle, service strategy, service design, service transition, and continual service improvement. Ideal for professionals in service management, ITIL Foundation helps improve organizational efficiency and customer satisfaction.",
      price:"Rs.799/-"
      
    }
  ],

  'Artificial Intelligence': [
    {
      image: aicourse1,
      title: "Introduction to Artifical Intelligence",
      description: "This course provides a comprehensive introduction to AI, covering key concepts such as machine learning, neural networks, and natural language processing. Participants will learn the foundational principles of AI and how it’s applied in real-world scenarios, from automation to data analysis.",
      price:"Rs.399/-"
    },
    {
      image: aicourse2,
      title: "Natural Language Processing with AI",
      description: "This course delves into Natural Language Processing (NLP), where AI interacts with human language. It covers key techniques such as text analysis, sentiment analysis, machine translation, and chatbot development, enabling learners to build AI systems that understand, process, and generate human language effectively.",
      price:"Rs.799/-"
    },
    {
      image: aicourse3,
      title: "Machine Learning for AI Applications",
      description: "Focusing on machine learning (ML), this course teaches learners how to develop algorithms that enable machines to learn from data. Topics include supervised and unsupervised learning, regression, classification, and clustering, with practical examples of AI applications in business and technology.",
      price:"Rs.899/-"
    },
    {
      image: aicourse4,
      title: "Reinforcement Learning for AI ",
      description: "This course covers reinforcement learning (RL), a key AI technique where machines learn through trial and error. Topics include RL algorithms and their applications in robotics, gaming, and autonomous systems. Students will also learn how to implement RL models in real-world scenarios.",
      price:"Rs.699/-"
    },
    {
      image: aicourse5,
      title: "Computer Vision with AI",
      description: "This course covers how AI enables machines to interpret and understand visual information. Topics include image processing, object detection, and face recognition using deep learning techniques. Students will explore the practical applications of computer vision in various industries, including healthcare, automotive, and retail, and analyze its impact on business transformation.",
      price:"Rs.599/-"
    },
    {
      image: aicourse6,
      title: "AI in Robotics and Autonomous Systems",
      description: "This course covers the intersection of AI and robotics, teaching how AI is used to enable machines to perceive, reason, and act autonomously. Participants will learn about robot perception, motion planning, and control, and explore real-world applications in manufacturing, drones, and self-driving cars.",
      price:"Rs.1,200/-"
    },
    {
      image: aicourse7,
      title: "AI Ethics and Responsible AI",
      description: "This course explores the ethical considerations surrounding AI technologies. Topics include bias in AI systems, privacy concerns, transparency in algorithms, and ensuring that AI is used responsibly and fairly, making it crucial for those developing AI systems for real-world applications.",
      price:"Rs.200/-"
    }
  ],

  'Operating Systems & Servers': [
    {
      image: oscourse1,
      title: "Introduction to Linux Administration",
      description: "Learn the basics of Linux, one of the most widely used operating systems in the server world. This course covers shell commands, user management, file permissions, system services, and basic server administration tasks, providing you with the skills needed for a Linux-based server environment.",
      price:"Rs.1,659"
    },
    {
      image: oscourse2,
      title: " Cloud Computing and Serverless Architecture",
      description: "This course explores the principles of cloud computing, serverless architecture, and cloud-based services like AWS, Azure, and Google Cloud. It covers the deployment of virtual servers, cloud databases, and the advantages of serverless functions for modern web and app development.",
      price:"Rs.2,300/-"
    },
    {
      image: oscourse3,
      title: " Windows Server Administration",
      description: "This course focuses on managing Windows Server environments, covering installation, configuration, Active Directory, group policies, DNS, DHCP, and security. It’s tailored for IT professionals who want to master Windows Server management and troubleshooting in enterprise environments.",
      price:"Rs.1,400/-"
    },
    {
      image: oscourse4,
      title: "Web Servers: Apache & Nginx",
      description: "Get hands-on with Apache and Nginx web servers. This course covers server installation, configuration, virtual hosts, SSL/TLS setup, load balancing, and performance tuning. Ideal for those seeking to optimize web server deployments and manage high-traffic websites.",
      price:"Rs.999/-"
    },
    {
      image: oscourse5,
      title: "Database Server Management",
      description: "Learn to configure and manage MySQL, PostgreSQL, and SQL Server databases. Topics include installation, performance tuning, backup and recovery, replication, and disaster recovery, with a focus on ensuring high availability, scalability, and reliability in enterprise database environments.",
      price:"Rs.1,299/-"
    },
    {
      image: oscourse6,
      title: "Microservices and Server Management",
      description: "Dive into the microservices architecture, learning how to manage distributed services on servers. Topics include deploying microservices using containers, load balancing, scaling, monitoring, and ensuring fault tolerance across microservices in cloud and on-premise environments.",
      price:"Rs.2,399/-"
    },
    {
      image: oscourse7,
      title: "Server Backup and Disaster Recovery",
      description: "This course covers disaster recovery planning, server backup methodologies, and strategies for business continuity. Students will learn how to design, implement, and test backup and recovery plans for servers to ensure data integrity and availability during system failures or natural disasters.",
      price:"Rs.1,200/-"
    }
  ],

  'Communication': [
    {
      image: comcourse1,
      title: "Business Communication",
      description: "Learn how to communicate effectively in the workplace. This course covers email etiquette, business presentations, negotiation skills, and conflict resolution. It’s designed to improve communication in both internal and external business environments, helping professionals convey their ideas with confidence and clarity.",
      price:"Rs.2,300/-"
    },
    {
      image: comcourse2,
      title: "Public Speaking and Presentation Skills",
      description: "This course equips learners with the skills to speak confidently in public and deliver compelling presentations. Topics include speech preparation, overcoming nervousness, engaging your audience, and using visual aids effectively. Ideal for those aiming to excel in meetings, conferences, or any public speaking engagement.",
      price:"Rs.1,600/-"
    },
    {
      image: comcourse3,
      title: "Digital Communication Strategies",
      description: "This course focuses on mastering digital communication tools and techniques. It covers email, social media, video conferencing, and content creation. Learn to craft clear, persuasive messages for digital audiences while building a strong personal or brand presence across online platforms for effective communication.",
      price: "Rs.799/-"
    },
    {
      image: comcourse4,
      title: " Leadership and Communication",
      description: "This course is designed for aspiring leaders to develop key communication skills. Learn how to inspire and motivate teams, provide clear direction, offer constructive feedback, and handle difficult conversations. The focus is on building trust, fostering collaboration, and maintaining high morale within teams for effective leadership.",
      price: "Rs.1,399/-"
    },
    {
      image: comcourse5,
      title: "Conflict Resolution and Negotiation",
      description: "This course teaches communication skills for resolving conflicts and facilitating negotiations. It focuses on active listening, emotional control, and problem-solving techniques. Learn to address disputes constructively in personal and professional settings, fostering better relationships and achieving positive outcomes in challenging situations.",
      price:"Rs.1,299/-"
    },
    {
      image: comcourse6,
      title: "Cross-Cultural Communication",
      description: "Gain an understanding of how culture affects communication styles in different countries. This course explores strategies to communicate effectively with diverse audiences, manage cultural differences in the workplace, and navigate international business interactions. Essential for professionals working in global or multicultural environments.",
      price:"Rs.1,600/-"
    },
    {
      image: comcourse7,
      title: "Team Communication and Collaboration",
      description: "This course focuses on improving communication within teams. Learn strategies for clear and effective team communication, managing group dynamics, and fostering collaboration. Topics include active listening, conflict resolution, feedback techniques, and promoting open, honest communication for high-performing teams.",
      price:"Rs.599/-"
    }
  ]
  
};
const Product = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('Web Development');
  
  

  // Array of images
  const images = [blog1, blog2, blog3]; // Add more images to this array as needed

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  {/*Get the courses based on the selected category */ }
  const courses = allCourses[selectedCategory];
  return (
    <div className="blogs-container"> {/* Add a class for styling */}
      <div className="carousel">{/* Carousel image */}
        <img src={back_icon} onClick={prevImage} className="prev-btn" alt="..." />
        <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
        <img src={next_icon} onClick={nextImage} className="next-btn" alt="..." />
      </div>

      <div className="success-path-section">
        <p className="line1">Unlock Your Potential with Expert Guidance</p>
        <p className="line2">Empower your educational and professional journey with personalized coaching.</p>
      </div>

      <div className="buttons">
        <button  onClick={() => setSelectedCategory('Web Development')}>Web Development</button>
        <button  onClick={() => setSelectedCategory('IT Certifications')}>IT Certification</button>
        <button  onClick={() => setSelectedCategory('Artificial Intelligence')}>Artificial Intelligence</button>
        <button  onClick={() => setSelectedCategory('Operating Systems & Servers')}>Operating Systems & Servers</button>
        <button  onClick={() => setSelectedCategory('Communication')}>Communication</button>
      </div>

      {/* Card Section */}
      
      <div className="cards-container">
         {courses.map((course, index) => (
            <Card
              key={index}
              image={course.image}
              title={course.title}
              description={course.description}
              price={course.price}
            />
            ))}
      </div>
      <SampleCertificate />
      <Faq />
      <Footer />

    </div>




  )
}

export default Product
