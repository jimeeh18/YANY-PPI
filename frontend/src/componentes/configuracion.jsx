import React from "react";
import registro from "../images/registro_imagen.jpeg";
import { Link } from "react-router-dom";

function Configuracion() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#d080ff" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <Link to="/iniciou" style={{ color: "#d080ff" }}>
                  <p className="small mb-1">Atrás</p>
                </Link>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src={registro} className="img-fluid" alt="Sample" />
                    </div>
                   
                    <nav className="navbar navbar-light bg-light d-flex justify-content-center">
                      <p className="h1 fw-bold mb-5">Configuración</p>
                    </nav>
                    Cambiar el número del teléfono
                    <input
                      type="password"
                      id="form3Example4cd"
                      class="form-control"
                    />
                    Cambiar el correo electronico
                    <input
                      type="password"
                      id="form3Example4cd"
                      class="form-control"
                    />
                    
                    <div className="d-flex mt-3 justify-content-center">
                      <Link to="/acerca">
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                          style={{
                            backgroundColor: "#d080ff",
                            border: "2px solid #d080ff",
                          }}
                        >
                          Acerca de la aplicación
                        </button>
                      </Link>
                    </div>
                    <div className="row text-center mt-3">
                      <div className="col">
                        <Link to="/">
                          <button
                            type="button"
                            className="mb-2 btn btn-primary btn-sm"
                            style={{
                              backgroundColor: "#d080ff",
                              border: "2px solid #d080ff",
                            }}
                          >
                            Cerrar sesión
                          </button>
                        </Link>
                      </div>
                      <div className="col">
                        <Link to="/eliminar">
                          <button
                            type="button"
                            className="btn btn-secondary btn-sm"
                            style={{
                              backgroundColor: "#d080ff",
                              border: "2px solid #d080ff",
                            }}
                          >
                            Eliminar cuenta
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Configuracion;
