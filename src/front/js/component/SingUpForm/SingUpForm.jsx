import React from "react";
import { Link } from "react-router-dom";

import "../SingUpForm/singup-form.css";

const SingUpForm = () => {
  return (
    <>
      <section className="py-2 custom-login">
        <div className="container p-2 bg-light">
          <div className="row">
            <h2 className="text-center p-4">REGISTRO DE USUARIOS</h2>

            <div className="col-12 col-md-6 py-3">
              <img
                src="https://cdn.pixabay.com/photo/2019/02/07/16/26/cocker-spaniel-3981587_1280.jpg"
                className="img-fluid"
              />
            </div>

            <div className="col-12 col-md-6 p-2">
              <form>
                <h2 className="pb-2">Regístrate</h2>

                <h3 className="pb-2">¿Cómo quieres registrarte?</h3>
                <p>Elige una opción</p>
                <div className="row g-2">
                  <div className="col-md">
                    <div className="form-floating">
                      <div className="glowing-register m-2">
                        <input
                          type="radio"
                          id="propietario"
                          name="perfil"
                          value="propietario"
                        />
                        <label htmlFor="propietario">Propietario</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="form-floating">
                      <div className="glowing-register m-2">
                        <input
                          type="radio"
                          id="cuidador"
                          name="perfil"
                          value="cuidador"
                        />
                        <label htmlFor="cuidador">Cuidador</label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="container d-flex">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="checkbox" className="btn-check" id="btn-check-2" checked autocomplete="off" />
                                            <label className="btn btn-primary" htmlFor="btn-check-2">Propietario</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="checkbox" className="btn-check" id="btn-check-3" checked autocomplete="off" />
                                            <label className="btn btn-primary" htmlFor="btn-check-3">Cuidador</label>
                                        </div>
                                    </div>
                                </div> */}

                <div className="d-grid gap-2 d-md-flex justify-content-md-end py-3">
                  <Link to="/sign-up-form2">
                    <button className="btn btn-primary m-3" type="submit">
                      Siguiente
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SingUpForm;


// const Register = () => {

//     const {store, actions} = useAppContext();
  
  
  
//     return (
//       <form className="container">
//         <h2>REGISTRO DEL USUARIO:</h2>
//         <div className="mb-3">
//           <label htmlFor="exampleInputEmail1" className="form-label">
//             Email address
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             placeholder="Introduzca el nuevo email"
//             value={store.email}
//             onChange={(e) => actions.setEmail(e.target.value)}
//           />
//           <div id="emailHelp" className="form-text fs-6 fst-italic">
//             We'll never share your email with anyone else.
//           </div>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="exampleInputPassword1"
//             placeholder="Introduzca la nueva contraseña"
//             value={store.password}
//             onChange={(e) => actions.setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary" onClick={(e) => actions.handleSubmitRegister(e, store.email, store.password)}>
//           Submit
//         </button>
//       </form>
//     );
//   };
  