import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

// import { Home } from "./pages/home";
// import { Demo } from "./pages/demo";
// import { Single } from "./pages/single";
import { LoginSubmit } from "./pages/LoginSubmit.jsx";
<<<<<<< HEAD
import LogInForm from "../js/component/LogInForm/LogInForm.jsx";
=======
import injectContext from "./store/appContext";
>>>>>>> 631218b9049832417af83e3e557da1040447fa9a

import { Home } from "./pages/Home.jsx";
import { NavBar } from "./component/NavBar/NavBar.jsx";
import { Footer } from "./component/Footer/Footer.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
<<<<<<< HEAD
          <NavBar />
          <Routes>
=======
          <Navbar />
          <Routes>
          <Route element={<LoginSubmit />} path="/LoginSubmit" />
          </Routes>
          {/* <Routes>
>>>>>>> 631218b9049832417af83e3e557da1040447fa9a
            <Route element={<Home />} path="/" />
            <Route element={<LoginSubmit />} path="/LoginSubmit" />
            <Route element={<LogInForm />} path="/LogInForm" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          {/*
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
           */}
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
