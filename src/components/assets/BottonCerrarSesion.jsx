import React from 'react'
import { Link } from "react-router-dom";

export const ButtonCerrarSesion = () => {

  //Usamos RemoveItem para eliminar el token del localStorage
  const Logaut = () => {

		window.localStorage.removeItem('loggedUser')
        window.location.href="/"
	}

    return (
            <Link type="button" value="logaut" className="btnHeaderRegister" onClick={Logaut} to="/">Cerrar Sesion</Link>
    )
}
