import React, { useState } from "react";

import ReserveCardByMe from "./components/ReserveCardByMe.jsx";
import ReserveCardForMe from "./components/ReserveCardForMe.jsx";
import NavTabButton from "./components/NavTabButton.jsx";


const MyReservesProfile = () => {
  const [activeTab, setActiveTab] = useState("byMe");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
      <div className="container">
        <nav>
          {/* Fichas - Tabs */}
          <div className="col my-3 border rounded p-2 boxshadow">
            <ul
              className="nav nav-tabs justify-content-center"
              id="myReservesTab2"
              role="tablist"
            >
                <NavTabButton 
                    id="byMe-tab"
                    label="REALIZADAS POR MÍ"
                    isActive={activeTab === "byMe"}
                    onClick={() => handleTabClick("byMe")}
                />
                <NavTabButton
                    id="forMe-tab"
                    label="REALIZADAS HACIA MÍ"
                    isActive={activeTab === "forMe"}
                    onClick={() => handleTabClick("forMe")}
                />
            </ul>
          </div>
        </nav>

        {/* Contenido de las fichas */}
        <div className="tab-content" id="myReservesTab2Content">
          {/* Fichas de Reservas por mí */}
          <div
            className="tab-pane show active fade"
            id="byMe-tab-pane"
            role="tabpanel"
            aria-labelledby="byMe-tab"
            tabIndex="0"
          >
            <ReserveCardByMe />
          </div>

          {/* Fichas de Reservas hacia mí */}
          <div
            className="tab-pane fade"
            id="forMe-tab-pane"
            role="tabpanel"
            aria-labelledby="forMe-tab"
            tabIndex="0"
          >
            <ReserveCardForMe />
          </div>
        </div>
      </div>
  );
};

export default MyReservesProfile;
