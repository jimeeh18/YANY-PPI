import React from "react";
import { Link } from "react-router-dom";

function Formulario() {
  return (
    <form className="vh-100" style={{ backgroundColor: "#d080ff" }}>
      <div className="container h-100">
        <p
          className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"
          style={{ color: "white", marginTop: "20px", fontSize: "18px" }}
        >
          Aplica para el trabajo
        </p>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-9">
            {}

            <div className="card" style={{ borderRadius: "15px" }}>
              <div className="card-body">
                <div className="row align-items-center pt-4 pb-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Nombre completo</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>

                <hr className="mx-n3" />

                <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Correo electronico</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="example@example.com"
                    />
                  </div>
                </div>

                <hr className="mx-n3" />

                <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Mensaje</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Enviar un mensaje a YANY"
                    ></textarea>
                  </div>
                </div>

                <hr className="mx-n3" />

                <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Envía tu hoja de vida</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input
                      className="form-control form-control-lg"
                      id="formFileLg"
                      type="file"
                    />
                    <div className="small text-muted mt-2">
                      Envía tu hoja de vida y anexa datos relevantes en los
                      comentarios.
                    </div>
                  </div>
                </div>

                <hr className="mx-n3" />

                <div className="px-5 py-4">
                  <Link to="/inicioC">
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
                      Enviar solicitud
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Formulario;
