import React from 'react';
import './ingresoTexto.css'; // Importa los estilos desde un archivo CSS

const IngresoTexto = ({ label, type, placeholder }) => {
  return (
    <>
    <div className='inputContainer'>
        <label className='labelIngreso' >{label}</label>
        <input 
            className='input'
            placeholder={placeholder}
            type={type}
            // value={value}
            // onChange={onChange}
            required
        />
    </div>
 
    </>
  )
};

export default IngresoTexto;
