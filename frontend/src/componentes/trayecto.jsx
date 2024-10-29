import React from "react";
import usuaria from "../images/usuariop.jpg";
import { Link } from "react-router-dom";

function Trayecto() {
  return (
    <section style={{ backgroundColor: "#ba5fcc" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <nav
              aria-label="breadcrumb"
              className="bg-body-tertiary rounded-3 p-3 mb-4"
            >
              
            </nav>
          </div>
        </div>

        <section clasName="text-center">
          <div clasName="row">
            <div clasName="col-lg-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15863.55516843332!2d-75.60888320000001!3d6.2783488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1729958479704!5m2!1ses-419!2sco"
                clasName="h-100 w-100"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img src={usuaria} style={{ width: "100px" }} />
                <h5 className="my-3">Amelia Cardenas</h5>
                <p className="text-muted mb-1">Mazda 2 Rojo</p>
                <p className="text-muted mb-4">CVT000</p>
                <p className="text-muted mb-4">Tu servicio llegará en:</p>
                <p>2 min</p>
                <div className="d-flex justify-content-center mb-2">
                <Link to="/rutau">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    style={{
                      backgroundColor: "#d080ff",
                      border: "2px solid #d080ff",
                    }}
                  >
                    Ver la ruta
                  </button>
                  </Link>
                  <Link to="/chatu">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      style={{
                        backgroundColor: "#d080ff",
                        marginLeft: "1rem",
                        border: "2px solid #d080ff",
                      }}
                    >
                      Ir al chat de la conductora
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trayecto;
