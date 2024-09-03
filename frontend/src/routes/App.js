import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Profile from '../pages/Profile';


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/perfil' element={<Profile/>}/>
        </Routes>
      
    </Router>
  );
}

export default App;