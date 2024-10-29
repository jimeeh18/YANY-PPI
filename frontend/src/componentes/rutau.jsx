import React from "react";
import { Link } from "react-router-dom";
function RutaU() {
  return (
    <section className="text-center" style={{backgroundColor:"#d080ff"}}>
 <Link to="/iniciou" style={{ color: "#ffffff" }}>
                  <p className="small mb-1">Atrás</p>
                </Link>


    <h3 className="mb-5" style={{backgroundColor:"#ffffff", color:"#d080ff",}}>Tu ruta</h3>
  
    <div className="row">
      <div className="col-lg-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.57348593182!2d-74.00599512526003!3d40.72586666928451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f988156a9%3A0xd54629bdf9d61d68!2sBroadway-Lafayette%20St!5e0!3m2!1spl!2spl!4v1624523797308!5m2!1spl!2spl"
          className="h-100 w-100" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
      </div>
  
      <div className="col-lg-7">
        <form>
          <div className="row">
            <div className="col-md-9">
              <div className="row mb-4">
                <div className="col-md-6 mb-4 mb-md-0">
                  <div data-mdb-input-init className="form-outline">
                    <label className="form-label"  for="form3Example1">Destino</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div data-mdb-input-init className="form-outline">
                    <input type="email" id="form3Example2" className="form-control-center" style={{width:"300px"}} />
                    <label className="form-label" for="form3Example2">Lugar de recogida</label>
                  </div>
                </div>
              </div>
              <div data-mdb-input-init className="form-outline mb-4">
                <input type="text" id="form3Example3" style={{width:"300px"}} className="form-control-center" />
                
              </div>
              
             
            </div>
            
          </div>
        </form>
  
      </div>
    </div>
  
  
  </section>
  );
}

export default RutaU;