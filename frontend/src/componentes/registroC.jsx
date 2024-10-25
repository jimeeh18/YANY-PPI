import React from "react";
import registro from "../images/registro_imagen.jpeg";
import { Link } from "react-router-dom";

function RegistroC() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#d080ff" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Registrate
                    </p>

                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div
                          data-mdb-input-init
                          class="form-outline flex-fill mb-0"
                        >
                          Nombre
                          <input
                            type="text"
                            id="form3Example1c"
                            class="form-control"
                          />
                          <label
                            className="form-label"
                            for="form3Example1c"
                          ></label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div
                          data-mdb-input-init
                          class="form-outline flex-fill mb-0"
                        >
                          Correo
                          <input
                            type="email"
                            id="form3Example3c"
                            class="form-control"
                          />
                          <label
                            className="form-label"
                            for="form3Example3c"
                          ></label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div
                          data-mdb-input-init
                          class="form-outline flex-fill mb-0"
                        >
                          Contraseña
                          <input
                            type="password"
                            id="form3Example4c"
                            class="form-control"
                          />
                          <label
                            classn="form-label"
                            for="form3Example4c"
                          ></label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div
                          data-mdb-input-init
                          class="form-outline flex-fill mb-0"
                        >
                          Repite tu contraseña
                          <input
                            type="password"
                            id="form3Example4cd"
                            class="form-control"
                          />
                          <label
                            class="form-label"
                            for="form3Example4cd"
                          ></label>
                        </div>
                      </div>

                      <p>
                        <button
                          class="btn btn-primary"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseExample"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                          style={{
                            backgroundColor: "#d080ff",
                            border: "2px solid #d080ff",
                          }}
                          width="50"
                        >
                          Foto de documento
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="16"
                            fill="currentColor"
                            className="bi bi-camera"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                          </svg>
                        </button>
                      </p>

                      <div class="form-check d-flex justify-content-center mb-5">
                        <input
                          class="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          Estoy de acuerdo con todas las declaraciones en{" "}
                          <a href="#!" style={{ color: "#d080ff" }}>
                            Términos y condiciones
                          </a>
                        </label>
                      </div>
                      <p className="CONDUCTORA">Continuar como:</p>
                      <div className="row text-center">
                        <div className="col">
                          {" "}
                          <Link to="/inicioc">
                            <button
                              type="button"
                              class="mb-2 btn btn-primary btn-sm"
                              style={{
                                backgroundColor: "#d080ff",
                                border: "2px solid #d080ff",
                              }}
                            >
                              Conductora
                            </button>
                          </Link>
                        </div>
                        <div className="col">
                          <Link to="/iniciou">
                            <button
                              type="button"
                              class="btn btn-secondary btn-sm"
                              style={{
                                backgroundColor: "#d080ff",
                                border: "2px solid #d080ff",
                              }}
                            >
                              Usuaria
                            </button>
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src={registro} className="img-fluid" alt="Sample" />
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

export default RegistroC;
