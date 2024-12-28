import React from 'react';
import './RestaurantBox.css';
import Restimage from '../images/mayuri.jpg';  // Use your mayuri.jpg as a fallback or for all images

const RestaurantBox = ({ name, rating, location, image }) => {
  
  const imgSrc = Restimage;  
  
  return (
    <div className="restaurant-box">
      <img src={imgSrc} alt={name} className="restaurant-image" />
      <div className="restaurant-info">
        <h3>{name}</h3>
        <p>Rating: {rating} ⭐</p>
        <p>Location: {location}</p>
      </div>
    </div>
  );
};

export default RestaurantBox;
