import React from "react";

import { POSTLogin, POSTRegister, GETToken } from "../services/Fetchs.js";

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [userLog, setUserLog] = useState(false);
    const [token, setToken] = useState("");

    // FORMULARIO INICIO
    const [emailInicio, setEmailInicio] = useState("");
    const [passwordInicio, setPasswordInicio] = useState("");
    const [recordarme, setRecordarme] = useState(false);

    // FORMULARIOS REGISTRO: Nº 1
    const [propietario, setPropietario] = useState(false);
    const [cuidador, setCuidador] = useState(false);
    // Nº 2
    const [fotoPerro, setFotoPerro] = useState("");
    const [nombrePerro, setNombrePerro] = useState("");
    const [razaPerro, setRazaPerro] = useState("");
    const [nacimientoPerro, setNacimientoPerro] = useState("");
    const [generoPerro, setGeneroPerro] = useState("");
    const [tamañoPequeño, setTamañoPequeño] = useState(false);
    const [tamañoMediano, setTamañoMediano] = useState(false);
    const [tamañoGrande, setTamañoGrande] = useState(false);
    const [tamañoGigante, setTamañoGigante] = useState(false);
    // Nº 3
    const [esterilizado, setEsterilizado] = useState("");
    const [sociableGatos, setSociableGatos] = useState("");
    const [sociableKids, setSociableKids] = useState("");
    const [sociablePerros, setSociablePerros] = useState("");
    const [microchip, setMicrochip] = useState(0);
    const [observaciones, setObservaciones] = useState("");
    // Nº 4
    const [racionComida, setRacionComida] = useState(0);
    const [horarioComidaMañana, setHorarioComidaMañana] = useState(false);
    const [horarioComidaTarde, setHorarioComidaTarde] = useState(false);
    const [horarioComidaNoche, setHorarioComidaNoche] = useState(false);
    const [horarioPaseosMañana, setHorarioPaseosMañana] = useState(false);
    const [horarioPaseosTarde, setHorarioPaseosTarde] = useState(false);
    const [horarioPaseosNoche, setHorarioPaseosNoche] = useState(false);
    const [actividadBaja, setActividadBaja] = useState(false);
    const [actividadMedia, setActividadMedia] = useState(false);
    const [actividadAlta, setActividadAlta] = useState(false);
    const [masInformacionPerros, setMasInformacionPerros] = useState("");
    // Nº 5 PROPIETARIO
    const [fotoPropietario, setFotoPropietario] = useState("");
    const [nombrePropietario, setNombrePropietario] = useState("");
    const [apellidosPropietario, setApellidosPropietario] = useState("");
    const [emailRegistroPropietario, setEmailRegistroPropietario] = useState("");
    const [passwordRegistroPropietario, setPasswordRegistroPropietario] = useState("");
    const [direccionPropietario, setDireccionPropietario] = useState("");
    const [codigoPostalPropietario, setCodigoPostalPropietario] = useState(0);
    const [localidadPropietario, setLocalidadPropietario] = useState("");
    const [telefonoPropietario, setTelefonoPropietario] = useState(0);

    // Nº 6 CUIDADOR
    const [fotoCuidador, setFotoCuidador] = useState("");
    const [nombreCuidador, setNombreCuidador] = useState("");
    const [apellidosCuidador, setApellidosCuidador] = useState("");
    const [emailRegistroCuidador, setEmailRegistroCuidador] = useState("");
    const [passwordRegistroCuidador, setPasswordRegistroCuidador] = useState("");
    const [direccionCuidador, setDireccionCuidador] = useState("");
    const [codigoPostalCuidador, setCodigoPostalCuidador] = useState(0);
    const [localidadCuidador, setLocalidadCuidador] = useState("");
    const [telefonoCuidador, setTelefonoCuidador] = useState(0);

    
  
    const handleSubmitRegisterPropietario = (e) => {
      e.preventDefault();
  
      POSTRegister(emailRegistroPropietario, passwordRegistroPropietario)
        .then(() => {
            setEmailRegistro("");
            setPasswordRegistro("");
        })

    };

    const handleSubmitRegisterCuidador = (e) => {
        e.preventDefault();
    
        POSTRegister(emailRegistroCuidador, passwordRegistroCuidador)
          .then(() => {
              setEmailRegistro("");
              setPasswordRegistro("");
          })
  
      };
  
    const handleSubmitLogIn = (e) => {
      e.preventDefault();
  
      POSTLogin(emailInicio, passwordInicio)
        .then((data) => {
            setToken(data.token)
            setEmailInicio("");
            setPasswordInicio("");
            setUserLog(true);
        })

        // getMyTasks(email, password);
    };
    
    const store = {
        userLog,
        token,

        emailInicio,
        passwordInicio,
        recordarme,

        propietario,
        cuidador,

        fotoPerro,
        nombrePerro,
        razaPerro,
        nacimientoPerro,
        generoPerro,
        tamañoPequeño,
        tamañoMediano,
        tamañoGrande,
        tamañoGigante,

        esterilizado, 
        sociableGatos,
        sociableKids, 
        sociablePerros,
        microchip,
        observaciones,

        racionComida,
        horarioComidaMañana,
        horarioComidaTarde,
        horarioComidaNoche,
        horarioPaseosMañana,
        horarioPaseosTarde,
        horarioPaseosNoche,
        actividadBaja,
        actividadMedia,
        actividadAlta,
        masInformacionPerros,
        
        fotoPropietario,
        nombrePropietario,
        apellidosPropietario,
        emailRegistroPropietario,
        passwordRegistroPropietario,
        direccionPropietario,
        codigoPostalPropietario,
        localidadPropietario,
        telefonoPropietario,

        fotoCuidador,
        nombreCuidador,
        apellidosCuidador,
        emailRegistroCuidador,
        passwordRegistroCuidador,
        direccionCuidador,
        codigoPostalCuidador,
        localidadCuidador,
        telefonoCuidador,
    };
  
    const actions = {    
        setUserLog,
        setToken,

        setEmailInicio,
        setPasswordInicio,
        setRecordarme,

        setPropietario,
        setCuidador,

        setFotoPerro,
        setNombrePerro,
        setRazaPerro,
        setNacimientoPerro,
        setGeneroPerro,
        setTamañoPequeño,
        setTamañoMediano,
        setTamañoGrande,
        setTamañoGigante,
        
        setEsterilizado,
        setSociableGatos,
        setSociableKids,
        setSociablePerros,
        setMicrochip,
        setObservaciones,

        setRacionComida,
        setHorarioComidaMañana,
        setHorarioComidaTarde,
        setHorarioComidaNoche,
        setHorarioPaseosMañana,
        setHorarioPaseosTarde,
        setHorarioPaseosNoche,
        setActividadBaja,
        setActividadMedia,
        setActividadAlta,
        setMasInformacionPerros,

        setFotoPropietario,
        setNombrePropietario,
        setApellidosPropietario,
        setEmailRegistroPropietario,
        setPasswordRegistroPropietario,
        setDireccionPropietario,
        setCodigoPostalPropietario,
        setLocalidadPropietario,
        setTelefonoPropietario,

        setFotoCuidador,
        setNombreCuidador,
        setApellidosCuidador,
        setEmailRegistroCuidador,
        setPasswordRegistroCuidador,
        setDireccionCuidador,
        setCodigoPostalCuidador,
        setLocalidadCuidador,
        setTelefonoCuidador,


        handleSubmitRegisterPropietario,
        handleSubmitRegisterCuidador,
        handleSubmitLogIn,
    };

    return (
        <AppContext.Provider value={{store, actions}}>
            {children}
        </AppContext.Provider>
    );
}

