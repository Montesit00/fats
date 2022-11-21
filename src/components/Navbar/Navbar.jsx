import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <header>
                <div className="containerHeader">
                    <div className="log">
                        <img src="" alt=""></img>
                    </div>
                    {/* <div className="button-buscar">
                                    <input type="text" placeholder="Buscar" required/>
                                        <div className="btn-buscar">
                                            <i className="fas fa-search icon"></i>
                                        </div>
                                </div> */}
                    <div className="menu">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">Categorias</a>
                                </li>
                                <li>
                                    <a href="#">Undefined</a>
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