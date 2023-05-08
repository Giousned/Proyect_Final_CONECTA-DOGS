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




{/*import React from "react";
import Review from "./Review.jsx";
import "../Reviews/ReviewsStyles.css";

const Reviews = () => {
  const reviewsData = [
    {
      id: 1,
      name: "Sandra",
      pet: "Pelusa",
      imgSrc:
        "https://cdn.pixabay.com/photo/2018/10/30/23/13/girl-3784883_960_720.jpg",
      stars: 5,
      text: "Sandra es amorosa, responsable y apasionada por los animales.",
    },
    {
      id: 2,
      name: "Guillermo",
      pet: "Bimbo",
      imgSrc:
        "https://cdn.pixabay.com/photo/2015/04/28/11/44/sunset-743429_960_720.jpg",
      stars: 5,
      text: "Bimbo se portó muy bien. Es muy tranquilo. Me enamoró.",
    },
    {
      id: 3,
      name: "Nuria",
      pet: "Cookie",
      imgSrc:
        "https://cdn.pixabay.com/photo/2017/12/27/14/02/friends-3042751_960_720.jpg",
      stars: 5,
      text:
        "Nuria es muy cariñosa y trató a Cookie ¡excelente!. La recomiendo.",
    },
  ];

  return (
    <section className="text-center custom-reviews">
      <h2 className="text-center text-light">Opiniones de nuestros usuarios</h2>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          {reviewsData.map((review, index) => (
            <button
              key={review.id}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : ""}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {reviewsData.map((review, index) => (
            <Review key={review.id} {...review} isActive={index === 0} />
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Reviews; */}
