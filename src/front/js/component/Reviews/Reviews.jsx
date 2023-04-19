import React from "react";

import "../Reviews/reviews.css";

export const Reviews = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/22/19/41/puppy-1850276_960_720.jpg"
            className="imagenesOpiniones "
            alt="Opinion del usuario X"
          />
          <div className="carousel-caption d-none d-md-block">
            <div className="justify-content-center">
              <h5>Sandra sobre "Muffin"</h5>
              <i className="fas fa-star stars-reviews"></i>
              <i className="fas fa-star stars-reviews"></i>
              <i className="fas fa-star stars-reviews"></i>
              <i className="fas fa-star stars-reviews"></i>
              <i className="fas fa-star stars-reviews"></i>
              <p>
                "Sandra es un AMOR. Desde el primer minuto que entramos por su
                casa fue amor a primera vista con Muffin.Es responsable,
                cariñosa y se le nota desde el primer momento esa pasión por los
                animales."
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn.pixabay.com/photo/2018/04/23/14/38/dog-3344414_960_720.jpg"
            className="imagenesOpiniones"
            alt="Opinion del usuario X"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Nuria sobre "Cookie"</h5>
            <i className="fas fa-star stars-reviews"></i>
            <i className="fas fa-star stars-reviews"></i>
            <i className="fas fa-star stars-reviews"></i>
            <i className="fas fa-star stars-reviews"></i>
            <i className="fas fa-star stars-reviews"></i>
            <p>
              "Nuria esa to loca pero es un AMOR. Desde el primer minuto que
              entramos por su casa fue amor a primera vista con Cookie.Es
              responsable, cariñosa y se le nota desde el primer momento esa
              pasión por los animales."
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374_960_720.jpg"
            className="imagenesOpiniones "
            alt="Opinion del usuario X"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Guillermo sobre "Fluffy"</h5>
            <i className="fas fa-star stars-reviews"></i>
            <i className="fas fa-star stars-reviews"></i>
            <i className="fas fa-star stars-reviews"></i>
            <i className="fas fa-star stars-reviews"></i>
            <i className="fas fa-star stars-reviews"></i>
            <p>
              "Guillermo es un AMOR. Desde el primer minuto que entramos por su
              casa fue amor a primera vista con Fluffy. Es responsable, cariñoso
              y se le nota desde el primer momento esa pasión por los animales."
            </p>
          </div>
        </div>
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
  );
};


{/* <section className="py-4 text-center custom-reviews">
<div id="reviews"></div>
<div className="container pb-4">
  <div className="row">
    <h2 className="p-4">Opiniones de nuestros usuarios</h2>
    <div className="col-12 col-md-4 p-2 review">
      <h4>Sandra sobre "Pelusa"</h4>
      <i className="fas fa-star stars-reviews"></i>
      <i className="fas fa-star stars-reviews"></i>
      <i className="fas fa-star stars-reviews"></i>
      <i className="fas fa-star stars-reviews"></i>
      <i className="fas fa-star stars-reviews"></i>
      <p className="p-2">"Sandra es un AMOR. Desde el primer minuto que entramos por su casa fue amor a primera vista con Penaut.
        Es responsable, cariñosa y se le nota desde el primer momento esa pasión por los animales."</p>
    </div>
    <div className="col-12 col-md-4 p-2 review">
      <h4>Nuria sobre "Penaut"</h4>
      <i className="fas fa-star stars-reviews"></i>
      <i className="fas fa-star stars-reviews"></i>
      <i className="fas fa-star stars-reviews"></i>
      <i className="fas fa-star stars-reviews"></i>
      <i className="fas fa-star stars-reviews"></i>
      <p className="p-2">"Nuria es un AMOR. Desde el primer minuto que entramos por su casa fue amor a primera vista con Penaut.
        Es responsable, cariñosa y se le nota desde el primer momento esa pasión por los animales."</p>
    </div>
    <div className="col-12 col-md-4 p-2 review">
      <h4>Guillermo sobre "Bimbo"</h4>
      <i className="fas fa-star stars-reviews"></i>
      <i className="fas fa-star stars-reviews"></i>
      <i className="fas fa-star stars-reviews"></i>
      <i className="fas fa-star stars-reviews"></i>
      <i className="fas fa-star stars-reviews"></i>
      <p className="p-2">"Guillermo es un AMOR. Desde el primer minuto que entramos por su casa fue amor a primera vista con Penaut.
        Es responsable, cariñoso y se le nota desde el primer momento esa pasión por los animales."</p>
    </div>
  </div>
</div>
</section> */}