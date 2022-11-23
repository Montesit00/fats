import { useState } from "react";

import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const IniciarSesion = (param) => {

    /*const [ passwordError, SetPasswordError ] = useState(false);*/
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    
    const [usuarios,setUsuarios] = useState({
        email:"",
        password:""
    })

    const { email, password } = usuarios;

    const valorInput = ({ target }) => {
        setUsuarios({
            ...usuarios,
            [target.name]:target.value
        }) 
           /* if ( [target.password].target.value < 6 ) {
                SetPasswordError(true); 
            } else {
                SetPasswordError(false);
                setUsuarios.password(value)
            }*/
    };

    const guardarDatos = async (e) => {
        e.preventDefault();
        
            options.body = JSON.stringify({ email, password }) 
            const resp = await fetch('http://localhost:5000/login', options)

            if(!resp.ok) alert('Hubo un error en las casillas verifique y intenlo de nuevo');

            const data = await resp.json()
            console.log(data);
            
            localStorage.setItem("token",JSON.stringify(data))

            window.location.href="/Cursos"
    };

    return(
        <>
            <Navbar/>
            <div className="row vh-100">
                    <div className="col-md-5 mx-auto align-self-center col-lg-3 col-sm-6 col-sx-12">
                        <form className="border p-4 rounded bg-white" onSubmit={guardarDatos}>
                            <div className="container">
                                <h3>Inicia Sesion</h3>
                                <div className="inputContainer" >
                                    <input 
                                        type="text" 
                                        name="email" 
                                        autoComplete="off" 
                                        placeholder="Email"  
                                        onChange= {valorInput}
                                        value={email}
                                        autoFocus={true}
                                       /* param={SetPasswordError} */
                                    />
                                </div>
                                <div className=/*param ? 'input-error' : */"inputContainer">
                                    <input 
                                        type="password" 
                                        name="password" 
                                        autoComplete="off" 
                                        placeholder="Contraseña" 
                                        onChange={valorInput}
                                        value={password}
                                    />
                                     { /*  { passwordError && 
                                            <label className="label-error">
                                                Verifique la contraseña
                                            </label>
                                        } */}
                                </div>
                                <button type="submit" className='btn btn-sm btn-dark mt-4'>Iniciar</button>
                            </div>
                        </form>
                    </div>
                </div> 
            <Footer/>
        </>
    )
}

export default IniciarSesion