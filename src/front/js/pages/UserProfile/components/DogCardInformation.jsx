import React from "react";

const DogCardInformation = (props) => {
  return (
    <div className="dogCardInformation">
      <div className="card text-bg-dark">
        <img
          src={props.image}
          className="card-img"
          alt={"Imagen de mi perrito" + props.dogName}
        />
        <div className="card-img-overlay d-flex justify-content-center">
          <div className="text-center text-info">
            <h5 className="card-title fw-bold fs-1">{props.dogName}</h5>
            <p className="card-text">
              <i className="fa-solid fa-dog fa-2xl"></i>
            </p>
            <p className="card-text">
              {props.dogSex} - {props.breed}
            </p>
            <p className="card-text fst-italic fs-4">
              <i className="fa-solid fa-shield-dog"></i> {props.microchip}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogCardInformation;
