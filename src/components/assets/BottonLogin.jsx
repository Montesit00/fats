import React from 'react'
import { Link } from "react-router-dom";

export const ButtonLogin = () => {
    return(
            <Link type="button" value="Iniciar Sesion" className="btnHeaderLogin" to="/IniciarSesion">IniciarSesión</Link>
    )
 }
