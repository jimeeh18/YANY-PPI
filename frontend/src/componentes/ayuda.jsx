import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import registro from "../images/registro_imagen.jpeg";
function Ayuda() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#d080ff" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <Link to="/inicioc" style={{ color: "#d080ff" }}>
                  <p className="small mb-1">Atrás</p>
                </Link>
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <h1 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Ayuda
                    </h1>

                    <nav className="navbar navbar-light bg-light d-flex justify-content-center">
                      <p
                        className="small"
                        style={{  fontSize: "12px" }}
                      >
                        ¿YANY como puede ayudarte?
                      </p>
                    </nav>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        style={{
                          backgroundColor: "#d080ff",
                          border: "2px solid #d080ff",
                          marginBottom: "10px", 
                        }}
                      >
                        Quiero ser conductor
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        style={{
                          backgroundColor: "#d080ff",
                          border: "2px solid #d080ff",
                          marginBottom: "10px",
                        }}
                      >
                        Mi cuenta ha sido bloqueada 
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        style={{
                          backgroundColor: "#d080ff",
                          border: "2px solid #d080ff",
                        }}
                      >
                       Modificar datos personales
                      </button>

                     
                    </div>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
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

export default Ayuda;
