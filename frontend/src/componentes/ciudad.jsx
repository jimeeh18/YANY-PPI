import React, { useRef, useEffect } from 'react';


function Ciudady() {
  return (
    <div>
      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Ciudad</p>
      <select className="form-control form-control-lg">
        <option>Selecciona una ciudad</option>
        <option>Medellin</option>
        <option>Baranquilla</option>
        <option>Cali</option>
        <option>Cartagena de indias</option>
        <option>Bogotá</option>
      </select>

      <div className="form-group  mt-3">
        <label for="exampleFormControlInput1 text-center ">Dirección</label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="ejemplo: Calle 10 #20-30, Bogotá D.C."
        />
      </div>

           <div className="d-flex mt-3 justify-content-center">
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

export default Ciudady;
