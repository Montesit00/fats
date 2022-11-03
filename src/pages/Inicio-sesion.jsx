import { useState } from "react";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Mainbody from "../Components/Mainbody"

const IniciarSesion = () => {
    
    const [password, setPassword] = useState('');
    const [usuario, setUsuario] = useState('');
        console.log('hola123')
        const RegistrarNuevoUser = async () => {

            const url = "http://localhost:5000/registro"
            let myHeaders = new Headers();
    
            myHeaders.append("Content-Type", "application/json")
            
            const raw = JSON.stringify({
                password: password,
                usuario: username
            })
    
            const options = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            }
            
            const postData = await fetch(url, options)
            const res = postData.json()
            console.log(res) 
            console.log('hola123')
        }
    

    return(
        <>
            <Navbar/>
            <div className="row vh-100">
                    <div className="col-md-5 mx-auto align-self-center col-lg-3 col-sm-6 col-sx-12">
                        <form action="" className="border p-4 rounded bg-white" onSubmit={RegistrarNuevoUser}>
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
                                        type="password" 
                                        name="password" 
                                        autoComplete="off" 
                                        placeholder="Contraseña" 
                                        onChange={(e) => {setPassword(e.target.value)}}
                                        value={password}
                                    />
                                </div>
                                <button type="button" className='btn btn-sm btn-primary mt-4'>Regístro</button>
                            </div>
                        </form>
                    </div>
                </div> 
            <Footer/>
        </>
    )
}

export default IniciarSesion