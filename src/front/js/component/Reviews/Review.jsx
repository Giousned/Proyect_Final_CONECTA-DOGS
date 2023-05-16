import React from "react";

const Review = ({ imgSrc, name, stars, text }) => {
  return (
    <div className="carousel-item">
      <img
        className="bd-placeholder-img bd-placeholder-img-lg w-50 img-carrusel"
        src={imgSrc}
        alt=""
      />
      <div className="carousel-caption d-md-block">
        <h4>{name}</h4>
        {[...Array(stars)].map((_, index) => (
          <i key={index} className="fas fa-star stars-reviews"></i>
        ))}
        <p className="p-2">{text}</p>
      </div>
    </div>
  );
};

export default Review;

