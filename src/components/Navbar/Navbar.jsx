import React,{useState,useEffect} from "react";

import { Link } from "react-router-dom";
import { ButtonCerrarSesion } from "../assets/BottonCerrarSesion";
import { ButtonLogin } from "../assets/BottonLogin";
import { ButtonRegister } from "../assets/BottonRegistro";

const Navbar = () => {

    const [Login, setLogin] = useState(null);

     useEffect(() => {
        const usuarioT = localStorage.getItem('loggedUser')
        if (usuarioT){
                const user = JSON.parse(usuarioT)
                setLogin(user)
            }
        }, [])
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
                        
                        {Login 
                            ?  
                                <ButtonCerrarSesion/>    
                            : 
                                <>
                                <ButtonLogin/>
                                <ButtonRegister/>
                                </> 
                        } 
                    </div>

                </div>
        </header>
    )
}

export default Navbar