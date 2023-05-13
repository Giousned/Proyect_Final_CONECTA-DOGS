import React from "react";

import useAppContext from "../../../store/AppContext.js";

import ServiceCard from "../../../component/Services/ServiceCard.jsx";

const ServicesRates = () => {
  const { store, actions } = useAppContext();

  const handleNumDogsChange = (event) => {
    const numDogs = Number(event.target.value);
    if (numDogs >= 11) {
      alert("Número máximo de perros admitidos por cuidador es de 10");
      return;
    }
    actions.handleUserInput(event);
  };

  return (
    <>
      <h3 className="my-4">
        Si quieres convertirte en cuidador activa los servicios y tarifas que
        ofreces
      </h3>

      {/* <div className="container py-4">
                <h5 className="mb-4">El usuario admite: {userInput.numDogs} perro/s</h5>
                <label htmlFor="numDogs">Elige el número de perros que puedes admitir en tu casa:</label>
                <input type="number" id="numDogs" min="0" max="10"
                    name="numDogs" value={userInput.numDogs}
                    onChange={handleNumDogsChange}
                />
            </div> */}

      <div className="container services-rates-checkbox">
        <div className="row">
          <div className={"col-12 col-md me-2 glowing-register-rates" + ((store.userInput.nurseryDay == true) ? " activeGlowRates" : "")}>
            <label className="form-check-label d-block mb-2" htmlFor="guarderia-diurna">
              <img
                src="https://cdn.pixabay.com/photo/2017/01/17/16/46/sun-1987414_960_720.png"
                className="custom-icon"
                alt="Guardería de Día"
              />
              <h5>Guardería Diurna</h5>
              <h5>(Alojamiento de día)</h5>
            </label>
            <input
              type="checkbox"
              className="form-check-input"
              name="nurseryDay"
              id="guarderia-diurna"
              value={store.userInput.nurseryDay}
              onChange={actions.handleUserCheck}
              checked={store.userInput.nurseryDay}
            />
            <input
              type="text"
              className="form-control"
              id="precio-guarderia-diurna"
              aria-describedby="precio_guarderia_diurna"
              placeholder="Precio en €"
              name="priceNurseryDay"
              value={store.userInput.priceNurseryDay}
              onChange={actions.handleUserInput}
            />
          </div>

          <div className={"col-12 col-md me-2 glowing-register-rates" + ((store.userInput.walk == true) ? " activeGlowRates" : "")}>
            <label className="form-check-label d-block mb-2" htmlFor="paseo">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/31/21/38/canines-1296551_960_720.png"
                className="custom-icon"
                alt="Guardería de Día"
              />
              <h5>Paseo</h5>
              <h5>(Por horas)</h5>
            </label>
            <input
              type="checkbox"
              className="form-check-input"
              name="walk"
              id="paseo"
              value={store.userInput.walk}
              onChange={actions.handleUserCheck}
              checked={store.userInput.walk}
            />
            <input
              type="text"
              className="form-control"
              id="precio-paseo"
              aria-describedby="precio_paseo"
              placeholder="Precio en €"
              name="priceWalk"
              value={store.userInput.priceWalk}
              onChange={actions.handleUserInput}
            />
          </div>

          <div className={"col-12 col-md me-2 glowing-register-rates" + ((store.userInput.nurseryNight == true) ? " activeGlowRates" : "")}>
            <label className="form-check-label d-block mb-2" htmlFor="guarderia-nocturna">
              <img
                src="https://cdn.pixabay.com/photo/2017/01/17/16/45/night-1987408_960_720.png"
                className="custom-icon"
                alt="Guardería de Día"
              />
              <h5>Guardería Nocturna</h5>
              <h5>(Alojamiento de noche)</h5>
            </label>
            <input
              type="checkbox"
              className="form-check-input"
              name="nurseryNight"
              id="guarderia-nocturna"
              value={store.userInput.nurseryNight}
              onChange={actions.handleUserCheck}
              checked={store.userInput.nurseryNight}
            />
            <input
              type="text"
              className="form-control"
              id="precio-guarderia-nocturna"
              aria-describedby="precio_guarderia_nocturna"
              placeholder="Precio en €"
              name="priceNurseryNight"
              value={store.userInput.priceNurseryNight}
              onChange={actions.handleUserInput}
            />
          </div>
        </div>
      </div>


      <h3 className="my-4">Preferencias de Pago/Cobro</h3>
      <div className="container">
        <div className="row">

          <div className="col-12 col-md me-2">
            <label className="form-check-label" htmlFor="tarjeta">
              <img
                src="https://cdn.pixabay.com/photo/2013/03/02/01/25/american-express-89024_960_720.jpg"
                className="custom-icon"
                alt="Tarjeta" />
              <h4>Tarjeta</h4>
            </label>
            <input type="checkbox" className="form-check-input" name="tarjeta" id="tarjeta" />
          </div>

          <div className="col-12 col-md me-2">
            <label className="form-check-label" htmlFor="paypal">
              <img
                src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_960_720.png"
                className="custom-icon"
                alt="Paypal" />
              <h4>Paypal</h4>
            </label>
            <input type="checkbox" className="form-check-input" name="paypal" id="paypal" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesRates;
