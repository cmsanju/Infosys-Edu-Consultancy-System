import React from 'react';
import './SampleCertificate.css';
import logo from '/src/assets/logo.png';

const SampleCertificate = () => {
  return (
    <div className="certificate">
      <div className="certificate-wrapper">
        <div className="certificate-description">
          <p className="earn-certificate">Earn a Career Certificate</p>
          <p className="description">Showcase this achievement on your LinkedIn profile, resume, or CV</p>
          <p className="description">Share it with your network on social media or in your performance evaluations.</p>
        </div>
        <div className="certificate-container">
          <div className="certificate-banner">
            <div className="certificate-logo"><img src={logo} alt="..." className="logo"/></div>
          </div>
          <div className="certificate-content">
            <h2>Certificate of Completion</h2>
            <p>This is to certify that</p>
            <h3>[Student's Name]</h3>
            <p>has successfully completed the</p>
            <h3>[Course Name]</h3>
            <p>on [Date]</p>
            <div className="certificate-signature">
              <div className="signature-line"></div>
              <p>Instructor's Signature</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SampleCertificate;