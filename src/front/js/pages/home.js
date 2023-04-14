import React from "react";

// import rigoImageUrl from "../../img/rigo-baby.jpg";
// import "../../styles/home.css";

import { Header } from "../component/Header.jsx";
import { AboutUs } from "../component/AboutUs.jsx";
import { Reviews } from "../component/Reviews.jsx";
import { Services } from "../component/Services.jsx";
import { Blog } from "../component/Blog.jsx";

export const Home = () => {

  return (
    <div className="text-center mt-5">
      <Header />
      <AboutUs />
      <Reviews />
      <Services />
      <Blog />
    </div>
  );
};