const useAppContext = () => useContext(AppContext);

export default useAppContext;


// handleCheckRecordarme: () => actions.setRecordarme(!recordarme),

// handleCheckPropietario: () => actions.setPropietario(!propietario),
// handleCheckCuidador: () => actions.setCuidador(!cuidador),

// handleCheckTamañoPequeño: () => actions.setTamañoPequeño(!tamañoPequeño),
// handleCheckTamañoMediano: () => actions.setTamañoMediano(!tamañoMediano),
// handleCheckTamañoGrande: () => actions.setTamañoGrande(!tamañoGrande),
// handleCheckTamañoGigante: () => actions.setTamañoGigante(!tamañoGigante),

// handleCheckHorarioComidaMañana: () => actions.setHorarioComidaMañana(!horarioComidaMañana),
// handleCheckHorarioComidaTarde: () => actions.setHorarioComidaTarde(!horarioComidaTarde),
// handleCheckHorarioComidaNoche: () => actions.setHorarioComidaNoche(!horarioComidaNoche),
// handleCheckHorarioPaseosMañana: () => actions.setHorarioPaseosMañana(!horarioPaseosMañana),
// handleCheckHorarioPaseosTarde: () => actions.setHorarioPaseosTarde(!horarioPaseosTarde),
// handleCheckHorarioPaseosNoche: () => actions.setHorarioPaseosNoche(!horarioPaseosNoche),
// handleCheckActividadBaja: () => actions.setActividadBaja(!actividadBaja),
// handleCheckActividadMedia: () => actions.setActividadMedia(!actividadMedia),
// handleCheckActividadAlta: () => actions.setActividadAlta(!actividadAlta),

// // handleChange: (event) => setValue(event.target.value),