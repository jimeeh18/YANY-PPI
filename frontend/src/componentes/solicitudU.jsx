import React from "react";
import soli from "../images/icon.png";

function SolicitudU() {
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <nav
              aria-label="breadcrumb"
              className="bg-body-tertiary rounded-3 p-3 mb-4"
            >
              <ol className="breadcrumb mb-0" style={{color:"#012ef5"}}>Atrás</ol>
            </nav>
          </div>
        </div>

        <div class="container">
          <section class="mx-auto my-5" style={{ maxWidth: "23rem" ,}}>
            <div class="card map-card">
              <div
                id="map-container-google-1" 
                class="z-depth-1-half map-container"
                style={{ height: "80px" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15863.487097412035!2d-75.6091583!3d6.2805831!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1729884410639!5m2!1ses-419!2sco"
                  frameborder="0"
                  style={{ border: "0" , width: "270px"}}
                  allowfullscreen
                  title="fcg"
              
                ></iframe>
              </div>
              <div class="card-body closed px-0">
                <div class="button px-2 mt-3">
                  <a
                  href="hgvjhb"
                    data-mdb-ripple-init
                    class="btn btn-floating btn-lg living-coral text-white float-end"
                    style={{marginRight: ".75rem"}}
                  >
                    <i class="fas fa-bicycle"></i>
                  </a>
                </div>
                
              </div>
            </div>
          </section>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <button
                  type="button"
                  style={{ backgroundColor: "#d080ff", width: "150px",
                    border: "2px solid #d080ff",
                  }}
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary"
                 
                >
                  Aceptar por COP 7.000
                </button>
                <p className="text-muted mb-4">Ofrezca su tarifa</p>
                <div className="d-flex justify-content-center mb-2">
                  <button
                    type="button"
                    style={{ backgroundColor: "#d080ff", width: "80px",
                      border: "2px solid #d080ff",
                     }}
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-primary"
                  >
                    COP 6.500
                  </button>
                  <button
                    type="button"
                    style={{ backgroundColor: "#d080ff", width: "80px",
                      border: "2px solid #d080ff",
                     }}
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-primary"
                  >
                    COP 5.000
                  </button>
                  <button
                       type="button"
                    style={{ backgroundColor: "#d080ff", width: "80px",
                      border: "2px solid #d080ff",
                     }}
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-primary"
                  >
                    COP 6.700
                  </button>
                </div>
                Omitir
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SolicitudU;
