import React from 'react';
import './App.css';
import BotonContinuar from './components/botonContinuar.jsx';
import IngresoTexto from './components/ingresoTexto.jsx';

function App() {
  return (
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
          <h3 className='inicio__alert'>
            olvido su contraseña?
          </h3>
        </div>

        <div className='botones'>
          <BotonContinuar texto="REGISTRARSE" />
          <BotonContinuar texto="CONTINUAR" />

        </div>
      </header>
    </div>
  );
}

export default App;
