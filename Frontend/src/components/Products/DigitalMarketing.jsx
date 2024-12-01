import React from 'react'
import './DigitalMarketing.css'
import star_icon from '/src/assets/star_icon.png';
import program_3 from '/src/assets/program_6.jpg';
import star_dull_icon from '/src/assets/star_dull_icon.png';
function DigitalMarketing() {
    return (
        <div className="productDisplay">
          <div className="productdisplay-left">
            <div className="productdisplay-img-list">
              <img src={program_3} alt="" />
              <img src={program_3} alt="" />
              <img src={program_3} alt="" />
            </div>
            <div className="productdisplay-img">
              <img className="productdisplay-main-img" src={program_3} alt="" />
            </div>
          </div>
          <div className="productdisplay-right">
            <h1>Bulk SMS & Digital Marketing</h1>
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
            The Digital Marketing course provides a comprehensive overview of strategies to effectively promote brands online. It covers key areas like SEO, social media marketing, and email marketing to drive audience engagement. Participants learn about analytics tools to measure campaign success and optimize performance. With a focus on both creative content and data-driven decisions, this course prepares individuals to build impactful digital campaigns. Ideal for anyone looking to boost their online marketing skills
             in a competitive digital landscape
            </div>
            <div className="productdisplay-right-size">
              <h1>Topics Covered</h1>
              <div className="productdisplay-right-sizes">
              <div>SEO</div>
                <div>Content Marketing</div>
                <div>Email Marketing</div>
              
              </div>
            </div>
            <button className='btn'>Buy Now</button>
            <p className="productdisplay-right-category"><span>Instructor : </span>Ram Sharma</p>
          
          </div>
        </div>
      );
}

export default DigitalMarketing
