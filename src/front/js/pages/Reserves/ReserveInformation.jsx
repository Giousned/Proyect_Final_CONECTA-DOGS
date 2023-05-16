import React from "react";
import { Link } from "react-router-dom";
import ReserveInformationDog from "./ReserveInformationDog.jsx";
import ReserveInformationUser from "./ReserveInformationUser.jsx";

const ReserveInformation = () => {

  return (
    <>
      <div className="reserves">
        <div className="header">
          <h1 className="text-center p-4">RESERVAS</h1>
        </div>
      </div>

      <div className="container p-4">
        <ul className="nav nav-pills mb-3 justify-content-center"
          id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="reserveInformationUser"
              data-bs-toggle="pill" data-bs-target="#pills-user"
              type="button" role="tab"
              aria-controls="pills-user" aria-selected="true">
              INFORMACIÓN GENERAL
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="reserveInformationDog"
              data-bs-toggle="pill" data-bs-target="#pills-dog"
              type="button" role="tab"
              aria-controls="pills-dog" aria-selected="false">
              INFORMACIÓN DEL PERRO A CUIDAR
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-user" role="tabpanel"
            aria-labelledby="reserveInformationUser" tabIndex="0">
            <ReserveInformationUser />
          </div>
          <div className="tab-pane fade" id="pills-dog" role="tabpanel"
            aria-labelledby="reserveInformationDog" tabIndex="0">
            <ReserveInformationDog />
          </div>
        </div>
      </div>

      <div className="p-4">
        <Link to="/reserves" className="action-button shadow animate yellow text-center">
          Ir Atrás
        </Link>
      </div>
    </>
  );
};

export default ReserveInformation;
