import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Registro from '../pages/registroC';
import Iniciou from '../componentes/inicioU';






function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/registro' element={<Registro/>}/>
          <Route exact path='/iniciou' element={<Iniciou/>}/>
        </Routes>
      
    </Router>
  );
}

export default App;