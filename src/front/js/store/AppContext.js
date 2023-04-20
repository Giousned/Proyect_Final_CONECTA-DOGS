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

    // FORMULARIOS REGISTRO: USER Nº 1
    const [fotoUser, setFotoUser] = useState("");
    const [nombreUser, setNombreUser] = useState("");
    const [apellidosUser, setApellidosUser] = useState("");
    const [emailRegistro, setEmailRegistro] = useState("");
    const [passwordRegistro, setPasswordRegistro] = useState("");
    const [direccion, setDireccion] = useState("");
    const [codigoPostal, setCodigoPostal] = useState("");
    const [localidad, setLocalidad] = useState("");
    const [telefono, setTelefono] = useState("");
    const [propietario, setPropietario] = useState(false);
    const [cuidador, setCuidador] = useState(false);

    // PERROS Nº 2
    const [fotoPerro, setFotoPerro] = useState("");
    const [nombrePerro, setNombrePerro] = useState("");
    const [razaPerro, setRazaPerro] = useState("");
    const [nacimientoPerro, setNacimientoPerro] = useState(new Date());
    const [generoPerro, setGeneroPerro] = useState("");
    const [tamanoPequeno, setTamanoPequeno] = useState(false);
    const [tamanoMediano, setTamanoMediano] = useState(false);
    const [tamanoGrande, setTamanoGrande] = useState(false);
    const [tamanoGigante, setTamanoGigante] = useState(false);
    // PERROS Nº 3
    const [esterilizado, setEsterilizado] = useState("");
    const [sociableGatos, setSociableGatos] = useState("");
    const [sociableKids, setSociableKids] = useState("");
    const [sociablePerros, setSociablePerros] = useState("");
    const [actividadBaja, setActividadBaja] = useState(false);
    const [actividadMedia, setActividadMedia] = useState(false);
    const [actividadAlta, setActividadAlta] = useState(false);
    const [microchip, setMicrochip] = useState("");
    const [observaciones, setObservaciones] = useState("");


    // CUIDADOR Nº4
    const [guarderiaDiurna, setGuarderiaDiurna] = useState("");
    const [precioGuarderiaDiurna, setPrecioGuarderiaDiurna] = useState("");
    const [paseo, setPaseo] = useState("");
    const [precioPaseo, setPrecioPaseo] = useState("");
    const [guarderiaNocturna, setGuarderiaNocturna] = useState("");
    const [precioGuarderiaNocturna, setPrecioGuarderiaNocturna] = useState("");
        
  
    const handleSubmitRegisterOwner = (e) => {
      e.preventDefault();
  
      POSTRegister(emailRegistro, passwordRegistro)
        .then(() => {
            setEmailRegistro("");
            setPasswordRegistro("");
        })

    };

    const handleSubmitRegisterCuidador = (e) => {
        e.preventDefault();
    
        POSTRegister(emailRegistro, passwordRegistro)
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

        sessionStorage.removeItem("jwt-token");
        setToken("");
        setUserLog(false);
      };
    
    const store = {
        userLog,
        token,

        emailInicio,
        passwordInicio,
        recordarme,

        fotoUser,
        nombreUser,
        apellidosUser,
        emailRegistro,
        passwordRegistro,
        direccion,
        codigoPostal,
        localidad,
        telefono,
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
        actividadBaja,
        actividadMedia,
        actividadAlta,
        microchip,
        observaciones,
        
        guarderiaDiurna,
        precioGuarderiaDiurna,
        paseo,
        precioPaseo,
        guarderiaNocturna,
        precioGuarderiaNocturna,
    };
  
    const actions = {    
        setUserLog,
        setToken,

        setEmailInicio,
        setPasswordInicio,
        setRecordarme,

        setFotoUser,
        setNombreUser,
        setApellidosUser,
        setEmailRegistro,
        setPasswordRegistro,
        setDireccion,
        setCodigoPostal,
        setLocalidad,
        setTelefono,
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
        setActividadBaja,
        setActividadMedia,
        setActividadAlta,
        setMicrochip,
        setObservaciones,

        setGuarderiaDiurna,
        setPrecioGuarderiaDiurna,
        setPaseo,
        setPrecioPaseo,
        setGuarderiaNocturna,
        setPrecioGuarderiaNocturna,


        handleSubmitRegisterOwner,
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