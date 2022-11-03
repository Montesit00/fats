import { useState } from "react";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Mainbody from "../Components/Mainbody"

const IniciarSesion = () => {
    
    
    return(
        <>
            <Navbar/>
            <div className="row vh-100">
                    <div className="col-md-5 mx-auto align-self-center col-lg-3 col-sm-6 col-sx-12">
                        <form className="border p-4 rounded bg-white" onSubmit={guardarDatos}>
                            <div className="container">
                                <h3>Registrese y aprenda!</h3>
                                <div className="inputContainer">
                                    <input 
                                        type="text" 
                                        name="usuario" 
                                        autoComplete="off" 
                                        placeholder="Nombre Completo"  
                                        onChange={(e) => {setUsuario(e.target.value)}}
                                        value={usuario}
                                        autoFocus={true}
                                    />
                                </div>
                                <div className="inputContainer">
                                    <input 
                                        type="text" 
                                        name="email" 
                                        autoComplete="off" 
                                        placeholder="Email"  
                                        onChange={(e) => {setEmail(e.target.value)}}
                                        value={email}
                                        autoFocus={true}
                                    />
                                </div>
                                <div className="inputContainer">
                                    <input 
                                        type="password" 
                                        name="password" 
                                        autoComplete="off" 
                                        placeholder="Contraseña" 
                                        onChange={(e) => {setPassword(e.target.value)}}
                                        value={password}
                                    />
                                </div>
                                <button type="submit" className='btn btn-sm btn-primary mt-4'>Regístro</button>
                            </div>
                        </form>
                    </div>
                </div> 
            <Footer/>
        </>
    )
}

export default IniciarSesion