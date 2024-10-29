import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#d080ff" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <div className="container">
                      <section
                        className="mx-auto my-5"
                        style={{ maxWidth: "23rem" }}
                      >
                        <div className="card map-card">
                          <div
                            id="map-container-google-1"
                            className="z-depth-1-half map-container"
                            style={{ height: "60vh" }}
                          >
                            <div clasName="row">
                              <div
                                className="col-lg-5"
                                style={{ height: "60vh" }}>
                                <iframe
                                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15863.55516843332!2d-75.60888320000001!3d6.2783488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1729958479704!5m2!1ses-419!2sco"
                                  className="h-100 w-100"
                                  style={{ border: "0" }}
                                  allowfullscreen=""
                                  title="Coductor"
                                  loading="lazy"
                                ></iframe>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="d-flex mt-3 justify-content-center">
                          <Link to="/servicio">
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
                              Ver solicitudes
                            </button>
                          </Link>
                        </div>
                      </section>
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

export default Inicio;
