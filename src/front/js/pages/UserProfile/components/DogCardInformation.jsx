import React from "react";

const DogCardInformation = (props) => {
  return (
    <div className="dog-card-information">
      <div className="card text-bg-dark">
        <img
          src={props.image}
          className="imagen-tarjeta-perrito-user card-img"
          alt={"Imagen de mi perrito" + props.dogInfo.dogName}
        />
        <div className="card-img-overlay d-flex justify-content-center">
          <div className="text-center text-info">
            <h5 className="card-title fw-bold fs-2">{props.dogInfo.dogName}</h5>
            <p className="card-text">
              <i className="fa-solid fa-dog fa-2xl"></i>
            </p>
            <p className="card-text">
              {props.dogInfo.dogSex} - {props.dogInfo.breed}
            </p>
            <p className="card-text fst-italic fs-4">
              <i className="fa-solid fa-shield-dog"></i> {props.dogInfo.microchip}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogCardInformation;
