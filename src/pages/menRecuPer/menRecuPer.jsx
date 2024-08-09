import React from "react"
import "./menRecuPer.css"
import BotonContinuar from "../../components/BotonContinuar.jsx"

const RecuperarContrasena2 = () => {
    return (
        <div className="RecupCon2">
            <header className="RecupCon2__header">
                <div className="header__img">
                    <img src="./logo1.png" className="img__logo" alt="Logo pagina web" />
                </div>
                <div className="label__incio2">
                    <h2 className="inicio__text">
                        SE ENVIO UN CORREO PARA LA RECUPERACION DE SU CONTRASEÑA A EL CORREO LEO********@GMAIL.COM
                    </h2>
                </div>
                <div className="botones">
                    <BotonContinuar texto="VOLVER AL INICIO" href="src/App.jsx"/>
                </div>
            </header>
        </div>
    )
}

export default RecuperarContrasena2;
