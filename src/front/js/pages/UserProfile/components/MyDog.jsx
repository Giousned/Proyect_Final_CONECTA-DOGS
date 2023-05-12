import React, { useEffect, useState } from "react";

import DogInformation from "../../../component/Forms/DogInformation.jsx";
import DogInformationRegister from "../../../component/Forms/DogInformationRegister.jsx";
import DogCardInformation from "./DogCardInformation.jsx";

import useAuthContext from "../../../store/AuthContext.js";


const MyDog = () => {
  const { storeAuth, actionsAuth } = useAuthContext();

  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    setActiveTab("");
  }, [storeAuth.userLog.user])

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <h3 className="my-4">Mis perros</h3>
      {/* <div className="avatar-dog my-3"></div> */}

      <ul className="nav nav-tabs" id="myDogsInfoTab" role="tablist">
        {storeAuth.userLog.user.dogs
          ? storeAuth.userLog.user.dogs.map((dogInfo, index) => {
              return (
                <li className="nav-item" role="presentation" key={index}>
                  <button
                    className="nav-link d-flex"
                    id={`${dogInfo.dogName}-tab`}
                    data-bs-toggle="tab"
                    data-bs-target={`#${dogInfo.dogName}-tab`}
                    type="button"
                    role="tab"
                    aria-controls={`${dogInfo.dogName}-tab`}
                    onClick={() => handleTabClick(`${dogInfo.dogName}`)}
                    aria-selected={activeTab === `${dogInfo.dogName}`}
                  >
                    <DogCardInformation
                      image="https://cdn-icons-png.flaticon.com/512/3636/3636172.png"
                      dogInfo={dogInfo}
                    />
                  </button>
                </li>
              );
            })
          : null}
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="add-dog-tab"
            data-bs-toggle="tab"
            data-bs-target="#add-dog-tab"
            type="button"
            role="tab"
            aria-controls="add-dog-tab"
            onClick={() => handleTabClick("add-dog")}
            aria-selected={activeTab === "add-dog"}
          >
            <div className="dog-card-information">
              <div className="card">
                <img
                  src="https://img.freepik.com/vector-premium/fondo-invitacion-tarjeta-dia-san-valentin-animales-pareja-perros-enamorados_194708-1801.jpg?w=2000"
                  className="card-img"
                  alt="Tarjeta para añadir un perro nuevo"
                />
                <div className="card-img-overlay d-flex justify-content-center align-middle">
                  <div className="text-center text-warning">
                    <h5 className="card-title fw-bold fs-1">Añadir Perro</h5>
                    <p className="card-text fs-1">
                      <i className="fa-solid fa-circle-plus fa-lg"></i>
                    </p>
                    <p className="card-text fst-italic fs-4">Pulsa aquí</p>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myDogsInfoTabContent">
        {storeAuth.userLog.user.dogs
            ? storeAuth.userLog.user.dogs.map((dogInfo, index) => {
              return(
                <div
                key={index}
                className={
                  "tab-pane fade" +
                  (activeTab === `${dogInfo.dogName}`
                    ? "show active"
                    : "")
                }
                id={`${dogInfo.dogName}-tab`}
                role="tabpanel"
                aria-labelledby={`${dogInfo.dogName}-tab`}
                tabIndex="0"
              >
                <div className="container mt-4">

                  <div className="d-flex justify-content-center fs-2 fw-bold"> PERFIL DE MI PERRO </div>

                  <img className="avatar-dog my-3" src={dogInfo.dogPhoto} alt="Foto de mi perrito" />
                  
                  <div className="container mt-4">
                    <DogInformation dogInfo={dogInfo} />
                  </div>

                </div>
              </div>
              );
            })
            : null
        }

        <div
          className={
            "tab-pane fade" + (activeTab === "add-dog" ? "show active" : "")
          }
          id="add-dog"
          role="tabpanel"
          aria-labelledby="add-dog-tab"
          tabIndex="0"
        >
          <div className="container mt-4">
            {activeTab === "add-dog" && <DogInformationRegister />}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyDog;



{
  /* <DogCardInformation
image="https://img.freepik.com/fotos-premium/perrito-lindo-pequeno-posando-alegre-aislado-gris_155003-42660.jpg"
/> */
}
