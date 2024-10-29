import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Ciudady() {
  return (
    <div>
      <p
        className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 "
        style={{ color: "#d080ff" }}
      >
        Ciudad
      </p>
      <select className="form-control form-control-lg">
        <option>Selecciona una ciudad</option>
        <option>Medellin</option>
        <option>Baranquilla</option>
        <option>Cali</option>
        <option>Cartagena de indias</option>
        <option>Bogotá</option>
      </select>

      <div className="border border-purple p-3">
        <div className="text-center" style={{ color: "#d080ff" }}>
          <h4>Lugares más frecuentes</h4>
        </div>

        <table className="table text-center">
          <thead className="text-center"></thead>
          <tbody>
            <tr>
              <th scope="row" style={{ color: "#d080ff" }}>
                1
              </th>
              <td>Lusitania paz de Colombia</td>
            </tr>
            <tr>
              <th scope="row" style={{ color: "#d080ff" }}>
                2
              </th>
              <td>Estación aurora</td>
            </tr>
            <tr>
              <th scope="row" style={{ color: "#d080ff" }}>
                3
              </th>
              <td>Luna del valle apartamentos</td>
            </tr>
          </tbody>
        </table>
      </div>

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
            Aceptar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Ciudady;
