import React from 'react'
import './Contact.css'
import msg_icon from '/src/assets/msg-icon.png'
import mail_icon from '/src/assets/mail-icon.png'
import phone_icon from '/src/assets/phone-icon.png'
import location_icon from '/src/assets/location-icon.png'
import white_arrow from '/src/assets/white-arrow.png'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("ACCESS KEY")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below.Your feedback,questions and suggestions are important to us as we strive towards providing exceptional sevice to our universal community</p>
        <ul>
          <li><img src={mail_icon} alt="" />edusity@gmail.com</li>
          <li><img src={phone_icon} alt="" />7682537214</li>
          <li><img src={location_icon} alt="" />BTM 2ND Stage <br />Bengaluru,India</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}> 
          <label> Your Name </label>
          <input type="text" name='name' placeholder='Enter your Name ' required/>
          <label>Your E-mail</label>
          <input type="text" name='email' placeholder='Enter your E-mail ' required />          
          
          <label>Write your messages here</label>
          <textarea name="message" id="" cols="30" rows="10" placeholder='Enter your Message' required></textarea>
          <button type='submit' className='btn dark-btn' >Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
