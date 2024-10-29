import React from "react";
import usuaria from "../images/usuariop.jpg"
import { Link } from "react-router-dom";

function RutaC() {
  return (

    <section className="text-center" style={{backgroundColor:"#d080ff"}}>

 <Link to="/inicioC" style={{ color: "#ffffff" }}>
                  <p className="small mb-1">Atrás</p>
                </Link>

    <h3 className="mb-5" style={{backgroundColor:"#ffffff", color:"#d080ff",}}>Tu ruta</h3>
  
    <div className="row">
      <div className="col-lg-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15863.55516843332!2d-75.60888320000001!3d6.2783488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1729958479704!5m2!1ses-419!2sco"
          className="h-100 w-100" style={{border:"0"}} allowfullscreen="" loading="lazy" title="Ruta"></iframe>
      </div>
  
      <div className="col-lg-7">
        <form>
          <div className="row">
            <div className="col-md-9">
              <div className="row mb-4">
                <div className="col-md-6 mb-4 mb-md-0">
                  
                </div>
                <div className="col-md-6">
                  <div data-mdb-input-init className="form-outline">
                    <label className="form-label" for="form3Example2" >Llevas a bordo a:</label>
                  </div>
                  <img
                    src={usuaria}
                    width={"50px"}
                    alt="Usuaria"
                    />
                    Sofia Quejada
                </div>
              </div>
            </div>
            
          </div>
        </form>
  
      </div>
    </div>
  
  
  </section>
  );
}

export default RutaC;