import { useState } from "react";

import Footer from "../components/Footer";
import Mainbody from "../Components/Mainbody"

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
        usuario:"",
        email:"",
        password:""
    })

    //desestructuro los valores del usuario para cargarlos en los inputs
    const { usuario, email, password } = usuarios;

    //Se guardan los valores de los input
    const valorInput = ({ target }) => {
        setUsuarios({
            ...usuarios,
            [target.name]:target.value
        })
    };

    const submiteForm = (e) => {
        e.preventDefault(); //metodo de eventos (evento no cancelable)
       
        //convierte un valor de JavaScript en una cadena JSON
        (async() => {
            // Se modifica el uso del fetch, añadiendo los datos del formulario
            options.body = JSON.stringify({ usuario, email, password }) //(JSON.stringl)convierte un valor de JavaScript en una cadena JSON
            const resp = await fetch('http://localhost:5000/registro', options)

            // Si da false, significa que hubo un error en la petición
            if(!resp.ok) alert('Hubo un error en las casillas verifique y intenlo de nuevo');

            const data = await resp.json()
            console.log(data);

            //en caso que exista el usuario lo manda al home
            <Route path='/' render={()=> isUser ? <Mainbody/> : <Redirect to="/login"/>}/>
            //En caso que no exista usuario lo mando al login
            //<Route path='/login' render={()=> !isUser ? <IniciarSesion/> : <Redirect to="/home"/>
        })
    }

    return(
        <>
                <div className="row vh-100">
                    <div className="col-md-5 mx-auto align-self-center col-lg-3 col-sm-6 col-sx-12">
                        <form action="" className="border p-4 rounded bg-white" onSubmit={submiteForm}>
                            <div className="container">
                                <h3>Registrese y aprenda!</h3>
                                <div className="inputContainer">
                                    <input 
                                        type="text" 
                                        name="usuario" 
                                        autoComplete="off" 
                                        placeholder="Nombre Completo"  
                                        onChange={valorInput}
                                        value={usuario}
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
export default Registro