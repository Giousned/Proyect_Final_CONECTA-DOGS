import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

// import { Demo } from "./pages/demo";
// import { Signle } from "./pages/Signle";

import Home from "./pages/Home.jsx";
import NavBar from "./component/NavBar/NavBar.jsx";
import LogInForm from "../js/component/LogInForm/LogInForm.jsx";
import SignUpForm from "./pages/SignUp.jsx";
import Footer from "./component/Footer/Footer.jsx";
import { Contact } from "./component/Contact/Contact.jsx";
import { ProfileUser } from "./pages/ProfileUser/ProfileUser.jsx";

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
          <Contact />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<ProfileUser />} path="/profile-carer" />
            <Route element={<LogInForm />} path="/log-in-form" />
            <Route element={<SignUpForm />} path="/sign-up-form" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          {/*
            <Route element={<Demo />} path="/demo" />
            <Route element={<Signle />} path="/Signle/:theid" />
           */}
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
