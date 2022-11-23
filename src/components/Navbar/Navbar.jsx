import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <header>
                <div className="containerHeader">
                    <div className="log">
                        
                        <Link to="/"><img src="galeria/logoIpf.png"></img></Link>
                    </div>

                    <div className="menu">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/Cursos">Cursos</Link>
                                </li>
                                <li>
                                    <a href="#">Enseñe en CursosYa!</a>
                                </li>
                                <li>
                                    <a href="#">Mi aprendizaje</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div className="headerRegister">

                        <Link type="button" value="Iniciar Sesion" className="btnHeaderLogin" to="/IniciarSesion">IniciarSesión</Link>
                        <Link type="button" value="Registrarse" className="btnHeaderRegister" to="/Registro">Regístrate</Link>

                    </div>
                </div>
        </header>
    )
}

export default Navbar