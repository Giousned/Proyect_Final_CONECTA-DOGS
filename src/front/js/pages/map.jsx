import React, { useEffect } from "react";
// import { Context } from "./store/appContext";

export const Map = () => {
    // const { store, actions } = useContext(Context);
	let map;
	let marker;
	//geolocalización
	let watchID;
	let geoLoc

	function showLocationOnMap(position){
		let latitud = position.coords.latitude
		let longitud = position.coords.longitude
		console.log("Latitud: "+ latitud +", Longitud: "+ longitud)

		const myLatLng = {lat:latitud, lng:longitud}
		marker.setPosition(myLatLng)
		map.setCenter(myLatLng)
	}
	function errorHandler(err){
		if(err.code == 1){
			alert("Acceso denegado")
		} else if (err.code == 2){
			alert("posicion no existe")
		}
	}
	function getPosition(){
		if(navigator.geolocation){
			//ejecuta cada 60000 milisegundos
			let options = {timeout:60000}
			geoLoc = navigator.geolocation
			watchID = geoLoc.watchPosition(showLocationOnMap, errorHandler,options)
		} else{
			alert("Lo sentimos,el explorador no soporta la geolocalización")
		}
	}
	function initMap() {
		const myLatLng = { lat: -25.363, lng: 131.044}
		map = new google.maps.Map(document.getElementById("map"),{
			center: myLatLng,
			zoom:11,
		});
		marker = new google.maps.Marker({
			position: myLatLng,
			map,
			title: "Aquí el mapa"
		});
		getPosition()
	}
	useEffect(async () => {
		initMap()
	}, [])

	//en el div app se va a generar el mapa 
	return(
		<>
		<div id="map" className="mapita"></div>
		<div>
			<p>tienes que tocar los estilos del mapa desde el panel de control de la api de maps</p>
			<h1>notas para ver el mapa:</h1>
			<p>clic derecho inspeccionar, abre el div app donde renderiza todo tu react <br></br> selecciona el div con id "map" y quitale el position:relative</p>
		</div>
		</>
	);
};

