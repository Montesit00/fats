import React from 'react'
import { Link } from "react-router-dom";

function FooterNabvar() {
  return (
    <>
        <div className="headerRegister">
            <Link type="button" value="Iniciar Sesion" className="btnHeaderLogin" to="/IniciarSesion">IniciarSesión</Link>
            <Link type="button" value="Registrarse" className="btnHeaderRegister" to="/Registro">Regístrate</Link>
        </div>
    </>
  )
}

export default FooterNabvar