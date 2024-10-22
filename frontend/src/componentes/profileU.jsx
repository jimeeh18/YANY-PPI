import React from "react";

function ProfileU() {
  return (
    <div className="PROFILEu">
      <section className="vh-100" style={{ borderRadius: "10px", backgroundColor: "#d080ff" }}>
      <h2 style={{fontSize:"20px",}}>Atrás</h2>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-4">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body text-center">
                  <div className="mt-3 mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                      className="rounded-circle img-fluid"
                      style={{ width: "100px" }}
                      alt="D"
                    />
                  </div>
                  <h4 className="mb-2">Maria Reyes</h4>
                  
                  
                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-primary btn-rounded btn-lg"
                  >
                    Guardar
                  </button>
                  <div className="mt-5 mb-2">
                    <div className="text-center">
                      <p className="mb-2 h5">Vive en</p>
                      <p className="text-muted mb-0">Medellín</p>
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
export default ProfileU;