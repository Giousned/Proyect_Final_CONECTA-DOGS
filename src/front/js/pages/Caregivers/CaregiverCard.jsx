import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CaregiversStyles.css";

const CaregiverCard = ({ img, name, province, aboutMe, id }) => {

  return (
    <>
      <div className="card card-caregiver-list">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img}
              className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{aboutMe}</p>
              <p className="card-text">
                <i className="fas fa-map-marker-alt"></i> {province}
              </p>
              <div className="justify-content-md-end">
                <Link
                  to={`/caregiver-info/${id}`}
                  className="action-button shadow animate blue">
                  Ver más información
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaregiverCard;
