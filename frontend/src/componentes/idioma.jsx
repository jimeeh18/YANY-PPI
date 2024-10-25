import React from "react";

function Idioma() {
  return (
<div>

<p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Idioma                  </p>  
      <select className="form-control form-control-lg">
        <option>Selecciona una ciudad</option>

      </select>
     



      <div className="d-flex justify-content-center">
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
          Inicio
        </button>
      </div>
    </div>
  );
}

export default Idioma;
