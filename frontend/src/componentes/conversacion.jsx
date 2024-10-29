import React from "react";
import robot from "../images/iconrobot.jpg"
import usuariop from "../images/usuariop.jpg";
import { Link } from "react-router-dom";

function Conversacion() {
  return (
    <section>
      <div className="container h-100">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <div classN="card">
              <div
                className="card-header d-flex justify-content-between align-items-center p-3"
                style={{ borderTop: "4px solid #d080ff" }}
              >
                 <Link to="/soporte" style={{ color: "#d080ff" }}>
                <p className="small mb-1">Atrás</p>
                </Link>

                <h5 className="mb-0">Chat</h5>
                <div className="d-flex flex-row align-items-center">
                  <i className="fas fa-minus me-3 text-muted fa-xs"></i>
                  <i className="fas fa-comments me-3 text-muted fa-xs"></i>
                  <i className="fas fa-times text-muted fa-xs"></i>
                </div>
              </div>
              <div
                className="card-body"
                data-mdb-perfect-scrollbar-init
                style={{ position: "relative; height: 400px" }}
              >
                <div className="d-flex justify-content-between">
                  <p className="small mb-1">Amelia Cardenas</p>
                </div>
                <div className="d-flex flex-row justify-content-start">
                  <img
                    src={usuariop}
                    alt="avatar 1"
                    style={{ width: "45px", height: "45px" }}
                  />
                  <div>
                    <p className="small p-2 ms-3 mb-3 rounded-3 bg-body-tertiary">
                     ¿Hola, tengo una duda sobre como llevar un acompañante hombre en un servicio? 
                    </p>
                  </div>
                </div>

                <div className="text-end">
                  <p className="small mb-1">YANY</p>
                </div>
                <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                  <div>
                    <p
                      className="small p-2 me-3 mb-3 text-white rounded-3"
                      style={{ backgroundColor: "#d080ff" }}
                    >
                   ¡Hola, Amelia, soy tu asistente de Yany! Para llevar acompañantes, debes marcar en la opción que aparece en el momento de pedir el servicio, y si la conductora acepta, puedes acceder al servicio.
                    </p>
                  </div>
                  <img
                    src={robot}
                    alt="avatar 1"
                    style={{ width: "45px", height: "45px" }}
                  />
                </div>

                <div className="d-flex justify-content-between">
                  <p className="small mb-1">Amelia Cardenas</p>
                </div>
                <div className="d-flex flex-row justify-content-start">
                  <img
                    src={usuariop}
                    alt="avatar 1"
                    style={{ width: "45px", height: "45px" }}
                  />
                  <div>
                    <p className="small p-2 ms-3 mb-3 rounded-3 bg-body-tertiary">
                    Está bien, muchas gracias.
                    </p>
                  </div>
                </div>

                <div className="text-end">
                  <p className="small mb-1">YANY</p>
                </div>
                <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                  <div>
                    <p
                      className="small p-2 me-3 mb-3 text-white rounded-3"
                      style={{ backgroundColor: "#d080ff" }}
                    >
                      ¡Espero que se haya resuelto tu problema!
                    </p>
                  </div>
                  <img
                    src={robot}
                    alt="avatar 1"
                    style={{ width: "45px", height: "45px" }}
                  />
                </div>
              </div>
              <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                <div className="input-group mb-0">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Escribe un mensaje"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    data-mdb-button-init
                    data-mdb-ripple-init
                    class="btn btn-warning"
                    type="button"
                    id="button-addon2"
                    style={{
                      paddingTop: ".55rem;",
                      backgroundColor: "#d080ff",
                      border: "2px solid #d080ff",
                    }}
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Conversacion;