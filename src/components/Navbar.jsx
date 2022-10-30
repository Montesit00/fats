import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
    return(
       <header>
            <div className="containerHeader">
                <div className="log">
                    <img src="" alt=""></img>
                </div>

                <div className="menu">
                    <nav>
                        <ul>
                            <li>
                                <a href="#">Categorias</a>
                            </li>
                            <li>
                                <div className="buscador_box">
                                    <input type="text" placeholder="Buscador Facil"/>
                                    <i class="bi bi-search"></i>
                                </div>
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
                    <input type="button" value="Iniciar Sesion" className="btnHeaderLogin"/>
                     <Link  type="input" className="btnHeaderRegister" value="Registrarse" to="/Registro">Registro</Link>
                </div>
            </div>
       </header>
    )
}

export default Navbar