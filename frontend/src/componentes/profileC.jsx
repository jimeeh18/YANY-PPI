import React from "react";
import mujeres from "../images/mujeres-personaje-dibujos-animados-lindo_81698-1224.avif";
import star from "../images/star-scale.png";

function ProfileC() { 
  return (
    <div className="ProfileC">
      <section style={{ backgroundColor: "#d080ff" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <nav
                aria-label="breadcrumb"
                className="bg-body-tertiary rounded-3 p-3 mb-4"
              >
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="#">Atrás</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src={mujeres}
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: "150px" }}
                  />
                  <h5 className="my-3">Alejandra Perez</h5>
                  <div className="d-flex justify-content-center mb-2">
                    <button
                      type="button"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-primary"
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body p-0"></div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Nombre completo</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Alajandra Lopez Castaño</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Correo Electronico</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">aleja097@lpz.com</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Celular</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(+57) 3345678684</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Placa</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">WWA-892</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Vehículo</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Mazda2 negro</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0">
                    <div className="card-body">
                      <p className="mb-4">
                        <span className="text-primary font-italic me-1">
                          Reseñas
                        </span>
                      </p>

                    <img src={star} alt="" width="300px" height="80px"/>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ProfileC;
