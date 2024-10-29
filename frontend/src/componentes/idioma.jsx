import React from "react";
import registro from "../images/registro_imagen.jpeg";
import { Link } from "react-router-dom";

function Idioma() {
  return (
    <div>
      <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
        <img src={registro} className="img-fluid" alt="Sample" />
      </div>

      <p
        className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 "
        style={{ color: "#d080ff" }}
      >
        Idioma
      </p>
      <select className="form-control form-control-lg">
        <option>Selecciona un idoma</option>
        <option>Español</option>
        <option>Inglés</option>
        <option>Portugués</option>
      </select>

      <div className="d-flex mt-3 justify-content-center">
      <Link className="nav-link active" to="/iniciou">
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
          Inicio
        </button>
        </Link>
      </div>
    </div>
  );
}
export default Idioma;
