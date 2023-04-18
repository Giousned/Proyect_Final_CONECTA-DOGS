import React from "react";
import { Link } from "react-router-dom";

import "../LogInForm/login-form.css";

const LogInForm = () => {
  return (
    <>
      <section className="py-2 custom-login">
        <div id="login"></div>
        <div className="container p-2 bg-light">
          <div className="row">
            <h2 className="text-center p-4">INGRESAR</h2>

            <div className="col-12 col-md-6 py-3 login">
              <img
                src="https://cdn.pixabay.com/photo/2020/05/07/15/07/dog-5141881_1280.jpg"
                className="img-fluid"
              />
            </div>

            <div className="col-12 col-md-6 p-2">
              <form>
                <h2 className="pb-4">Iniciar Sesión</h2>

                <div className="form-floating m-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    required
                  />
                  <label htmlFor="floatingInput">Correo Electrónico</label>
                </div>
                <div className="form-floating m-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    required
                  />
                  <label htmlFor="floatingPassword">Contraseña</label>
                </div>

                <div>
                  <div className="text-center">
                    <label>
                      <input type="checkbox" value="remember-me" /> Recordarme
                    </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#">¿Olvidaste tu contraseña?</a>
                  </div>
                  <div className="d-flex justify-content-center p-3 register">
                    <Link to="/sign-up-form">
                      <p className="text-dark">
                        ¿No te has registrado? ¡Regístrate ahora!
                      </p>
                    </Link>
                  </div>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">
                  Iniciar Sesión
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default LogInForm;


// const Login = () => {
//     const {store, actions} = useAppContext();
  
//     return (
//       <form className="container">
//         <h2>INICIO DE SESIÓN:</h2>
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
//         <button type="submit" className="btn btn-primary" onClick={(e) => actions.handleSubmitLogIn(e, store.email, store.password)}>
//           Submit
//         </button>
//       </form>
//     );
//   };

// export const LoginSubmit = () => {

//     const {store, actions} = useAppContext();
  
  
//     return (
//       <div className="container">
//         <div className="section">
//           <div className="container">
//             <div className="row full-height justify-content-center">
//               <div className="col-12 text-center align-self-center py-5">
//                 <div className="section pb-5 pt-5 pt-sm-2 text-center">
//                   <h6 className="mb-0 pb-3">
//                     <span>Iniciar Sesión |</span>
//                     <span>| Registrarse</span>
//                   </h6>
//                   <input
//                     className="checkbox"
//                     type="checkbox"
//                     id="reg-log"
//                     name="reg-log"
//                   />
//                   <label htmlFor="reg-log"></label>
//                   <div className="card-3d-wrap mx-auto">
//                     <div className="card-3d-wrapper">
//                       <div className="card-front">
//                         <div className="center-wrap">
//                           <div className="section text-center">
//                             <h4 className="mb-4 pb-3 text-white">
//                               Iniciar Sesión
//                             </h4>
//                             <div className="form-group">
//                               <input
//                                 type="email"
//                                 name="logemail"
//                                 className="form-style"
//                                 placeholder="Correo Electrónico"
//                                 id="logemail"
//                                 autoComplete="off"
//                                 value={store.emailInicio}
//                                 onChange={(e) => actions.setEmailInicio(e.target.value)}
//                               />
//                               <i className="input-icon uil uil-at"></i>
//                             </div>
//                             <div className="form-group mt-2">
//                               <input
//                                 type="password"
//                                 name="logpass"
//                                 className="form-style"
//                                 placeholder="Contraseña"
//                                 id="logpass"
//                                 autoComplete="off"
//                                 value={store.passwordInicio}
//                                 onChange={(e) => actions.setPasswordInicio(e.target.value)}
//                               />
//                               <i className="input-icon uil uil-lock-alt"></i>
//                             </div>
//                             <button type="submit" className="btn btn-primary mt-3" onClick={(e) => actions.handleSubmitLogIn(e)}>
//                               Submit
//                             </button>
//                             <div id="emailHelp" className="form-text fs-6 fst-italic">
//                               We'll never share your email with anyone else.
//                             </div>
//                             <p className="mb-0 mt-4 text-center">
//                               <a href="#0" className="link">
//                                 ¿Olvidaste tu contraseña?
//                               </a>
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="card-back">
//                         <div className="center-wrap">
//                           <div className="section text-center">
//                             <h4 className="mb-4 pb-3 text-white">Registrarse</h4>
//                             <div className="form-group">
//                               <input
//                                 type="radio"
//                                 id="propietario"
//                                 name="age"
//                                 value="propietario"
//                               />
//                               <label htmlFor="propietario">Propietario</label>
//                               <input
//                                 type="radio"
//                                 id="cuidador"
//                                 name="age"
//                                 value="cuidador"
//                               />
//                               <label htmlFor="cuidador">Cuidador</label>
//                               <br />
//                             </div>
//                             <div className="form-group">
//                               <input
//                                 type="text"
//                                 name="logname"
//                                 className="form-style"
//                                 placeholder="Nombre Completo"
//                                 id="logname"
//                                 autoComplete="off"
//                               />
//                               <i className="input-icon uil uil-user"></i>
//                             </div>
//                             <div className="form-group mt-2">
//                               <input
//                                 type="email"
//                                 name="logemail"
//                                 className="form-style"
//                                 placeholder="Correo Electrónico"
//                                 id="logemail"
//                                 autoComplete="off"
//                                 value={store.emailRegistro}
//                                 onChange={(e) => actions.setEmailRegistro(e.target.value)}
//                               />
//                               <i className="input-icon uil uil-at"></i>
//                             </div>
//                             <div className="form-group mt-2">
//                               <input
//                                 type="password"
//                                 name="logpass"
//                                 className="form-style"
//                                 placeholder="Contraseña"
//                                 id="logpass"
//                                 autoComplete="off"
//                                 value={store.passwordRegistro}
//                                 onChange={(e) => actions.setPasswordRegistro(e.target.value)}
//                               />
//                               <i className="input-icon uil uil-lock-alt"></i>
//                             </div>
//                             <button type="submit" className="btn btn-primary mt-3" onClick={(e) => actions.handleSubmitRegister(e)}>
//                               Submit
//                             </button>
//                             <div id="emailHelp" className="form-text fs-6 fst-italic">
//                               We'll never share your email with anyone else.
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
  
//         <Link to="/">
//           <button className="btn btn-primary">Volver a Inicio</button>
//         </Link>
//       </div>
//     );
//   };