import React from "react";
import imagen from "../images/yany_logo.jpg"


function Iniciosesion() {
  return (
    <div className="Iniciosesion">
      <img src={imagen} alt="carro" style={{maxWidth:"100vw", padding: "20px"}}>
      </img>
      <section class="vh-100" style={{ backgroundColor: "#d080ff", borderRadius: "35px" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                class="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div class="card-body p-5 text-center">
                  <h3 class="mb-5">Inicia sesión</h3>

                  <div data-mdb-input-init class="form-outline mb-4">
                    <input
                      type="email"
                      id="typeEmailX-2"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="typeEmailX-2">
                      Correo
                    </label>
                  </div>

                  <div data-mdb-input-init class="form-outline mb-4">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="typePasswordX-2">
                      Contraseña
                    </label>
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

                  <button
                    data-mdb-button-init
                    data-mdb-ripple-init
                    class="btn btn-primary btn-lg btn-block"
                    type="submit"
                  >
                    Inicio
                  </button>

                  <hr class="my-4" />

                  <button
                    data-mdb-button-init
                    data-mdb-ripple-init
                    class="btn btn-lg btn-block btn-primary"
                    style={{ backgroundColor: "#d080ff" }}
                    type="submit"
                  >
                    <i class="fab fa-google me-2"></i> Inicia con Google
                  </button>
                  <button
                    data-mdb-button-init
                    data-mdb-ripple-init
                    class="btn btn-lg btn-block btn-primary mb-2"
                    style={{ backgroundColor: "#d080ff" }}
                    type="submit"
                  >
                    <i class="fab fa-facebook-f me-2"></i>Inicia con Facebook
                  </button>
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
