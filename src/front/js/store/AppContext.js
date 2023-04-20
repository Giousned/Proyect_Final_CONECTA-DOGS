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
    const [nacimientoPerro, setNacimientoPerro] = useState(new Date());
    const [generoPerro, setGeneroPerro] = useState("");
    const [tamanoPequeno, setTamanoPequeno] = useState(false);
    const [tamanoMediano, setTamanoMediano] = useState(false);
    const [tamanoGrande, setTamanoGrande] = useState(false);
    const [tamanoGigante, setTamanoGigante] = useState(false);
    // Nº 3
    const [esterilizado, setEsterilizado] = useState("");
    const [sociableGatos, setSociableGatos] = useState("");
    const [sociableKids, setSociableKids] = useState("");
    const [sociablePerros, setSociablePerros] = useState("");
    const [microchip, setMicrochip] = useState("");
    const [observaciones, setObservaciones] = useState("");
    // Nº 4
    const [racionComida, setRacionComida] = useState("");
    const [horarioComidaManana, setHorarioComidaManana] = useState(false);
    const [horarioComidaTarde, setHorarioComidaTarde] = useState(false);
    const [horarioComidaNoche, setHorarioComidaNoche] = useState(false);
    const [horarioPaseosManana, setHorarioPaseosManana] = useState(false);
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
    const [codigoPostalPropietario, setCodigoPostalPropietario] = useState("");
    const [localidadPropietario, setLocalidadPropietario] = useState("");
    const [telefonoPropietario, setTelefonoPropietario] = useState("");

    // Nº 6 CUIDADOR
    const [fotoCuidador, setFotoCuidador] = useState("");
    const [nombreCuidador, setNombreCuidador] = useState("");
    const [apellidosCuidador, setApellidosCuidador] = useState("");
    const [emailRegistroCuidador, setEmailRegistroCuidador] = useState("");
    const [passwordRegistroCuidador, setPasswordRegistroCuidador] = useState("");
    const [direccionCuidador, setDireccionCuidador] = useState("");
    const [codigoPostalCuidador, setCodigoPostalCuidador] = useState("");
    const [localidadCuidador, setLocalidadCuidador] = useState("");
    const [telefonoCuidador, setTelefonoCuidador] = useState("");

    
  
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

    const handleLogOut = () => {

        sessionStorage.removeItem(token);
        setUserLog(false);
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
        tamanoPequeno,
        tamanoMediano,
        tamanoGrande,
        tamanoGigante,

        esterilizado, 
        sociableGatos,
        sociableKids, 
        sociablePerros,
        microchip,
        observaciones,

        racionComida,
        horarioComidaManana,
        horarioComidaTarde,
        horarioComidaNoche,
        horarioPaseosManana,
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
        setTamanoPequeno,
        setTamanoMediano,
        setTamanoGrande,
        setTamanoGigante,
        
        setEsterilizado,
        setSociableGatos,
        setSociableKids,
        setSociablePerros,
        setMicrochip,
        setObservaciones,

        setRacionComida,
        setHorarioComidaManana,
        setHorarioComidaTarde,
        setHorarioComidaNoche,
        setHorarioPaseosManana,
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
        handleLogOut,
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

// handleCheckTamanoPequeno: () => actions.setTamanoPequeno(!tamanoPequeno),
// handleCheckTamanoMediano: () => actions.setTamanoMediano(!tamanoMediano),
// handleCheckTamanoGrande: () => actions.setTamanoGrande(!tamanoGrande),
// handleCheckTamanoGigante: () => actions.setTamanoGigante(!tamanoGigante),

// handleCheckHorarioComidaManana: () => actions.setHorarioComidaManana(!horarioComidaManana),
// handleCheckHorarioComidaTarde: () => actions.setHorarioComidaTarde(!horarioComidaTarde),
// handleCheckHorarioComidaNoche: () => actions.setHorarioComidaNoche(!horarioComidaNoche),
// handleCheckHorarioPaseosManana: () => actions.setHorarioPaseosManana(!horarioPaseosManana),
// handleCheckHorarioPaseosTarde: () => actions.setHorarioPaseosTarde(!horarioPaseosTarde),
// handleCheckHorarioPaseosNoche: () => actions.setHorarioPaseosNoche(!horarioPaseosNoche),
// handleCheckActividadBaja: () => actions.setActividadBaja(!actividadBaja),
// handleCheckActividadMedia: () => actions.setActividadMedia(!actividadMedia),
// handleCheckActividadAlta: () => actions.setActividadAlta(!actividadAlta),

// // handleChange: (event) => setValue(event.target.value),