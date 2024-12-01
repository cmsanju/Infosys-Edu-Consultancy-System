import React from 'react'
import './Learning.css'
import star_icon from '/src/assets/star_icon.png';
import program_2 from '/src/assets/program_5.png';
import star_dull_icon from '/src/assets/star_dull_icon.png';
function Learning() {
    return (
        <div className="productDisplay">
          <div className="productdisplay-left">
            <div className="productdisplay-img-list">
              <img src={program_2} alt="" />
              <img src={program_2} alt="" />
              <img src={program_2} alt="" />
            </div>
            <div className="productdisplay-img">
              <img className="productdisplay-main-img" src={program_2} alt="" />
            </div>
          </div>
          <div className="productdisplay-right">
            <h1>Learning & Development</h1>
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
            The Learning & Development course focuses on enhancing essential skills and knowledge for personal and professional growth. It covers techniques for effective communication, leadership, and team collaboration, promoting a growth mindset. Participants will gain insights into goal-setting, time management, and adaptability in dynamic environments. Through interactive workshops and real-world case studies, the course fosters continuous learning and skill enhancement. Ideal for individuals aiming to boost their career readiness and drive positive workplace impact.






    
            </div>
            <div className="productdisplay-right-size">
              <h1>Topics Covered</h1>
              <div className="productdisplay-right-sizes">
              <div>Leadership </div>
                <div>Time Management </div>
                <div>Communication Skills</div>
             
              </div>
            </div>
            <button className='btn'>Buy Now</button>
            <p className="productdisplay-right-category"><span>Instructor : </span>Ram Sharma</p>
          
          </div>
        </div>
      );
}

export default Learning
