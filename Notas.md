# VOLVER AL ULTIMO COMMIT
git reset --hard

# INSTALAR FLASK+JWT 
pipenv install flask-jwt-extended

# INSTALAR DATEPICKER
npm install react-datepicker --save

import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

+INFO -> https://reactdatepicker.com/

<!-- const Example = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
}; -->

# COPIAR CARPETA DE OTRA RAMA
git checkout NOMBRERAMA carpeta/

# RESETEAR BASE DE DATOS
rm -R -f ./migrations &&
pipenv run init &&
psql -U gitpod -c 'DROP DATABASE example;' || true &&
psql -U gitpod -c 'CREATE DATABASE example;' &&
psql -U gitpod -c 'CREATE EXTENSION unaccent;' -d example &&
pipenv run migrate &&
pipenv run upgrade

MEJOR --> pipenv run reset_db

# UPGRADE DB
pipenv run upgrade

<!-- ********************** -->
# INSTALAR REACT SCROLL
npm install react-scroll                                <!-- npm i -S react-scroll -->

+INFO -> https://www.npmjs.com/package/react-scroll


Importe el paquete react-scroll:
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'                 <!-- import { Link, animateScroll as scroll } from "react-scroll"; -->


Añada el componente de enlace. El componente <Link /> apuntará a un área concreta de su aplicación:
<Link to="section1">

# USAR SERVICIO CLOUDINARY (API) PARA SUBIR FOTOS A LA BASE DE DATOS
  INSTALAR
pip install cloudinary

// Import
from cloudinary.uploader import upload
from cloudinary.utils import cloudinary_url

// Config
cloudinary.config(
  cloud_name = "drlf5uatk",
  api_key = "***************",
  api_secret = "****************",
  secure = true
)

// Upload
upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg", public_id="olympic_flag")

// Transform
url, options = cloudinary_url("olympic_flag", width=100, height=150, crop="fill")

# PRUEBAS SIN FUNCIONAR UTF-8

En .env
DATABASE_URL= mysql://root:root@localhost:3306/project       
              postgresql://pmg:pmg@postgres/pmg_test?client_encoding=utf8


# GOOGLE MAPS API KEY

AIzaSyB3UA-jwJRX-cRE0oZjYuAc43a-2GxWQCA