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
                          <input
                            type="text"
                            id="form3Example1c"
                            class="form-control"
                          />
                          <label className="form-label" for="form3Example1c">
                            Tu nombre
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div
                          data-mdb-input-init
                          class="form-outline flex-fill mb-0"
                        >
                          <input
                            type="email"
                            id="form3Example3c"
                            class="form-control"
                          />
                          <label className="form-label" for="form3Example3c">
                            Tu correo
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div
                          data-mdb-input-init
                          class="form-outline flex-fill mb-0"
                        >
                          <input
                            type="password"
                            id="form3Example4c"
                            class="form-control"
                          />
                          <label classn="form-label" for="form3Example4c">
                            Contraseña
                          </label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div
                          data-mdb-input-init
                          class="form-outline flex-fill mb-0"
                        >
                          <input
                            type="password"
                            id="form3Example4cd"
                            class="form-control"
                          />
                          <label class="form-label" for="form3Example4cd">
                            Repite tu contraseña
                          </label>
                        </div>
                      </div>

                      <div class="form-check d-flex justify-content-center mb-5">
                        <input
                          class="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                        />
                        <label class="form-check-label" for="form2Example3">
                          Estoy de acuerdo con todas las declaraciones en{" "}
                          <a href="#!">Términos y condiciones</a>
                        </label>
                      </div>
                      <p className="CONDUCTORA">
                        Continuar como:
                      </p>
                      <div className="row text-center">
                        <div className="col">
                          {" "}
                          <button
                            type="button"
                            class="mb-2 btn btn-primary btn-sm"
                            style={{ backgroundColor: "#d080ff" }}
                          >
                            Conductora
                          </button>
                        </div>
                        <div className="col">
                          <Link to="/iniciou">
                          <button
                            type="button"
                            class="btn btn-secondary btn-sm"
                            style={{ backgroundColor: "#d080ff" }}
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
