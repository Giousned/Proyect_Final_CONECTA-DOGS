import React, { useEffect } from "react";
import "./public-profile.css";
import { useNavigate } from "react-router-dom";
import { GET_All_Users } from "../../services/USERFetchs";
import PublicCard from "../../component/PublicCard/PubliCard";

const PublicProfile = () => {
  useEffect(() => {
    const allUser = GET_All_Users(); //guardos info q me trae el fetch en un estado,mapeo el array q me acabo d guardar y en cada iteraccion dl mapeo metes mi componenete public card pasandole props
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <PublicCard />
    </>
  );
};
export default PublicProfile;
