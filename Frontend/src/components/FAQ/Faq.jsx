import React, { useState } from 'react';
import './Faq.css'


const Faq = () => {
  const faqData = [
    {
      question: "What services do education consultants provide?",
      answer: "Education consultants offer a range of services, including academic advising, college application assistance, career counseling, guidance on study abroad opportunities, and providing information about scholarships and financial aid."
    },
    {
      question: "Do you help students find scholarships?",
      answer: "Yes, we help students discover and apply for scholarships based on their academic achievements, financial need, and specific areas of interest."
    },
    {
      question: "What types of scholarships can I apply for?",
      answer: "Scholarships come in many forms, including merit-based scholarships, need-based scholarships, country-specific scholarships, and program-specific awards. We help you navigate and apply for these opportunities."
    },
    {
      question: "Will I be able to build real-world projects in this course?",
      answer: "Yes! Our course includes practical projects like building a portfolio website, a blog application, and more, which can be used to showcase your skills to potential employers."
    },
    {
      question: "Do I need any prerequisites to take the IT certification courses?",
      answer: "Most of our IT certification courses require basic knowledge of computers and networking. However, we provide preparatory resources to help you build foundational knowledge if you're a beginner."
    },
    {
      question: "How do I prepare for the certification exam?",
      answer: "Our courses include practice tests, study guides, and exam prep materials to ensure you're well-prepared for your certification exam. We also provide support and guidance throughout your study journey."
    },
    {
      question: "Will this course help me find a job in the AI field?",
      answer: "Yes, upon completion of the course, you'll have a strong foundation in AI and machine learning. We also offer job placement support, including resume building, interview prep, and job leads."
    },
    {
      question: "Do I need to take this course if I’m already a good communicator?",
      answer: "Even if you already have good communication skills, this course can help you refine your skills, improve your professional writing, and enhance your ability to communicate effectively in the workplace."
    },
    {
      question: "How much do the courses cost?",
      answer:"The cost of each course varies depending on the program. Please visit our course catalog for detailed pricing information, or contact us for payment plans and discounts."
    },
    {
      question:"Can I take multiple courses at once?",
      answer:"Yes, you can enroll in multiple courses at once. However, we recommend ensuring that you can manage the workload effectively. Feel free to contact us if you need guidance on course selection."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the answer visibility
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const visibleFaqs = showMore ? faqData : faqData.slice(0, 5); 

  return (
    <div className="faq-section">
      <p className="faq-heading">Frequently Asked Questions</p>
      {visibleFaqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            <p>{faq.question}</p>
            <i
              className={`faq-toggle-icon ${activeIndex === index ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}`}
            ></i>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
      {faqData.length > 5 && (
        <button className="faq-show-more" onClick={toggleShowMore}>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      )}
      
    </div>
  );
};

export default Faq;
