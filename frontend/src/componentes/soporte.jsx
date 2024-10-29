import React from "react";
import registro from "../images/registro_imagen.jpeg";
import { Link } from "react-router-dom";

function Soporte() {
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
                      <p className="h1 fw-bold mb-5">Soporte</p>
                    </nav>
                    <p className="text-center">
                      Anexe la información sobre su solicitud para que podamos
                      solucionarla.
                    </p>
                    <div class="select-container">
                      <select className="form-control form-control-lg">
                        <option>Seleccione un servicio</option>
                        <option>Viajes de ciudad</option>
                        <option>Entregas</option>
                        <option>Viajes ciudad a ciudad</option>
                      </select>
                      <select className="form-control form-control-lg">
                        <option>Seleccione su modalidad</option>
                        <option>Pasajera</option>
                        <option>Conductora</option>
                      </select>
                    </div>
                    Describa el asunto:
                    <input
                      type="password"
                      id="form3Example4cd"
                      class="form-control"
                    />
                    <div className="row text-center mt-3">
                      <div className="col">
                        <Link to="/conversacion">
                          <button
                            type="button"
                            className="mb-2 btn btn-primary btn-sm"
                            style={{
                              backgroundColor: "#d080ff",
                              border: "2px solid #d080ff",
                            }}
                          >
                            Iniciar conversación
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

export default Soporte;
