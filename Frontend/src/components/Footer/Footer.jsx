import React from 'react'
import './Footer.css'
import fb from '/src/assets/facebook.png'
import twitter from '/src/assets/twitter.png'
import LinkedIn from '/src/assets/linkedin.png'
import inst from '/src/assets/instagram.png'
const Footer = () => {
  return (
    <div className="footer-container">

<div className='footer'>
        <div className="sb-footer-section-padding">
            <div className="sb-footer-links">
                <div className="sb-footer-links-div">
                    <h4>Contact Us</h4>
                        <p>BTM 2ND Stage</p>
                        <p>Bengaluru 56068</p>
                        <p>India</p>
                </div>
                <div className="sb-footer-links-div">
                    <h4>Useful Links</h4>     
                        <p>Home</p>
                    <a href="/healthplan">
                        <p>Testimonials</p>
                    </a>
                    <a href="/about">
                        <p>About Us</p>
                    </a>
                </div>
                <div className="sb-footer-links-div">
                    <h4>Our Services</h4>
                    
                        <p>Blogs</p>
                    
                    
                        <p>Products</p>
                  
                    
                        <p>Feedback</p>
                    
                    
                        <p>Contact</p>
                 
                </div>
                <div className="sb-footer-links-div">
                    <h4>Join Us On</h4>
                    <div className="socialmedia">
                        <p><img src={fb} alt=''/></p>
                        <p><img src={twitter} alt=''/></p>
                        <p><img src={LinkedIn} alt=''/></p>
                        <p><img src={inst} alt=''/></p>
                    </div>
                    <br></br>
                    <br/><br/>
                    <div className='newsletter'>
                    <h5>Subscribe our Newsletter</h5>
                    <label>
                       <input type="text" /> <button type='submit' className='subscribe' >Subscribe</button>
                           </label>
                    </div>
                </div>
            </div>
            <hr></hr>

                <div className="sb-footer-below">
                    <div className="sb-footer-copyright">
                        <p>@{new Date().getFullYear()} Edusity Pvt.Ltd.All rights reserved</p>
                    </div>
                    <div className="sb-footer-below-links">
                        <a href="/term">
                            <div>
                                <p>Term & Conditions</p>
                            </div>
                        </a>
                        <a href="/privacy">
                            <div>
                                <p>Privacy Policy</p>
                            </div>
                        </a>
                        <a href="/security">
                            <div>
                                <p>Refund Policy</p>
                            </div>
                        </a>
                       
                    </div>
                </div>
        </div>
    </div>
</div>
  )
}

export default Footer
