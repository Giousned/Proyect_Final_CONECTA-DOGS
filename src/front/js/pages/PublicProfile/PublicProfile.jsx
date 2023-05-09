import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { GET_All_Users, GET_Carers } from "../../services/USERFetchs";


import PublicCard from "../../component/PublicCard/PubliCard.jsx";

import "../PublicProfile/PublicProfileStyles.css";



const PublicProfile = () => {
  const [ todosUsers, setTodosUsers ] = useState("");
  const [ todosCarers, setTodosCarers ] = useState("");

  const navigate = useNavigate();

  
  //guardos info q me trae el fetch en un estado,mapeo el array q me acabo d guardar
  // y en cada iteraccion dl mapeo metes mi componenete public card pasandole props

  useEffect(() => {
    GET_All_Users()
      .then((data) => setTodosUsers(data) )                         
    GET_Carers()
      .then((data) => setTodosCarers(data))                        
  }, []);



  return (
    <>
      <PublicCard />
    </>
  );
};

export default PublicProfile;
