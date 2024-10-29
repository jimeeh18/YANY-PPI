import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function Iniciosesion() {
  return (
    <div className="Iniciosesion">
      <section
        class="vh-100"
        style={{ backgroundColor: "#d080ff", borderRadius: "35px" }}
      >
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                class="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div class="card-body p-5 text-center">
                  <h3 class="mb-5">Iniciar sesión</h3>

                  <div data-mdb-input-init class="form-outline mb-4">
                    Correo electronico
                    <input
                      type="email"
                      id="typeEmailX-2"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="typeEmailX-2"></label>
                  </div>

                  <div data-mdb-input-init class="form-outline mb-4">
                    Contraseña
                    <input
                      type="password"
                      id="typePasswordX-2"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="typePasswordX-2"></label>
                  </div>

                  <div class="form-check d-flex justify-content-start mb-4">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label class="form-check-label" for="form1Example3">
                      {" "}
                      He olvidado la contraseña{" "}
                    </label>
                  </div>

                  <Link to="/inicioU">
                    <button
                      data-mdb-button-init
                      data-mdb-ripple-init
                      class="btn btn-primary btn-lg btn-block"
                      style={{
                        backgroundColor: "#d080ff",
                        border: "2px solid #d080ff",
                      }}
                      type="submit"
                    >
                      Inicio
                    </button>
                  </Link>

                  <hr class="my-4" />
                  <p>También puedes iniciar sesión con:</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    color="blue"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                  <FcGoogle style={{ width: "30px", height: "30px" }} />

                  <div class="text-center">
                    <p>
                      No tienes cuenta?
                      <Link to="/registro" style={{ color: "#d080ff" }}>
                        Registrate
                      </Link>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Iniciosesion;
