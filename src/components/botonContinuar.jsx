import React from 'react';
import './botonContinuar.css'; // Importa los estilos desde un archivo CSS

const BotonContinuar = ({ texto }) => {
  return (
    <button className="continue-button">
      {texto}
    </button>
  );
};

export default BotonContinuar;
