import React from "react";
// import useAppContext from "../../store/AppContext.js";

import "./signup-form.css";
export const OwnerCarer = () => {

    // const { store, actions } = useAppContext();

    // const handleCheckPropietario = () => { actions.setPropietario(!store.propietario); if (store.cuidador) actions.setCuidador(false); }
    // const handleCheckCuidador = () => { actions.setCuidador(!store.cuidador); if (store.propietario) actions.setPropietario(false); }

    return (
        <>
            <h3 className="pb-2">¿Cómo quieres registrarte?</h3>
            <p>Elige una opción</p>
            <div className="row g-2">
                <div className="col-md">
                    <div className="form-floating">
                        <div className="glowing-register m-2">
                            <input type="radio" id="propietario" name="perfil"
                            // onChange={handleCheckPropietario}
                            // checked={store.propietario}
                            />
                            <label htmlFor="propietario">Propietario</label>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="form-floating">
                        <div className="glowing-register m-2">
                            <input type="radio" id="cuidador" name="perfil"
                            // onChange={handleCheckCuidador}
                            // checked={store.cuidador}
                            />
                            <label htmlFor="cuidador">Cuidador</label>
                        </div>
                    </div>
                </div>
            </div></>
    );
}

