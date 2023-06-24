import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";


import Home from "./pages/Home.jsx";
import NavBar from "./component/NavBar/NavBar.jsx";
import LogInForm from "../js/component/LogInForm/LogInForm.jsx";
import SignUpForm from "./pages/SignUp.jsx";
import Contact from "./component/Contact/Contact.jsx";
import RecoveryPass from "./component/RecoveryPass/RecoveryPass.jsx";
import UserProfile from "./pages/UserProfile/UserProfile.jsx";
import ReservesProfile from "./pages/Reserves/ReservesProfile.jsx";
import ReserveInformation from "./pages/Reserves/components/ReserveInformation.jsx";
import Notifications from "./pages/Notifications/Notifications.jsx";
import CaregiversList from "./pages/Caregivers/CaregiversList.jsx";
import CaregiverInfo from "./pages/Caregivers/CaregiverInfo.jsx";
import Hire from "./pages/Hire/Hire.jsx";
import Alert from "./component/Alert/Alert.jsx";
import Footer from "./component/Footer/Footer.jsx";
import Protected from "./component/Protected/Protected.jsx";
import { Map } from "./pages/map.jsx";

//import contexts
import { AuthProvider } from "./store/AuthContext.js";
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
          <AuthProvider>
            <AppProvider>
              <Alert />
              <NavBar />
              <Contact />
              <RecoveryPass />
              <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<LogInForm />} path="/log-in-form" />
                <Route element={<SignUpForm />} path="/sign-up-form" />

                <Route element={<Protected><UserProfile /></Protected>} path="/user-profile" />
                <Route element={<Notifications />} path="/notifications" />
                <Route element={<CaregiversList />} path="/caregivers-list" />
                <Route element={<Map />} path="/map" />
                <Route element={<CaregiverInfo />} path="/caregiver-info/:id" />
                <Route element={<Hire />} path="/hire-caregiver/:id" />
                <Route element={<ReservesProfile />} path="/reserves" />
                <Route element={<ReserveInformation />} path="/reserve-information/:type/:id" />

                <Route element={<h1>Not found!</h1>} />
              </Routes>
              <Footer />
            </AppProvider>
          </AuthProvider>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default Layout;

