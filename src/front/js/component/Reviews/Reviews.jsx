import React from "react";

import "../Reviews/ReviewsStyles.css";

const Reviews = () => {
  return (
    <section className="text-center custom-reviews">
      <h2 className="text-center text-light">Opiniones de nuestros usuarios</h2>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" className="active"
            data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button"
            data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button"
            data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg w-50 img-carrusel"
              src="https://cdn.pixabay.com/photo/2018/10/30/23/13/girl-3784883_960_720.jpg"
              alt="Opinion del usuario X"
            />
            <div className="carousel-caption d-md-block">
              <h4>Sandra cuidó de "Pelusa"</h4>
              <i className="fas fa-star stars-reviews"></i>
              <i className="fas fa-star stars-reviews"></i>
              <i className="fas fa-star stars-reviews"></i>
              <i className="fas fa-star stars-reviews"></i>
              <i className="fas fa-star stars-reviews"></i>
              <p className="p-2">"Sandra es amorosa, responsable y apasionada por los animales."</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg w-50 img-carrusel"
              src="https://cdn.pixabay.com/photo/2015/04/28/11/44/sunset-743429_960_720.jpg"
              alt="Opinion del usuario X"
            />
            <div className="carousel-caption d-md-block">
              <h4>Guillermo cuidó de "Bimbo"</h4>
              <i className="fas fa-star stars-reviews"></i>
              <i className="fas fa-star stars-reviews"></i>
              <i className="fas fa-star stars-reviews"></i>
              <i className="fas fa-star stars-reviews"></i>
              <i className="fas fa-star stars-reviews"></i>
              <p className="p-2">"Bimbo se portó muy bien. Es muy tranquilo. Me enamoró."</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg w-50 img-carrusel"
              src="https://cdn.pixabay.com/photo/2017/12/27/14/02/friends-3042751_960_720.jpg"
              alt="Opinion del usuario X"
            />
            <div className="carousel-caption d-md-block">
              <h4>Nuria cuidó de "Cookie"</h4>
              <i className="fas fa-star stars-reviews"></i>
              <i className="fas fa-star stars-reviews"></i>
              <i className="fas fa-star stars-reviews"></i>
              <i className="fas fa-star stars-reviews"></i>
              <i className="fas fa-star stars-reviews"></i>
              <p className="p-2">"Nuria es muy cariñosa y trató a Cookie ¡excelente!. La recomiendo."</p>
            </div>
          </div>
        </div>
        <button type="button" className="carousel-control-prev"
          data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button type="button" className="carousel-control-next"
          data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Reviews;