import React from "react";
import { Link } from "react-router-dom";
import foto from "../images/foto.jpeg";
import huella from "../images/huella.jpeg";

function Camara() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#d080ff" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5 text-center">
              <h3 style={{ backgroundColor: "#d080ff", color: "white", padding: "5px 10px", borderRadius: "5px" }}>Foto de tu documento</h3>
                <div className="d-flex justify-content-center">
                  <img src={foto} className="img-fluid" alt="Sample" style={{ maxWidth: "200px" }} />
                </div>
                <p>Primero el lado de la foto</p>
                <div className="d-flex justify-content-center">
                  <img src={huella} className="img-fluid" alt="Sample" style={{ maxWidth: "200px" }} />
                </div>
                <p>Ahora el lado de la huella</p>
                <Link to="/registro">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    style={{
                      backgroundColor: "#d080ff",
                      border: "2px solid #d080ff",
                      fontSize: "16px",
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
    </section>
  );
}

export default Camara;