import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Registro from '../pages/registroC'
import Iniciou from '../pages/inicioU';
import Chat from '../pages/chat';
import Chatu from '../pages/chatu';
import Idioma from '../pages/idioma';
import Ciudad from '../pages/ciudad';
import Intro from '../pages/intro';
import Formulario from '../pages/formulario';
import Profile from '../pages/Profile';
import ProfileU from '../pages/profileU';
import InicioC from '../pages/inicioC';
import SolicitudU from '../pages/solucitudU'
import Camarap from '../pages/camara'
import Trayecto from '../pages/trayecto'
import Configuracion from '../pages/configuracion'
import Acerca from '../pages/acerca'
import Eliminar from '../pages/eliminar'
import Soporte from '../pages/soporte'
import Conversacion from '../pages/conversacion'
import Ayuda from '../pages/ayuda'
import Servicio from '../pages/servicio'
import RutaC from '../pages/rutac'
import RutaU from '../pages/rutau'
import Aceptar from '../componentes/aceptar';


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/registro' element={<Registro/>}/>
          <Route exact path='/iniciou' element={<Iniciou/>}/>
          <Route exact path='/chat' element={<Chat/>}/>
          <Route exact path='/chatu' element={<Chatu/>}/>
          <Route exact path='/idioma' element={<Idioma/>}/>
          <Route exact path='/ciudad' element={<Ciudad/>}/>
          <Route exact path='/intro' element={<Intro/>}/>
          <Route exact path='/formulario' element={<Formulario/>}/>
          <Route exact path='/perfil' element={<Profile/>}/>
          <Route exact path='/perfilU' element={<ProfileU/>}/>
          <Route exact path='/inicioC' element={<InicioC/>}/>
          <Route exact path='/SolicitudU' element={<SolicitudU/>}/>
          <Route exact path='/Camara' element={<Camarap/>}/>
          <Route exact path='/Trayecto' element={<Trayecto/>}/>
          <Route exact path='/Configuracion' element={<Configuracion/>}/>
          <Route exact path='/Acerca' element={<Acerca/>}/>
          <Route exact path='/Eliminar' element={<Eliminar/>}/>
          <Route exact path='/soporte' element={<Soporte/>}/>
          <Route exact path='/Conversacion' element={<Conversacion/>}/>
          <Route exact path='/Ayuda' element={<Ayuda/>}/>
          <Route exact path='/Servicio' element={<Servicio/>}/>
          <Route exact path='/RutaC' element={<RutaC/>}/>
          <Route exact path='/RutaU' element={<RutaU/>}/>
          <Route exact path='/Aceptar' element={<Aceptar/>}/>
        </Routes>
    </Router>
  );
}

export default App;