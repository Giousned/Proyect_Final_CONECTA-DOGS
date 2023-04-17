import React from "react";
import { Link } from "react-router-dom";

import { LINKSNAVBAR } from "../constants/LinksNavbar.jsx";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0">Home</span>
        </Link>

		<div className="ml-auto me-5">
		{LINKSNAVBAR.map((item, index) => {
          return (
            <Link to={item.link} key={index}>
              <span className="navbar-brand">{item.label}</span>
            </Link>
          );
        })}
		</div>

        
      </div>
    </nav>
  );
};
