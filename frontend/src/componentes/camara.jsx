import React from "react";
import { Link } from "react-router-dom";

function Camara() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#d080ff" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <nav className="navbar navbar-light bg-light">
                      <span
                        className="navbar-text d-flex justify-content-center align-items-center"
                        style={{
                          backgroundColor: "#d080ff",
                          color: "white",
                          padding: "10px",
                          borderRadius: "10px",
                          width: "fit-content",
                        }}
                      >
                        Foto de tu documento
                      </span>
                    </nav>
                    <p>Primero el lado de la foto</p>
                    <p>Ahora el lado de la huella</p>{" "}
                    <Link to="/registro">
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        style={{
                          backgroundColor: "#d080ff",
                          border: "2px solid #d080ff",
                        }}
                      >
                        Listo
                      </button>
                    </Link>
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

export default Camara;
