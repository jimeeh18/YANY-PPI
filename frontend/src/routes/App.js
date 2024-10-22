import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import ProfileU from '../pages/profileU';
import InicioC from '../pages/inicioC';
import SolicitudU from '../pages/solucitudes'


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/perfil' element={<Profile/>}/>
          <Route exact path='/perfilU' element={<ProfileU/>}/>
          <Route exact path='/inicioC' element={<InicioC/>}/>
          <Route exact path='/SolicitudU' element={<SolicitudU/>}/>
        
        </Routes>
      
    </Router>
  );
}

export default App;