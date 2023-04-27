import React from "react";

// import rigoImageUrl from "../../img/rigo-baby.jpg";
// import "../../styles/home.css";

import Header from "../component/Header/Header.jsx";
import AboutUs from "../component/AboutUs/AboutUs.jsx";
import Reviews from "../component/Reviews/Reviews.jsx";
import Services from "../component/Services/Services.jsx";
import Blog from "../component/Blog/Blog.jsx";

const Home = () => {
  return (
    <div className="text-center">
      <Header />
      <AboutUs />
      <Reviews />
      <Services />
      <Blog />
    </div>
  );
};

export default Home;
