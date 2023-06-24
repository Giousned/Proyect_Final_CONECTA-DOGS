import React, { useState } from "react";

import MyReservesProfile from "./MyReservesProfile.jsx";
import ExpiredCard from "./components/ExpiredCard.jsx";

import NavTabButton from "./components/NavTabButton.jsx";

import "./ReservesStyles.css";

const ReservesProfile = () => {
  const [activeTab, setActiveTab] = useState("nearby");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="reserves">
      <div className="header">
        <h1 className="text-center p-4">RESERVAS</h1>
      </div>

      <div className="container p-4">
        <nav>
          {/* Fichas - Tabs */}
          <div className="col my-3 border rounded p-2 boxshadow">
            <ul
              className="nav nav-tabs justify-content-center"
              id="myReservesTab"
              role="tablist"
            >
                <NavTabButton 
                    id="nearby-tab"
                    label="RESERVAS PRÓXIMAS"
                    isActive={activeTab === "nearby"}
                    onClick={() => handleTabClick("nearby")}
                />
                <NavTabButton
                    id="past-tab"
                    label="RESERVAS PASADAS"
                    isActive={activeTab === "past"}
                    onClick={() => handleTabClick("past")}
                />
            </ul>
          </div>
        </nav>

        {/* Contenido de las fichas */}
        <div className="tab-content" id="myReservesTabContent">
          {/* Fichas de Reservas */}
          <div
            className="tab-pane show active fade"
            id="nearby-tab-pane"
            role="tabpanel"
            aria-labelledby="nearby-tab"
            tabIndex="0"
          >
            <MyReservesProfile />
          </div>

          {/* Fichas de Reservas Pasadas */}
          <div
            className="tab-pane fade"
            id="past-tab-pane"
            role="tabpanel"
            aria-labelledby="past-tab"
            tabIndex="0"
          >
            <ExpiredCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservesProfile;

//         <div
//           className="nav nav-tabs justify-content-center"
//           id="my-reserves-tab"
//           role="tablist"
//         >
//           <button
//             className="nav-link"
//             id="byme-reserves-tab"
//             data-bs-toggle="tab"
//             data-bs-target="#byme-reserves"
//             type="button"
//             role="tab"
//             aria-controls="byme-reserves"
//             aria-selected="false"
//           >
//             
//           </button>
//           <button
//             className="nav-link"
//             id="forme-reserves-tab"
//             data-bs-toggle="tab"
//             data-bs-target="#forme-reserves"
//             type="button"
//             role="tab"
//             aria-controls="forme-reserves"
//             aria-selected="false"
//           >
//             
//           </button>

//   <div
//     className="tab-pane fade"
//     id="byme-reserves"
//     role="tabpanel"
//     aria-labelledby="byme-reserves-tab"
//     tabIndex="0"
//   >
//     <div className="row">
//       <ReserveCard />
//     </div>
//   </div>
//   <div
//     className="tab-pane fade"
//     id="forme-reserves"
//     role="tabpanel"
//     aria-labelledby="forme-reserves-tab"
//     tabIndex="0"
//   >
//     <div className="row">
//       <ReserveCard />
//     </div>
//   </div>
// </div>
// </div>
