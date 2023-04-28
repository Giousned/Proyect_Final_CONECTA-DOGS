import React from "react";
import "./public-profile.css";

const PublicProfileMas = () => {
  return (
    <div className="public-profile-mas">
      <div className="ppmas-info">
        <img
          src="https://cdn.pixabay.com/photo/2017/12/27/14/02/friends-3042751_960_720.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body-masinfo">
          <h5 className="name">Claudia</h5>
          <p className="more-about-me">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};
