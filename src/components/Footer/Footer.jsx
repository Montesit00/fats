import React from "react";

const Footer = () =>{
   return (
        <footer>
            <div className="containter-footer-all">

                <div className="container-body">
                    <div className="colum1">
                        <h1>Mas informacion sobre el proyecto</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Dolorem perferendis pariatur dolores, modi ducimus amet?</p>
                    </div>
                    <div className="colum2">
                        <h1>Redes Sociales</h1>
                            <div className="row">
                                <i className="fa-brands fa-facebook"></i>
                                <label>Siguenos en Facebook</label>
                            </div>
                            <div className="row">
                                <i className="fa-brands fa-instagram"></i>
                                <label>Siguenos en Instagram</label>
                            </div>
                    </div>
                    <div className="colum3">
                        <h1>Información Contactos</h1>
                            <div className="row2">
                                <img src=""></img>
                                <label> 
                                    Plaza San Martin,
                                    Republica Argentina
                                    Formosa Capital
                                </label>
                            </div>
                            <div className="row2">
                                <img src=""></img>
                                <label> 
                                    +543704959493                               
                                </label>
                            </div>
                            <div className="row2">
                                <img src=""></img>
                                <label> 
                                    CursosYaFormosa@gmail.com
                                </label>
                            </div>
                    </div>
                </div>

                <div className="container-footer">
                    <div className="footer">
                        <div className="copyright">
                            2022 Todos los derechos reservados para <a>CursosYa</a>
                        </div>

                        <div className="informacion">
                            <a href="#">Información Compañia</a>
                                | 
                            <a href="#">Privacion y Política </a> 
                                | 
                            <a href="#">Terminos y Condiciones</a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer