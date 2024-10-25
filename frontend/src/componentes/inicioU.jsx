import React from "react";


function Iniciou() {
  return (
  
    <div className="container">
      <section className="mx-auto my-5" style={{ maxWidth: "23rem;" }}>
      <h2 style={{fontSize:"10px",}}>Atrás</h2>
        <div className="card map-card">
          <div
            id="map-container-google-1"
            className="z-depth-1-half map-container"
            style={{ height: "60vh" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15863.55516843332!2d-75.6088832!3d6.2783488!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1727211507015!5m2!1ses-419!2sco"
              width="100%"
              height="80%"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="mapa"
            ></iframe>
          </div>
      
               
              
        </div>
      </section>
 
      

      <div className="card" style={{width:"18rem;",backgroundColor: "#d080ff" }}>
        
  <div className="card-header">
    Featured
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Cras justo odio</li>
    <li className="list-group-item">Dapibus ac facilisis in</li>
    <li className="list-group-item">Vestibulum at eros</li>
  </ul>
</div>
    </div>
  );
}

<select className="form-select" size="3" aria-label="size 3 select example">
  <option selected>¿Lleva mascota o acompañante?</option>
  <option value="1">Si</option>
  <option value="2">No</option>
</select>


export default Iniciou;
