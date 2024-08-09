// src/App.js
import React from 'react';
import { BrowserRouter as Router,} from 'react-router-dom';
import './App.css';
import BotonContinuar from './components/BotonContinuar.jsx';
import IngresoTexto from './components/IngresoTexto.jsx';
// import RecuperarContrasena from './pages/recuperarContra/recupCon.jsx'; // Asegúrate de que este archivo exista

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App__header'>
          <div className='header__img'>
            <img src="src/img/logo1.png" className='img__logo' alt="Logo pagina web"/>
          </div>
          <div className='label__inicio'>
            <IngresoTexto 
              className="input"
              label="USUARIO"
              type="text"
              placeholder="Escriba su usuario"
            /> 
            <IngresoTexto 
              className="input"
              label="CONTRASEÑA"
              type="password"
              placeholder="Escriba su contraseña"
            /> 
            <a className='inicio__alert' href="./src/pages/recuperarContra/recupCon.html">¿Olvidó su contraseña?</a>
          </div>
          <div className='botones'>
            <BotonContinuar texto="REGISTRARSE" link="src/components/ingresoTexto.jsx"/>
            <BotonContinuar texto="CONTINUAR" link="src/components/ingresoTexto.jsx"/>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
