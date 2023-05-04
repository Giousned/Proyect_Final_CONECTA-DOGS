import React, { useEffect } from "react";
import "./PublicCardStyles.css";
import { useNavigate } from "react-router-dom";

const PublicCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className="public-profile">
      <img
        src="https://cdn.pixabay.com/photo/2017/12/27/14/02/friends-3042751_960_720.jpg" //{props.userImage}
        className="card-img-top"
        alt="..." //{prop.userImage + props.UserName}
      />
      <div className="card-body">
        <h4 className="nombre">Claudia{props.userName}</h4>
        <h6 className="Localizacion">
          <i class="fas fa-map-marker-alt"></i> Madrid{props.userLocation}
        </h6>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => navigate("/more-About")}
        >
          Más información
        </button>
      </div>
    </div>
  );
};
export default PublicCard;
