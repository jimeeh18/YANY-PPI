import React from "react";
import soli from "../images/icon.png";

function SolicitudU() {
  return (
    
    <section style={{backgroundColor:  "#eee"}}>
    <div className="container py-5">
      <div className="row">
        <div className="col">
          <nav aria-label="breadcrumb" className="bg-body-tertiary rounded-3 p-3 mb-4">
            <ol className="breadcrumb mb-0">
             Atrás
            </ol>
          </nav>
        </div>
      </div>

      <div class="row w-100">
  <div class="col-lg-6 my-4">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.29592731265!2d-77.47713270775661!3d25.0326996781907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f7c99b981dbc9%3A0x2aef01d3485e50d2!2sNassau%2C%20Bahamy!5e0!3m2!1spl!2spl!4v1624445118063!5m2!1spl!2spl"
      class="w-100" height="400" allowfullscreen="" loading="lazy"></iframe>
  </div>
  <div class="col-lg-6 my-4 d-flex align-items-center">
  </div>
</div>
  
      <div className="row">
        <div className="col-lg-4">
          <div className="card mb-4">
            <div className="card-body text-center">
            <button  type="button" style={{backgroundColor: "#d080ff" , width: "150px"}} data-mdb-button-init data-mdb-ripple-init className="btn btn-primary">Aceptar por COP 7.000</button>
       
              <p className="text-muted mb-4">Ofrezca su tarifa</p>
              <div className="d-flex justify-content-center mb-2">
                <button  type="button" style={{backgroundColor: "#d080ff" , width: "80px"}} data-mdb-button-init data-mdb-ripple-init className="btn btn-primary">COP 6.500</button>
                <button  type="button"  style={{backgroundColor: "#d080ff" , width: "80px"}} data-mdb-button-init data-mdb-ripple-init className="btn btn-primary">COP 5.000</button>
                <button  type="button"  style={{backgroundColor: "#d080ff" , width: "80px"}} data-mdb-button-init data-mdb-ripple-init className="btn btn-primary">COP 6.700</button>
              
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
