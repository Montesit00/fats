import { useState } from "react";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ConsultaAPI from "../../components/API/ConsultaAPI"

const IniciarSesion = () => {
    
    //Creo los manejadores de estados
	const [email,setEmail] = useState('')
	const [password,setPassword] = useState('') 
	const [user, setUser] = useState(null);

    //Manejo de errores
	const[errorMessage, setErrorMessage] = useState (null)

    if (localStorage.getItem(null)){
		setUser('')
	}

	const guardarDatos = async (event) =>{
		event.preventDefault()	
        
		try{	
			//le paso las credenciales
			const user = await ConsultaAPI.buscador({
				email,
				password
			})
			//guardo la informacion en el localStorage
			window.localStorage.setItem(
				//Lo guardo comos string
				'loggedUser', JSON.stringify(user)
			)
			//Guardo la informacion
			setUser(user);

			//reseteo los estados
			setEmail('');
			setPassword('');

			//Redirecciono
			window.location.href="/Cursos"
			
			//En caso que exista un error se le envia un mensaje
		}catch(e){
			setErrorMessage('Usuario o Contraseña incorrecta')
			setTimeout(() => {
					setErrorMessage(null)
			}, 3000)
		}
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
                                        onChange= {({target}) => setEmail(target.value)}
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
                                        onChange={({target}) => setPassword(target.value)}
                                        value={password}
                                    />
                                </div>
                                <button type="submit" className='btn btn-sm btn-dark mt-4'>Iniciar</button>
                                {errorMessage && 
                                        <div className="alert fade_error .fade"> 
                                            <strong>{errorMessage}</strong> 
                                        </div>
                                    }
                            </div>
                        </form>
                    </div>
                </div> 
            <Footer/>
        </>
    )
}

export default IniciarSesion