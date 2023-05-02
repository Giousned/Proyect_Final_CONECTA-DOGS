import React from "react";
import ReserveCard from "./ReserveCard.jsx";
import ReserveCard2 from "./ReserveCard2.jsx";
import "./reserves.css";

const Reserves = () => {
  return (
    <div className="reserves">
      <div className="header">
        <h1 className="text-center p-4">RESERVAS</h1>
      </div>

      <nav>
        <div className="nav nav-tabs bg-light" id="reserves-tab" role="tablist">
          <button
            className="nav-link active"
            id="nearby-reserves-tab"
            data-bs-toggle="tab"
            data-bs-target="#nearby-reserves"
            type="button"
            role="tab"
            aria-controls="nearby-reserves"
            aria-selected="true"
          >
            Reservas próximas
          </button>
          <button
            className="nav-link"
            id="past-reserves-tab"
            data-bs-toggle="tab"
            data-bs-target="#past-reserves"
            type="button"
            role="tab"
            aria-controls="past-reserves"
            aria-selected="false"
          >
            Reservas pasadas
          </button>
        </div>
      </nav>

      <div className="tab-content" id="nav-tabContent">
        <div
          className="container tab-pane fade show active"
          id="nearby-reserves"
          role="tabpanel"
          aria-labelledby="nearby-reserves-tab"
          tabindex="0"
        >
          <div className="row">
            <ReserveCard />
            <ReserveCard />
          </div>
        </div>
        <div
          className="container tab-pane fade"
          id="past-reserves"
          role="tabpanel"
          aria-labelledby="past-reserves-tab"
          tabindex="0"
        >
          <div className="row">
            <ReserveCard2 />
            <ReserveCard2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reserves;