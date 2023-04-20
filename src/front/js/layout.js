import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

// import { Demo } from "./pages/demo";
// import { Single } from "./pages/single";
import LogInForm from "../js/component/LogInForm/LogInForm.jsx";
import SingUpForm1 from "./component/SingUpForm/SingUpForm1.jsx";
import SingUpForm2 from "./component/SingUpForm/SingUpForm2.jsx";
import SingUpForm3 from "./component/SingUpForm/SingUpForm3.jsx";
import SingUpForm4 from "./component/SingUpForm/SingUpForm4.jsx";

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
          <NavBar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<LogInForm />} path="/log-in-form" />
            <Route element={<SingUpForm1 />} path="/sign-up-form" />
            <Route element={<SingUpForm2 />} path="/sign-up-form2" />
            <Route element={<SingUpForm3 />} path="/sign-up-form3" />
            <Route element={<SingUpForm4 />} path="/sign-up-form-c1" />
            {/* <Route element={<LogInForm2 />} path="/LogInForm2" /> */}
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
