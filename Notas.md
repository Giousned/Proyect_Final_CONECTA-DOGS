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

<!-- const Example = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
}; -->

# COPIAR CARPETA DE OTRA RAMA
git checkout NOMBRERAMA carpeta/