import React from 'react';
import './recupCon.css';
import IngresoTexto from '../../components/IngresoTexto';
import BotonContinuar from '../../components/BotonContinuar';

const RecuperarContrasena = () => {
  return (
    <div className='RecupCon'>
      <header className='RecupCon__header'>
        <div className='header__img'>
          <img src="./logo1.png" className="img__logo" alt="Logo pagina web" />
        </div>
        <div className='label__inicio1'>
          <IngresoTexto
            className="input"
            label="USUARIO"
            type="text"
            placeholder="Escriba su usuario"
          />
        </div>
        <div className='botones'>
          <BotonContinuar texto="RECUPERAR CONTRASEÑA" href="src/pages/menRecuPer/menRecuPer.html" />
        </div>
        {/* <div className='volver'>
        </div> */}
      </header>
    </div>
  );
};

export default RecuperarContrasena;

