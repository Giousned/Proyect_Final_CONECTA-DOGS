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

import SignUpForm1 from "./component/SignUpForm/SignUpForm1.jsx";
import SignUpForm2 from "./component/SignUpForm/SignUpForm2.jsx";
import SignUpForm3 from "./component/SignUpForm/SignUpForm3.jsx";
import SignUpForm4 from "./component/SignUpForm/SignUpForm4.jsx";

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
            <Route element={<SignUpForm />} path="/sign-up-form" />
            <Route element={<h1>Not found!</h1>} />

            <Route element={<SignUpForm1 />} path="/sign-up-form2" />
            <Route element={<SignUpForm2 />} path="/sign-up-form3" />
            <Route element={<SignUpForm3 />} path="/sign-up-form4" />
            <Route element={<SignUpForm4 />} path="/sign-up-form-c1" />
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
