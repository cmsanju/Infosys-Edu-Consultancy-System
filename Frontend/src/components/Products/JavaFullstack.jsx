import React from 'react';
import './JavaFullstack.css';
import star_icon from '/src/assets/star_icon.png';
import program_1 from '/src/assets/program_4.jpg';
import star_dull_icon from '/src/assets/star_dull_icon.png';

function JavaFullstack() {
  return (
    <div className="productDisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={program_1} alt="" />
          <img src={program_1} alt="" />
          <img src={program_1} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={program_1} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>Java Full Stack</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            $500
          </div>
          <div className="productdisplay-right-price-new">
            $299
          </div>
        </div>
        <div className="productdisplay-right-description">
        Our Java Full Stack Development Course is a comprehensive program designed to 
        transform you into a versatile, in-demand developer. This course covers everything from 
        core Java programming to advanced front-end and back-end development skills, including 
        frameworks like Spring Boot, Angular, and Node.js. You'll gain hands-on experience building dynamic 
        web applications, managing databases, and creating RESTful APIs.

        </div>
        <div className="productdisplay-right-size">
          <h1>Topics Covered</h1>
          <div className="productdisplay-right-sizes">
          <div>Java</div>
            <div>Spring Boot</div>
            <div>Angular</div>
            <div>SQL</div>
            <div>Git</div>
          </div>
        </div>
        <button className='btn'>Buy Now</button>
        <p className="productdisplay-right-category"><span>Instructor : </span>Ram Sharma</p>
      
      </div>
    </div>
  );
}

export default JavaFullstack;
