import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Inicioc from '../pages/inicioC';
import Registro from '../pages/registroC'
import Iniciou from '../componentes/inicioU';
import Chat from '../pages/chat';
import Chatu from '../pages/chatu';
import Idioma from '../pages/idioma';
import Ciudad from '../pages/ciudad';
import Intro from '../pages/intro';
import Formulario from '../pages/formulario';





function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/inicioc' element={<Inicioc/>}/>
          <Route exact path='/registro' element={<Registro/>}/>
          <Route exact path='/iniciou' element={<Iniciou/>}/>
          <Route exact path='/chat' element={<Chat/>}/>
          <Route exact path='/chatu' element={<Chatu/>}/>
          <Route exact path='/idioma' element={<Idioma/>}/>
          <Route exact path='/ciudad' element={<Ciudad/>}/>
          <Route exact path='/intro' element={<Intro/>}/>
          <Route exact path='/formulario' element={<Formulario/>}/>
          
          
         

        
          
        </Routes>
      
    </Router>
  );
}

export default App;