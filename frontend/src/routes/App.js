import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import ProfileU from '../pages/profileU';


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/perfil' element={<Profile/>}/>
          <Route exact path='/perfilU' element={<ProfileU/>}/>
        
        </Routes>
      
    </Router>
  );
}

export default App;