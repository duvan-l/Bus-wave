import React from 'react';
import './botonContinuar.css'; // Importa los estilos desde un archivo CSS

const BotonContinuar = ({ texto, link }) => {
  return (
    // <a className={clase} href={link}>{texto}</a>
    <button className="continue-button" href={link}>
      {texto}
    </button>
  );
};

export default BotonContinuar;
