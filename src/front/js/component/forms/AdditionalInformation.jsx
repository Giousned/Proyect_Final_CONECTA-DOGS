import React from "react";
// import useAppContext from "../../store/AppContext.js";

import "./signup-form.css";

export const AdditionalInformation = () => {

    // const { store, actions } = useAppContext();

    // const handleCheckGuarderiaDiurna = () => actions.setGuarderiaDiurna(!guarderiaDiurna);
    // const handleCheckPaseo = () => actions.setPaseo(!paseo);
    // const handleCheckGuarderiaNocturna = () => actions.setGuarderiaNocturna(!guarderiaNocturna);

    return (
        <>
            <label htmlFor="tamaño" className="form-label">
                Servicios
            </label>
            <br /><br />
            <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="guarderia-diurna">
                    Guardería Diurna
                </label>
                <input type="checkbox" className="form-check-input"
                    name="guarderiaDiurna" id="guarderia-diurna"
                // value={store.guarderiaDiurna}
                // onChange={handleCheckGuarderiaDiurna}
                // checked={store.guarderiaDiurna}
                />
                <input type="text" className="form-control"
                    id="precio-guarderia-diurna" aria-describedby="precio_guarderia_diurna"
                    placeholder="Precio en €"
                // value={store.precioGuarderiaDiurna}
                // onChange={(e) => actions.setPrecioGuarderiaDiurna(e.target.value)}
                />
            </div>
            <br /><br />
            <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="paseo">
                    Paseo
                </label>
                <input type="checkbox" className="form-check-input"
                    name="paseo" id="paseo"
                // value={store.paseo}
                // onChange={handleCheckPaseo}
                // checked={store.paseo}
                />
                <input type="text" className="form-control"
                    id="precio-paseo" aria-describedby="precio_paseo"
                    placeholder="Precio en €"
                // value={store.precioPaseo}
                // onChange={(e) => actions.setPrecioPaseo(e.target.value)}
                />
            </div>
            <br /><br />
            <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="guarderia-nocturna">
                    Guardería Nocturna
                </label>
                <input type="checkbox" className="form-check-input"
                    name="guarderiaNocturna" id="guarderia-nocturna"
                // value={store.guarderiaNocturna}
                // onChange={handleCheckGuarderiaNocturna}
                // checked={store.guarderiaNocturna}
                />
                <input type="text" className="form-control"
                    id="precio-guarderia-nocturna" aria-describedby="precio_guarderia_nocturna"
                    placeholder="Precio en €"
                // value={store.precioGuarderiaNocturna}
                // onChange={(e) => actions.setPrecioGuarderiaNocturna(e.target.value)}
                />
            </div>
        </>
    );
}