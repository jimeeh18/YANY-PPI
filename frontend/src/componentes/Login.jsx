import React from "react";
import Portada from "../images/Portada.png";
import Cookies from "universal-cookie";
import axios from "axios";
import sha1 from "sha1";

// import { Link } from 'react-router-dom';

const cookies = new Cookies();
const baseUrl = "http://localhost:4001/api/usuarios";

class Iniciosesion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        Correo: "",
        Contraseña: "",
      },
    };
  }

  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  iniciarSesion = async () => {
    await axios.get(baseUrl).then((response) => {
        alert(response.data);
        
      })
      .then(response => {
        if (response.length > 0) {
          var respuesta = response[0];
          cookies.set('Id', respuesta.Id, {path: "/"});
          cookies.set('Apellido', respuesta.Apellido, {path: "/"});
          cookies.set('Nombre_U', respuesta.Nombre_U, {path: "/"});
          cookies.set('Correo', respuesta.Correo, {path: "/"});
          alert(`Bienvenido ${respuesta.Nombre_U} ${respuesta.Apellido}`);
          window.location.href = "/homeL";
        } else {
          alert("El usuario o la contraseña no son correctos");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    if (cookies.get("Correo")) {
      window.location.href = "../pages/HomeL";
    }
  }
  render() {
    return (
      <div className="Iniciosesion">
        <div className="container">
          <div className="row">
            <img
              src={Portada}
              style={{ maxWidth: "500px" }}
              className="rounded mx-auto d-block"
              alt="portada"
            />
            <div className="container">
              <div className="mx-auto " style={{ maxWidth: "400px" }}>
                <form className="need-validation">
                  <div className="card">
                    <div className="card-header">Iniciar sesión</div>
                    <div className="card-body">
                      <div className="mb-3">
                        <label className="form-label">
                          Usuario o correo electrónico
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="Correo"
                          id="user"
                          aria-describedby="helpId"
                          placeholder=""
                          onChange={this.handleChange}
                          required
                        />
                        <small id="helpId" className="form-text text-muted">
                          Escriba su nombre de usuario o correo electronico.
                        </small>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <input
                          type="password"
                          className="form-control"
                          name="Contraseña"
                          id=""
                          aria-describedby="helpId"
                          placeholder=""
                          onChange={this.handleChange}
                          required
                        />
                        <small id="helpId" className="form-text text-muted">
                          Escriba su contraseña.
                        </small>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={() => this.iniciarSesion()}
                      >
                        Iniciar sesión
                      </button>
                    </div>
                  </div>
                </form>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Iniciosesion;