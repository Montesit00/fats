import { useState } from "react";

import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar"

const Registro = () => {

    //cargo o aviso q se utilizara el metodo post
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    
    //cargo el models de mi usuario
    const [usuarios,setUsuarios] = useState({
        username:"",
        email:"",
        password:""
    })

    //desestructuro los valores del usuario para cargarlos en los inputs
    const { username, email, password } = usuarios;

    //Se guardan los valores de los input
    const valorInput = ({ target }) => {
        setUsuarios({
            ...usuarios,
            [target.name]:target.value
        })
    };

    const guardarDatos = async (e) => {
        e.preventDefault(); //metodo de eventos (evento no cancelable)
        
        //convierte un valor de JavaScript en una cadena JSON
        
            // Se modifica el uso del fetch, añadiendo los datos del formulario
            options.body = JSON.stringify({ username, email, password }) //(JSON.stringl)convierte un valor de JavaScript en una cadena JSON
            const resp = await fetch('http://localhost:5000/registro', options)

            // Si da false, significa que hubo un error en la petición
            if(!resp.ok) alert('Hubo un error en las casillas verifique y intenlo de nuevo');

            const data = await resp.json()
            console.log(data);

            window.location.href="/iniciosesion"
    }

    return(
        <>
            <Navbar/>
                <div className="row vh-100">
                    <div className="col-md-5 mx-auto align-self-center col-lg-3 col-sm-6 col-sx-12">
                        <form  className="border p-4 rounded bg-white" onSubmit={guardarDatos}>
                            <div className="container">
                                <h3>Registrese y aprenda!</h3>
                                <div className="inputContainer">
                                    <input 
                                        type="text" 
                                        name="username" 
                                        autoComplete="off" 
                                        placeholder="Nombre Completo"  
                                        onChange={valorInput}
                                        value={username}
                                        autoFocus={true}
                                    />
                                </div>
                                <div className="inputContainer">
                                    <input 
                                        type="email" 
                                        name="email"  
                                        autoComplete="off" 
                                        placeholder="Correo electronico" 
                                        onChange={valorInput}
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
                                        onChange={valorInput}
                                        value={password}
                                        autoFocus={true}
                                    />
                                </div>
                                <button type="submit" className='btn btn-sm btn-dark mt-4'>Regístro</button>
                            </div>
                        </form>
                    </div>
                </div>
        <Footer/>
    </>
    )
}
export default Registro