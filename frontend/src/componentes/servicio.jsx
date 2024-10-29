import React from "react";
import usuariop from "../images/usuariop.jpg";
import { Link } from "react-router-dom";

function Servicio() {
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
                <Link to="/inicioC" style={{ color: "#d080ff" }}>
                  <p className="small mb-1">Atrás</p>
                </Link>
              </div>
              <div className="d-flex mt-3 justify-content-center">
                <button type="button" class="btn btn-outline-primary">
                  Libre
                </button>
                <button type="button" class="btn btn-outline-danger">
                  Ocupado
                </button>
              </div>
              <div
                className="card-body"
                data-mdb-perfect-scrollbar-init
                style={{ position: "relative; height: 400px" }}
              >
                <div className="d-flex justify-content-between">
                  <p className="small mb-1">Amelia Cardenas</p>

                  <p className="text-center" style={{ color: "red" }}>
                    COP 13,000
                  </p>
                </div>
                <div className="d-flex flex-row justify-content-start">
                  <img
                    src={usuariop}
                    alt="avatar 1"
                    style={{ width: "45px", height: "45px" }}
                  />
                  <p className="small mb-1">12 Octubre // Robledo pajarito</p>
                  <div>
                  <Link to="/aceptar">
                    <button
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-primary btn-lg btn-block"
                      style={{
                        backgroundColor: "#d080ff",
                        border: "2px solid #d080ff",
                      }}
                      type="submit"
                    >
                      Aceptar
                    </button>
                    </Link>
                    <p className="text-center">(11,7km)</p>
                  </div>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="small mb-1">María Reyes</p>
                  <p className="text-center" style={{ color: "red" }}>
                    COP 5,000
                  </p>
                </div>
                <div className="d-flex flex-row justify-content-start">
                  <img
                    src={usuariop}
                    alt="avatar 1"
                    style={{ width: "45px", height: "45px" }}
                  />
                  <p className="small mb-1">
                    Lusitania paz de Colombia // Robledo pajarito
                  </p>
                  <div>
                  <Link to="/aceptar">
                    <button
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-primary btn-lg btn-block"
                      style={{
                        backgroundColor: "#d080ff",
                        border: "2px solid #d080ff",
                      }}
                      type="submit"
                    >
                      Aceptar
                    </button>
                    </Link>
                    <p className="text-center">(3,9km)</p>
                  </div>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="small mb-1">Sofia Quejada</p>
                  <p className="text-center" style={{ color: "red" }}>
                    COP 10,000
                  </p>
                </div>
                <div className="d-flex flex-row justify-content-start">
                  <img
                    src={usuariop}
                    alt="avatar 1"
                    style={{ width: "45px", height: "45px" }}
                  />
                  <p className="small mb-1">Villa hermosa// Robledo pajarito</p>
                  <div>
                  <Link to="/aceptar">
                    <button
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-primary btn-lg btn-block"
                      style={{
                        backgroundColor: "#d080ff",
                        border: "2px solid #d080ff",
                      }}
                      type="submit"
                    >
                      Aceptar
                    </button>
                    </Link>
                    <p className="text-center">(10,9km)</p>
                  </div>
                </div>
              </div>
              <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                <div>
                  <div>
                    <p style={{ backgroundColor: "#d080ff" }}>
                      Ofrezca su tarifa
                    </p>
                    <input
                      type="number"
                      id="form3Example4cd"
                      className="form-control"
                    />
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

export default Servicio;
