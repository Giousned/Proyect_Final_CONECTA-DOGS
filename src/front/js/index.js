//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

//import context
import { AppProvider } from "../../front/js/store/AppContext.js";

//render your react application
ReactDOM.render(<AppProvider><Layout /></AppProvider>, document.querySelector("#app"));