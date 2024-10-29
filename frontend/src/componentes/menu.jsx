import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Inicio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/perfilu">
                Perfil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ciudad">
                Ciudad
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/idioma">
                Idioma
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/configuracion">
                Configuración
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ayuda">
                Ayuda
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/Soporte">
                Soporte
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/">
                Cerrar sesión
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
