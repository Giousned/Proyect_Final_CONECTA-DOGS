//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

//import context
import { AuthProvider } from "./store/AuthContext.js";

//render your react application
ReactDOM.render(
  <AuthProvider>
    <Layout />
  </AuthProvider>,
  document.querySelector("#app")
);

// Ir Arriba - Go Up - Scroll
$(document).ready(function(){

	$('.go-up').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.go-up').slideDown(300);
		} else {
			$('.go-up').slideUp(300);
		}
	});

});