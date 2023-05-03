import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

// import { Demo } from "./pages/demo";
// import { Signle } from "./pages/Signle";

import Home from "./pages/Home.jsx";
import NavBar from "./component/NavBar/NavBar.jsx";
import LogInForm from "../js/component/LogInForm/LogInForm.jsx";
import SignUpForm from "./pages/SignUp.jsx";
import Contact from "./component/Contact/Contact.jsx";
import UserProfile from "./pages/UserProfile/UserProfile.jsx";
import Reserves from "./pages/Reserves/Reserves.jsx";
import Notifications from "./pages/Notifications/Notifications.jsx";
import Footer from "./component/Footer/Footer.jsx";
import PublicProfile from "./pages/PublicProfile/PublicProfile.jsx";
//import { MoreAbout } from "./pages/PublicProfile/MoreAbout";
//import context
import { AppProvider } from "../js/store/AppContext.js";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <AppProvider>
            <NavBar />
            <Contact />
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<LogInForm />} path="/log-in-form" />
              <Route element={<SignUpForm />} path="/sign-up-form" />
              <Route element={<UserProfile />} path="/user-profile" />
              <Route element={<Notifications />} path="/notifications" />
              <Route element={<PublicProfile />} path="/public-profile" />
              {/* <Route element={<MoreAbout />} path="/more-about" /> */}
              <Route element={<Reserves />} path="/reserves" />
              <Route element={<h1>Not found!</h1>} />
            </Routes>
            <Footer />
          </AppProvider>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default Layout;

{
  /*
  <Route element={<Demo />} path="/demo" />
  <Route element={<Signle />} path="/Signle/:theid" />
*/
}
