import React from "react";
import "../pages/PublicProfile/PublicProfileStyles.css";
import { useNavigate } from "react-router-dom";

const MoreAbout = () => {
  const navigate = useNavigate();

  return (
    <div className="more-about-user">
      <img
        src="https://cdn.pixabay.com/photo/2017/12/27/14/02/friends-3042751_960_720.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body-more-about">
        <h4 className="name">Claudia</h4>
        <h6 className="Localizacion">Sevilla</h6>
        <p className="more-about-me">
          Me encantan los perros.Disfruto mucho sacndolos de paseo.Tengo
          experiencia trabajando en una perrera que lleva la ONG "perritos sin
          casa"
        </p>
        <h6 className="Servicios y Tarifas">Servicios y Tarifas</h6>
        <li>Guarderia de dia//precio</li>
        <li>Guarderia de noche//precio</li>
        <li>Paseos (por hora)//precio</li>
        <button onClick={() => navigate(-1)}>Cuidadores</button>
        <button type="button" className="btn btn-success">
          Contratar
        </button>
      </div>
    </div>
  );
};

export default MoreAbout;
