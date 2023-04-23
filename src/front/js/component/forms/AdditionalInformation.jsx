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
            <h2 className="py-2">Servicios</h2>

            <div className="form-check form-check-inline py-2">
                <label className="form-check-label" htmlFor="guarderia-diurna">
                    Guardería Diurna (de día)
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
            
            <div className="form-check form-check-inline py-2">
                <label className="form-check-label" htmlFor="paseo">
                    Paseo (por hora)
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
           
            <div className="form-check form-check-inline py-2">
                <label className="form-check-label" htmlFor="guarderia-nocturna">
                    Guardería Nocturna (de noche)
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