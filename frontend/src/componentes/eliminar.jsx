import React from "react";
import { Link } from "react-router-dom";
import eliminar from "../images/alerta.jpg";

function Eliminar() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#d080ff" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src={eliminar}
                        className="img-fluid"
                        alt="Sample"
                        style={{ width: "200px" }}
                      />
                    </div>
                    <nav className="navbar navbar-light bg-light d-flex justify-content-center">
                      <p
                        className="small"
                        style={{ color: "red", fontSize: "12px" }}
                      >
                        ¿Estás segura de que deseas eliminar tu cuenta?
                      </p>
                    </nav>

                    <div class="alert alert-danger" role="alert">
                        ¡Todos tus datos y tu cuenta se eliminarán
                      automáticamente y no habrá manera de recuperarlos!
                    </div>

                    <div className="row text-center mt-3">
                      <div className="col">
                        <Link to="/configuracion">
                          <button
                            type="button"
                            className="mb-2 btn btn-primary btn-sm"
                            style={{
                              backgroundColor: "#d080ff",
                              border: "2px solid #d080ff",
                            }}
                          >
                            Cancelar
                          </button>
                        </Link>
                      </div>
                      <div className="col">
                        <Link to="/">
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

export default Eliminar;
