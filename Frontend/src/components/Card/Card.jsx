import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook

const Card = ({ image, title, description, price }) => {
  const navigate = useNavigate();  // Initialize navigate

  const handlePaymentClick = () => {
    // Redirect to the payment page when the button is clicked
    navigate("/payment");
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <p className="card-price">{price}</p>
        {/* Update onClick to call the handlePaymentClick function */}
        <button className="card-button" onClick={handlePaymentClick}>Pay Now</button>
      </div>
    </div>
  );
};

export default Card;
