import React from "react";
import ReserveCard from "./ReserveCard.jsx";
import ReserveCard2 from "./ReserveCard2.jsx";
import "./ReservesStyles.css";

const Reserves = () => {
  return (
    <div className="reserves">
      <div className="header">
        <h1 className="text-center p-4">RESERVAS</h1>
      </div>

      <div className="container p-4">
        <nav>
          <div className="nav nav-tabs justify-content-center" id="reserves-tab" role="tablist">
            <button className="nav-link active" id="nearby-reserves-tab"
              data-bs-toggle="tab" data-bs-target="#nearby-reserves"
              type="button" role="tab"
              aria-controls="nearby-reserves"
              aria-selected="true">
              RESERVAS PRÓXIMAS
            </button>
            <button className="nav-link" id="past-reserves-tab"
              data-bs-toggle="tab" data-bs-target="#past-reserves"
              type="button" role="tab"
              aria-controls="past-reserves"
              aria-selected="false">
              RESERVAS PASADAS
            </button>
          </div>
        </nav>
      </div>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nearby-reserves"
          role="tabpanel" aria-labelledby="nearby-reserves-tab" tabIndex="0">
          <ReserveCard />
        </div>
        <div className="tab-pane fade" id="past-reserves"
          role="tabpanel" aria-labelledby="past-reserves-tab" tabIndex="0">
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
